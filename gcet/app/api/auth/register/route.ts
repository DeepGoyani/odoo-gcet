import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, password, role = 'employee' } = await request.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);

    if (existingUser && existingUser.length > 0) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = await db.insert(users).values({
      first_name: firstName,
      last_name: lastName,
      email,
      password_hash: hashedPassword,
      role,
      is_active: true,
      created_at: new Date(),
      updated_at: new Date()
    }).returning();

    if (!newUser || newUser.length === 0) {
      return NextResponse.json(
        { error: 'Failed to create user' },
        { status: 500 }
      );
    }

    const createdUser = newUser[0];

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: createdUser.id, 
        email: createdUser.email,
        role: createdUser.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Remove password from response
    const { password_hash: _, ...userWithoutPassword } = createdUser;

    // Create response
    const response = NextResponse.json({
      message: 'Registration successful',
      user: userWithoutPassword,
      token
    });

    // Set HTTP-only cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { UserAvatar } from '@/components/ui/user-avatar';
import { NotificationBell } from '@/components/ui/notification-bell';

export default function AdminReportsPage() {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Lined Top Navigation */}
            <nav className="bg-white border-b border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 border border-black flex items-center justify-center overflow-hidden bg-white font-black text-xs uppercase">
                                    {session?.user?.companyLogo ? (
                                        <img src={session.user.companyLogo} alt="Logo" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-black font-black italic">LOGO</span>
                                    )}
                                </div>
                                <div>
                                    <h1 className="text-2xl font-black text-black tracking-tighter uppercase leading-none">
                                        Dayflow
                                    </h1>
                                    <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">
                                        ADMIN CONTROL PORTAL
                                    </p>
                                </div>
                            </div>

                            <div className="flex border border-black bg-white overflow-hidden shadow-[2px_2px_0_0_#000]">
                                <Link href="/admin" className="px-8 py-3 text-[10px] font-black uppercase tracking-widest text-black border-r border-black hover:bg-gray-100 transition-colors">
                                    Employees
                                </Link>
                                <Link href="/admin/attendance" className="px-8 py-3 text-[10px] font-black uppercase tracking-widest text-black border-r border-black hover:bg-gray-100 transition-colors">
                                    Attendance
                                </Link>
                                <Link href="/admin/time-off" className="px-8 py-3 text-[10px] font-black uppercase tracking-widest text-black border-r border-black hover:bg-gray-100 transition-colors">
                                    Time Off
                                </Link>
                                <Link href="/admin/payroll" className="px-8 py-3 text-[10px] font-black uppercase tracking-widest text-black border-r border-black hover:bg-gray-100 transition-colors">
                                    Payroll
                                </Link>
                                <Link href="/admin/reports" className="px-8 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-black hover:bg-gray-900 transition-colors">
                                    Reports
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <NotificationBell />
                            <UserAvatar />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-10">
                    <h2 className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-[0.3em] font-mono italic">ANALYTICS_SUITE / DATA_EXTRACTION_CENTER</h2>
                    <h1 className="text-4xl font-black text-black uppercase tracking-tight mb-2 italic">Institutional Intelligence</h1>
                    <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Generate comprehensive summaries for operational auditing</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { title: 'ATTENDANCE_METRICS', desc: 'Detailed tracking of inward/outward employee shifts.', color: 'border-blue-500' },
                        { title: 'PAYROLL_DISBURSEMENTS', desc: 'Cumulative financial liability and individual payslip clusters.', color: 'border-green-500' },
                        { title: 'LEAVE_UTILIZATION', desc: 'Analysis of time-off patterns and balance consumption.', color: 'border-red-500' }
                    ].map((report, idx) => (
                        <div key={idx} className={`bg-white border-2 border-black p-8 shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group`}>
                            <div className={`w-10 h-1 border border-black mb-6 bg-black`}></div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 italic group-hover:text-blue-600 transition-colors">{report.title}</h3>
                            <p className="text-[10px] text-gray-400 font-mono leading-relaxed mb-8">{report.desc}</p>
                            <button className="w-full py-3 bg-black text-white text-[8px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_0_#444] group-hover:bg-blue-600 transition-all">GENERATE_REPORT_v1.0</button>
                        </div>
                    ))}
                </div>

                <div className="border border-black bg-white shadow-[8px_8px_0_0_#000] overflow-hidden">
                    <div className="px-8 py-5 border-b border-black bg-gray-50 flex justify-between items-center">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] font-mono italic">ARCHIVAL_LOGS / RECENT_GENERATIONS</h2>
                        <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Real-time update active</div>
                    </div>
                    <div className="overflow-x-auto text-[10px]">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-black text-white shrink-0">
                                    <th className="px-8 py-5 font-black uppercase tracking-widest border-r border-white/20">Extraction ID</th>
                                    <th className="px-8 py-5 font-black uppercase tracking-widest border-r border-white/20">Domain Scope</th>
                                    <th className="px-8 py-5 font-black uppercase tracking-widest border-r border-white/20 text-center">Protocol Integrity</th>
                                    <th className="px-8 py-5 font-black uppercase tracking-widest">Timestamp</th>
                                    <th className="px-8 py-5 font-black uppercase tracking-widest text-right">Access</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black font-mono">
                                <tr>
                                    <td className="px-8 py-5 border-r border-black font-black text-blue-600 italic">#REP-772-X</td>
                                    <td className="px-8 py-5 border-r border-black font-black uppercase italic">Payroll_Monthly_Consolidated</td>
                                    <td className="px-8 py-5 border-r border-black text-center">
                                        <div className="inline-block px-3 py-1 bg-green-500 text-white border border-black text-[8px] font-black uppercase shadow-[1px_1px_0_0_#000]">VERIFIED</div>
                                    </td>
                                    <td className="px-8 py-5 border-r border-black text-gray-400 italic">2024-05-20 / 14:30:00</td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="text-black font-black uppercase underline tracking-tighter hover:text-blue-600 transition-colors underline-offset-4">Download_Raw</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-5 border-r border-black font-black text-blue-600 italic">#REP-771-Y</td>
                                    <td className="px-8 py-5 border-r border-black font-black uppercase italic">Attendance_Audit_Cycle_04</td>
                                    <td className="px-8 py-5 border-r border-black text-center">
                                        <div className="inline-block px-3 py-1 bg-green-500 text-white border border-black text-[8px] font-black uppercase shadow-[1px_1px_0_0_#000]">VERIFIED</div>
                                    </td>
                                    <td className="px-8 py-5 border-r border-black text-gray-400 italic">2024-05-18 / 09:15:00</td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="text-black font-black uppercase underline tracking-tighter hover:text-blue-600 transition-colors underline-offset-4">Download_Raw</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

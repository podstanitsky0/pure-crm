"use client";
import Link from "next/link";
export default function Navbar(){
 return(<div className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
   <h1 className="text-2xl font-bold text-[var(--pm-blue)]">Pure CRM</h1>
   <div className="flex gap-6">
     <Link className="hover:text-[var(--pm-blue)]" href="/">Dashboard</Link>
     <Link className="hover:text-[var(--pm-blue)]" href="/clients">Clients</Link>
     <Link className="hover:text-[var(--pm-blue)]" href="/analytics">Analytics</Link>
     <Link className="hover:text-[var(--pm-blue)]" href="/vip">VIP</Link>
   </div></div>);
}
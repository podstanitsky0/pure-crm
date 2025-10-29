"use client";
import data from "../data/db.json";
import Link from "next/link";
import { useState } from "react";
export default function ClientsPage(){
 const [search,setSearch]=useState("");
 const filtered=data.filter(c=> (c.real_name||c.username||"").toLowerCase().includes(search.toLowerCase()));
 return(<div><h1 className="text-3xl font-bold mb-6 text-[var(--pm-blue)]">Clients</h1>
 <input placeholder="Search clients..." className="p-3 w-full max-w-md bg-[var(--pm-blue-light)] rounded-lg mb-6 outline-none" value={search} onChange={e=>setSearch(e.target.value)}/>
 <div className="overflow-hidden rounded-xl shadow border bg-white">
 <table className="w-full"><thead className="bg-[var(--pm-blue-light)] text-left"><tr>
 <th className="p-3">Name</th><th className="p-3">Phone</th><th className="p-3">VIP</th><th className="p-3">Service</th><th className="p-3">Actions</th>
 </tr></thead>
 <tbody>{filtered.map((c,i)=>(<tr key={i} className="border-t">
 <td className="p-3">{c.real_name||c.username}</td>
 <td className="p-3">{c.phone||"-"}</td>
 <td className="p-3"><span className="px-3 py-1 rounded-lg text-white" style={{background:c.VIP_tier==="VIP"?"var(--pm-gold)":c.VIP_tier==="Returning"?"var(--pm-blue)":"#ccc"}}>{c.VIP_tier||"Regular"}</span></td>
 <td className="p-3">{c.service_type||"-"}</td>
 <td className="p-3"><Link className="text-[var(--pm-blue)] underline" href={`/clients/${i}`}>View</Link></td>
 </tr>))}</tbody></table></div></div>);
}
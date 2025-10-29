"use client";
import data from "../../data/db.json";
export default function ClientDetail({params}){
 const c=data[params.id];
 if(!c) return <div>Client not found.</div>;
 return(<div className="space-y-6">
 <h1 className="text-3xl font-bold text-[var(--pm-blue)]">{c.real_name||c.username}</h1>
 <div className="bg-white p-6 rounded-xl shadow space-y-3">
 <div><b>Phone:</b> {c.phone||"-"}</div>
 <div><b>VIP Tier:</b> <span className="px-3 py-1 rounded-lg text-white" style={{background:c.VIP_tier==="VIP"?"var(--pm-gold)":"var(--pm-blue)"}}>{c.VIP_tier||"Regular"}</span></div>
 <div><b>Predictive Score:</b> {c.predictive_booking_score}</div>
 <div><b>Service Type:</b> {c.service_type||"-"}</div>
 <div><b>Notes:</b><div className="mt-2 p-3 bg-[var(--pm-blue-light)] rounded-lg">{c.notes||"No notes yet"}</div></div>
 </div></div>);
}
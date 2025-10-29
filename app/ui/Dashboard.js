"use client";
import data from "../data/db.json";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Dashboard(){
 const total=data.length;
 const vipCounts=data.reduce((a,c)=>{a[c.VIP_tier]=(a[c.VIP_tier]||0)+1; return a;},{});
 const pieData={labels:Object.keys(vipCounts),datasets:[{data:Object.values(vipCounts),backgroundColor:["var(--pm-gold)","var(--pm-blue)","#ccc"]}]};
 return(<div className="space-y-10">
 <h1 className="text-4xl font-bold text-[var(--pm-blue)]">Pure CRM Dashboard</h1>
 <div className="grid grid-cols-3 gap-8">
  <div className="bg-white p-6 rounded-xl shadow text-center"><h2 className="text-xl">Total Clients</h2><p className="text-4xl font-bold text-[var(--pm-blue)]">{total}</p></div>
  <div className="bg-white p-6 rounded-xl shadow text-center"><h2 className="text-xl">VIP Clients</h2><p className="text-4xl font-bold text-[var(--pm-gold)]">{vipCounts["VIP"]||0}</p></div>
  <div className="bg-white p-6 rounded-xl shadow"><h2 className="text-xl mb-3">VIP Breakdown</h2><Pie data={pieData}/></div>
 </div></div>);
}
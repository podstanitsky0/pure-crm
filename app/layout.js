import "./globals.css";
import Navbar from "./components/Navbar";
export const metadata={title:"Pure Massage CRM"};
export default function RootLayout({children}){return(<html lang="en"><body><Navbar /><main className="p-8">{children}</main></body></html>);}
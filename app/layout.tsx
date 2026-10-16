import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'StudyMate Germany — Settle in, beautifully.', description:'A calmer way to navigate life after arriving in Germany.', applicationName:'StudyMate Germany' };
export const viewport: Viewport = { themeColor:'#f3f0e9', width:'device-width', initialScale:1 };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}

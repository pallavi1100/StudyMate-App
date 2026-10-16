'use client';
import Link from 'next/link';
import { GraduationCap, ArrowUpRight } from 'lucide-react';
export default function Nav(){return <header className="site-nav"><Link className="brand" href="/"><span className="brand-mark"><GraduationCap size={20}/></span> study<span>mate</span><sup>®</sup></Link><nav className="top-nav"><a href="/#features">Explore</a><a href="/#how">How it works</a><a href="/#cities">Cities</a></nav><Link className="nav-cta" href="/login">Get started <ArrowUpRight size={15}/></Link></header>}

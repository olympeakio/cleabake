"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-background">
      <Link href="/">
        <Image src="/logo.svg" alt="Clea Logo" width={120} height={40} />
      </Link>
      <nav className="space-x-6 text-primary font-subheading">
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/reservation">Reservation</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

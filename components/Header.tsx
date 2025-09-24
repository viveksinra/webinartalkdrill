import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="cursor-pointer transition-opacity hover:opacity-80">
          <Image
            className=""
            src="/logo/logo-full.svg"
            alt="TalkDrill logo"
            width={180}
            height={43}
            priority
          />
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <button className="relative inline-flex items-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:scale-95 active:scale-95 cursor-pointer border-2 border-yellow-500 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] ring-2 ring-yellow-300/40 hover:ring-orange-400/60 animate-pulse hover:animate-none">
            Register Now
          </button>
        </nav>
      </Container>
    </header>
  );
}



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
          <button className="relative inline-flex items-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow transition-all duration-300 ease-in-out md:hover:bg-yellow-300 md:hover:scale-105 md:hover:shadow-lg focus:outline-none md:focus:ring-2 md:focus:ring-yellow-200 md:focus:scale-95 md:active:scale-95 cursor-pointer border-2 border-yellow-500 md:hover:border-orange-400 md:hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] ring-2 ring-yellow-300/40 md:hover:ring-orange-400/60 md:animate-pulse md:hover:animate-none">
          Register Now @{" "}<span className="ml-1 font-bold">₹21</span>
          </button>
        </nav>
      </Container>
    </header>
  );
}



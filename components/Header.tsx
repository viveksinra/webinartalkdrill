import Link from "next/link";
import Container from "@/components/Container";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <Container className="flex h-14 items-center justify-between">
      <Image
          className=""
          src="/logo/logo-full.svg"
          alt="TalkDrill logo"
          width={180}
          height={43}
          priority
        />
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
        </nav>
      </Container>
    </header>
  );
}



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
          <button className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200">
            Register Now
          </button>
        </nav>
      </Container>
    </header>
  );
}



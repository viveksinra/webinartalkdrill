import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="h-16 flex items-center justify-center text-xs text-black/60">
        <span>© {new Date().getFullYear()} Webinar1</span>
      </Container>
    </footer>
  );
}



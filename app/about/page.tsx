import Container from "@/components/Container";

export const metadata = {
  title: "About | Webinar1",
};

export default function AboutPage() {
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="text-black/80">
        This is a minimal, light-only Next.js setup with an expandable structure.
      </p>
    </Container>
  );
}



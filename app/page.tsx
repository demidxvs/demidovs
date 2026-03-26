import { BouncingDots } from "@/components/ui/bouncing-dots";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <BouncingDots dots={3} className="h-4 w-4" />
    </main>
  );
}

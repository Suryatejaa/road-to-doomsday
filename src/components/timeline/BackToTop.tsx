import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "back-to-top fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-tva bg-background text-tva shadow-lg transition-all duration-300 hover:scale-110 hover:text-tva-glow",
        show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
      )}
      aria-label="Back to top"
      style={{ boxShadow: "0 0 20px color-mix(in oklab, var(--tva) 40%, transparent)" }}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}

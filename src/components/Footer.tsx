import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-primary/5 rounded-2xl p-8 mb-8">
          <p className="text-lg font-medium text-foreground mb-1">Help us build FreshKeep.</p>
          <p className="text-muted-foreground">Your feedback helps validate the product and bring it to market.</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Leaf className="h-4 w-4 text-primary" />
          <span>© 2026 FreshKeep. Reducing food waste, one container at a time.</span>
        </div>
      </div>
    </footer>
  );
}

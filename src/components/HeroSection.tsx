import { Button } from "@/components/ui/button";
import { ArrowDown, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import freshkeepProduct from "@/assets/freshkeep-product.png";

export function HeroSection() {
  const scrollToFeedback = () => {
    document.querySelector("#feedback")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              Smarter Vegetable Storage
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
              FreshKeep –{" "}
              <span className="text-primary">Extend Vegetable Freshness</span>{" "}
              by 2–4 Days
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Reduce food waste and save money with smarter vegetable storage. No electricity needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={scrollToFeedback} className="text-base px-8">
                Give Feedback
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector("#problem")?.scrollIntoView({ behavior: "smooth" })}
                className="text-base gap-2"
              >
                Learn More <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Product image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-secondary to-accent/10 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <Leaf className="h-20 w-20 text-primary mx-auto mb-4 opacity-60" />
                <p className="text-muted-foreground text-sm font-medium">Product Image Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

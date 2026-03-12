import { Wind, ArrowUpFromDot, Droplets, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Wind, title: "Controlled Ventilation System", description: "Optimized airflow keeps vegetables at the right humidity level." },
  { icon: ArrowUpFromDot, title: "Elevated Airflow Tray", description: "Raised design promotes air circulation underneath produce." },
  { icon: Droplets, title: "Moisture Control Pad", description: "Absorbs excess moisture to prevent rot and mold growth." },
  { icon: FlaskConical, title: "Ethylene Absorber Compartment", description: "Traps ethylene gas that accelerates ripening and spoilage." },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The FreshKeep Solution</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A purpose-built container that uses passive preservation to keep vegetables fresh longer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:bg-secondary/40 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

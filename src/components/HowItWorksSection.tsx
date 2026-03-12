import { Zap, ThermometerSun, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: ThermometerSun, step: "01", title: "Place Vegetables Inside", description: "Load your fresh vegetables into the FreshKeep container with the moisture pad." },
  { icon: Recycle, step: "02", title: "Passive Preservation Begins", description: "Airflow, moisture control, and ethylene absorption work together automatically." },
  { icon: Zap, step: "03", title: "Stay Fresh 2–4 Days Longer", description: "No electricity or chemicals needed. Just smarter design for longer freshness." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            FreshKeep extends freshness using passive preservation methods — no electricity required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">Step {s.step}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

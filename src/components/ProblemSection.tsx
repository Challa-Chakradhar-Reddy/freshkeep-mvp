import { AlertTriangle, IndianRupee, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: AlertTriangle,
    title: "Vegetables Spoil Quickly",
    description: "Standard refrigerator storage lacks proper airflow and moisture control, causing rapid spoilage.",
  },
  {
    icon: IndianRupee,
    title: "₹500–₹1500 Wasted Monthly",
    description: "Indian households waste significant money every month on vegetables that go bad before use.",
  },
  {
    icon: TrendingDown,
    title: "Vendor & Farmer Losses",
    description: "Street vendors and farmers lose unsold produce daily due to lack of affordable preservation.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh vegetables deserve better storage. Here's why current solutions fall short.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

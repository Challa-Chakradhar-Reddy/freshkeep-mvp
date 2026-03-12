import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { Send, User, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface FeedbackEntry {
  id: string;
  name: string;
  userType: string;
  city: string;
  feedback: string;
  wouldBuy: string;
  price: string;
  createdAt: string;
}

interface FeedbackSectionProps {
  feedbackList: FeedbackEntry[];
  onSubmit: (entry: Omit<FeedbackEntry, "id" | "createdAt">) => void;
  isSubmitting?: boolean;
}

export function FeedbackSection({ feedbackList, onSubmit, isSubmitting }: FeedbackSectionProps) {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    userType: "",
    city: "",
    feedback: "",
    wouldBuy: "",
    price: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.userType || !form.city || !form.feedback || !form.wouldBuy) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    onSubmit(form);
    setForm({ name: "", userType: "", city: "", feedback: "", wouldBuy: "", price: "" });
  };

  return (
    <section id="feedback" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Share Your Feedback</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Help us build FreshKeep. Your feedback validates the product and shapes its future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card border border-border rounded-2xl p-6 sm:p-8"
          >
            <div>
              <Label htmlFor="name">Name (optional)</Label>
              <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
            </div>

            <div>
              <Label>User Type *</Label>
              <Select value={form.userType} onValueChange={(v) => setForm({ ...form, userType: v })}>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select your type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Household">Household</SelectItem>
                  <SelectItem value="Vendor">Vendor</SelectItem>
                  <SelectItem value="Farmer">Farmer</SelectItem>
                  <SelectItem value="Merchant">Merchant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="city">City *</Label>
              <Input id="city" placeholder="Your city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="feedback">Feedback about vegetable spoilage problem *</Label>
              <Textarea id="feedback" placeholder="Tell us about your experience..." value={form.feedback} onChange={(e) => setForm({ ...form, feedback: e.target.value })} className="mt-1.5 min-h-[100px]" />
            </div>

            <div>
              <Label>Would you buy FreshKeep? *</Label>
              <RadioGroup value={form.wouldBuy} onValueChange={(v) => setForm({ ...form, wouldBuy: v })} className="flex gap-4 mt-2">
                {["Yes", "Maybe", "No"].map((opt) => (
                  <div key={opt} className="flex items-center gap-2">
                    <RadioGroupItem value={opt} id={`buy-${opt}`} />
                    <Label htmlFor={`buy-${opt}`} className="font-normal cursor-pointer">{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="price">Price you would consider paying (₹)</Label>
              <Input id="price" placeholder="e.g. ₹299" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="mt-1.5" />
            </div>

            <Button type="submit" className="w-full gap-2" size="lg" disabled={isSubmitting}>
              <Send className="h-4 w-4" />
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </motion.form>

          {/* Feedback Wall */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Public Feedback Wall</h3>
            {feedbackList.length === 0 ? (
              <div className="text-center py-12 bg-secondary/30 rounded-2xl border border-border">
                <MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-50" />
                <p className="text-muted-foreground">No feedback yet. Be the first!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                {feedbackList.map((entry) => (
                  <div key={entry.id} className="bg-card border border-border rounded-xl p-5 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">{entry.userType}</span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {entry.city}
                        </div>
                      </div>
                      <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${
                        entry.wouldBuy === "Yes" ? "bg-primary/10 text-primary" :
                        entry.wouldBuy === "Maybe" ? "bg-accent/20 text-accent-foreground" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {entry.wouldBuy === "Yes" ? "Would Buy ✓" : entry.wouldBuy === "Maybe" ? "Maybe" : "Not Now"}
                      </span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{entry.feedback}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

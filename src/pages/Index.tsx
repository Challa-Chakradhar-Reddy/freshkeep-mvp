import { useState, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeedbackSection, FeedbackEntry } from "@/components/FeedbackSection";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [feedbackList, setFeedbackList] = useState<FeedbackEntry[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("freshkeep-feedback") || "[]");
    } catch { return []; }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((entry: Omit<FeedbackEntry, "id" | "createdAt">) => {
    setIsSubmitting(true);
    const newEntry: FeedbackEntry = {
      ...entry,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const updated = [newEntry, ...feedbackList];
    setFeedbackList(updated);
    localStorage.setItem("freshkeep-feedback", JSON.stringify(updated));
    toast({ title: "Thank you!", description: "Your feedback has been submitted." });
    setIsSubmitting(false);
  }, [feedbackList, toast]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeedbackSection feedbackList={feedbackList} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <Footer />
    </div>
  );
};

export default Index;

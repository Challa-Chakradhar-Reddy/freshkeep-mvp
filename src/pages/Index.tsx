import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeedbackSection, FeedbackEntry } from "@/components/FeedbackSection";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { db, ref, push, onValue } from "@/lib/firebase";

const Index = () => {
  const { toast } = useToast();
  const [feedbackList, setFeedbackList] = useState<FeedbackEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const feedbackRef = ref(db, "feedbacks");
    const unsubscribe = onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const entries: FeedbackEntry[] = Object.entries(data)
          .map(([key, value]: [string, any]) => ({
            id: key,
            name: value.name || "",
            userType: value.userType,
            city: value.city,
            feedback: value.feedback,
            wouldBuy: value.wouldBuy,
            price: value.price || "",
            createdAt: value.createdAt,
          }))
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setFeedbackList(entries);
      } else {
        setFeedbackList([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = useCallback(async (entry: Omit<FeedbackEntry, "id" | "createdAt">) => {
    setIsSubmitting(true);
    try {
      const feedbackRef = ref(db, "feedbacks");
      await push(feedbackRef, {
        ...entry,
        createdAt: new Date().toISOString(),
      });
      toast({ title: "Thank you!", description: "Your feedback has been submitted." });
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit feedback. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  }, [toast]);

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

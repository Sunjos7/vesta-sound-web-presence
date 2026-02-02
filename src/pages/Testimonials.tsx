import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Star, Quote, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blink } from "@/lib/blink";
import { SEO } from "@/components/layout/SEO";

const testimonialSchema = z.object({
  authorName: z.string().min(2, "Name must be at least 2 characters"),
  authorTitle: z.string().optional(),
  rating: z.number().min(1).max(5),
  content: z.string().min(10, "Testimonial must be at least 10 characters"),
});

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

interface Testimonial {
  id: string;
  authorName: string;
  authorTitle: string;
  rating: string | number;
  content: string;
  createdAt: string;
  status: string;
}

// Testimonials are now fetched from database only - no hardcoded featured testimonials

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const data = await blink.db.testimonials.list({
        where: { status: "verified" },
        orderBy: { createdAt: "desc" },
      });
      setTestimonials(data as Testimonial[]);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      authorName: "",
      authorTitle: "",
      rating: 5,
      content: "",
    },
  });

  const onSubmit = async (values: TestimonialFormValues) => {
    setIsSubmitting(true);
    try {
      await blink.db.testimonials.create({
        ...values,
        status: "pending",
      });
      toast.success("Thank you! Your review has been submitted for moderation.");
      form.reset();
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Client Testimonials & Reviews" 
        description="Read reviews from property owners and tenants who have experienced the professional care of Vesta Sound Property Group in Seattle."
      />
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">Client Testimonials</h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto font-light">
            Hear from property owners and tenants who have experienced the Vesta Sound difference.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse bg-secondary/50 h-64" />
            ))
          ) : testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative overflow-hidden group hover:shadow-lg transition-all border-border">
                <CardHeader className="pb-2">
                  <div className="flex space-x-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={cn(
                          "fill-current",
                          i < Number(testimonial.rating) ? "text-accent" : "text-muted"
                        )}
                      />
                    ))}
                  </div>
                  <CardTitle className="font-serif text-lg">{testimonial.authorName}</CardTitle>
                  {testimonial.authorTitle && (
                    <p className="text-sm text-muted-foreground">{testimonial.authorTitle}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <Quote className="text-accent/20 absolute top-4 right-4" size={40} />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20 space-y-4">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                <Quote size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">No reviews yet</h3>
              <p className="text-muted-foreground">Be the first to share your experience!</p>
            </div>
          )}
        </div>
      </Section>

      {/* Submission Form */}
      <Section className="bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-serif font-bold">Share Your Experience</h2>
            <p className="text-muted-foreground">
              Your feedback helps us continue providing excellent service to the Puget Sound area.
            </p>
          </div>

          <Card className="p-8 md:p-10 border-border shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="authorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="authorTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Property Owner / Tenant" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating</FormLabel>
                      <FormControl>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => field.onChange(star)}
                              className="focus:outline-none transition-transform active:scale-90"
                            >
                              <Star
                                size={32}
                                className={cn(
                                  "transition-colors",
                                  star <= field.value
                                    ? "fill-accent text-accent"
                                    : "text-muted-foreground/30"
                                )}
                              />
                            </button>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Review</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your experience with Vesta Sound..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 rounded-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <span className="flex items-center justify-center">
                      Submit Secure Review <Send className="ml-2" size={18} />
                    </span>
                  )}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground flex items-center justify-center space-x-1">
                  <CheckCircle2 size={12} className="text-green-500" />
                  <span>Your review will be verified before appearing on the site.</span>
                </p>
              </form>
            </Form>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { blink } from "@/lib/blink";

interface LeadFormProps {
  type?: "contact" | "analysis";
  onSuccess?: () => void;
}

const LeadForm = ({ type = "contact", onSuccess }: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await blink.db.leads.create({
        ...data,
        type,
      });
      
      toast.success(
        type === "analysis" 
          ? "Analysis request submitted! We'll be in touch soon." 
          : "Message sent successfully!"
      );
      reset();
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input 
            id="firstName" 
            placeholder="John" 
            {...register("firstName", { required: "First name is required" })}
            className={errors.firstName ? "border-destructive" : ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input 
            id="lastName" 
            placeholder="Doe" 
            {...register("lastName", { required: "Last name is required" })}
            className={errors.lastName ? "border-destructive" : ""}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@example.com" 
            {...register("email", { 
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
            })}
            className={errors.email ? "border-destructive" : ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            placeholder="(425) 555-0123" 
            {...register("phone")}
          />
        </div>
      </div>

      {type === "analysis" && (
        <div className="space-y-2">
          <Label htmlFor="propertyAddress">Property Address</Label>
          <Input 
            id="propertyAddress" 
            placeholder="123 Seattle Way, Seattle, WA 98101" 
            {...register("propertyAddress", { required: "Property address is required" })}
            className={errors.propertyAddress ? "border-destructive" : ""}
          />
        </div>
      )}

      {type === "contact" && (
        <div className="space-y-2">
          <Label htmlFor="serviceType">How can we help?</Label>
          <Select onValueChange={(value) => setValue("serviceType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Management Inquiry">Property Management Inquiry</SelectItem>
              <SelectItem value="Rental Analysis">Free Rental Analysis</SelectItem>
              <SelectItem value="Tenant Question">Tenant Inquiry</SelectItem>
              <SelectItem value="Maintenance">Maintenance Request</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us more about your property or needs..." 
          rows={4}
          {...register("message")}
        />
      </div>

      <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            {type === "analysis" ? "Request Free Analysis" : "Send Message"}
          </>
        )}
      </Button>
      <p className="text-[10px] text-muted-foreground text-center">
        By submitting this form, you agree to be contacted by Vesta Sound Property Group via phone, email, or text.
      </p>
    </form>
  );
};

export default LeadForm;

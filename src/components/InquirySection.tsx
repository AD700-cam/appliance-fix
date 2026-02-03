import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Water Purifier",
  "UPS Battery",
  "Solar Water Heater",
  "CCTV & Security",
  "Jhumars & LED Lights",
  "Water Heater Geyser",
  "Installation Service",
  "Repair Service",
  "Other",
];

const InquirySection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Hi! I'm ${formData.name}.
    
📞 Phone: ${formData.phone}
🛠️ Service: ${formData.service}
💬 Message: ${formData.message || "I'd like more information."}`;

    const whatsappLink = `https://wa.me/919986964849?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    setIsSubmitted(true);
    toast({
      title: "Inquiry Ready!",
      description: "Click the button to send your inquiry via WhatsApp.",
    });

    // Open WhatsApp after a brief delay
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 1000);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <section id="inquiry" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book a Service or Get a Quote
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you quickly via WhatsApp!
            </p>
          </div>

          {/* Inquiry Form Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Quick Inquiry Form
              </CardTitle>
              <CardDescription>
                We typically respond within 30 minutes during business hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Redirecting you to WhatsApp to send your inquiry...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about what you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;

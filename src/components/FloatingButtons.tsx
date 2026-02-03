import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const phoneNumber = "9986964849";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi! I'm interested in your appliance services.`;
  const callLink = `tel:+91${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-110"
        asChild
      >
        <a href={callLink} aria-label="Call us">
          <Phone className="w-6 h-6" />
        </a>
      </Button>

      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-float"
        asChild
      >
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;

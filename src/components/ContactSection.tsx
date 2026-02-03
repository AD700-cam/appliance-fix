import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const phoneNumber = "9986964849";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi! I'd like to know more about your services.`;
  const callLink = `tel:+91${phoneNumber}`;
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d78.13!3d13.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA4JzAwLjAiTiA3OMKwMDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890";
  const googleMapsLink = "https://www.google.com/maps/search/Opp+Bharat+Uniform+Kuvempu+Nagar+Kolar+Karnataka+563101";

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact & Location
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Come visit our store or reach out to us anytime. We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone Card */}
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <a 
                      href={callLink} 
                      className="text-primary text-xl font-bold hover:underline"
                    >
                      +91 {phoneNumber}
                    </a>
                  </div>
                  <Button asChild size="sm" className="bg-primary">
                    <a href={callLink}>
                      <Phone className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="border-2 hover:border-green-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Quick replies guaranteed!</p>
                  </div>
                  <Button 
                    asChild 
                    size="sm" 
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Store Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Opp Bharat Uniform,<br />
                      Kuvempu Nagar, Kolar,<br />
                      Karnataka - 563101
                    </p>
                    <a 
                      href={googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store Hours Card */}
            <Card className="border-2 hover:border-primary/30 transition-colors bg-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Store Hours</h3>
                    <p className="text-primary font-bold">Open Every Day</p>
                    <p className="text-muted-foreground text-sm">10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="relative h-[400px] md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border-2 border-border">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Appliance Fix Store Location"
              className="absolute inset-0"
            />
            {/* Map overlay with address */}
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:bg-background transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Appliance Fix</p>
                  <p className="text-muted-foreground text-xs">Kuvempu Nagar, Kolar</p>
                </div>
                <span className="ml-auto text-primary text-sm font-medium">
                  Open in Maps →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Brand */}
          {/* Brand */}
          <div className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="Appliance Fix"
              className="h-32 md:h-40 w-auto object-contain bg-white/10 p-4 rounded-xl backdrop-blur-sm"
            />
          </div>
          <p className="text-background/70 mb-4">
            Your Trusted Home Appliance Partner in Kolar
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-background/60 mb-6">
            <span>📍 Kuvempu Nagar, Kolar</span>
            <span>📞 +91 9986964849</span>
            <span>🕐 10 AM - 11 PM Daily</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-background/50">
            © {currentYear} Appliance Fix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

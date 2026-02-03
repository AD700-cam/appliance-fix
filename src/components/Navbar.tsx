
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Appliance Fix Logo"
                            className="h-20 md:h-28 w-auto object-contain -my-2 md:-my-4 relative z-10 transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary font-bold" : "text-slate-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white gap-2 shadow-md hover:shadow-lg transition-all" asChild>
                            <a href="tel:+919986964849">
                                <Phone className="w-4 h-4" />
                                9986964849
                            </a>
                        </Button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 animate-in slide-in-from-top-5 fade-in duration-200 shadow-xl">
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium p-2 rounded-lg transition-colors ${isActive(link.path)
                                    ? "bg-primary/5 text-primary"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="mt-4 w-full bg-primary" asChild>
                            <a href="tel:+919986964849">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

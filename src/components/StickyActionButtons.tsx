
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

const StickyActionButtons = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 md:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Button className="flex-1 bg-white border-2 border-primary text-primary hover:bg-slate-50 rounded-xl py-6" asChild>
                <a href="tel:+919986964849">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                </a>
            </Button>

            <BookingDialog>
                <Button className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-xl py-6">
                    <CalendarCheck className="w-5 h-5 mr-2" />
                    Book Online
                </Button>
            </BookingDialog>
        </div>
    );
};

export default StickyActionButtons;

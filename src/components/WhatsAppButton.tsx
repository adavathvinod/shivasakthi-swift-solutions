import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/919347635803?text=Hello%20Shivasakthi%20Solutions!%20I%20would%20like%20to%20enquire%20about%20your%20services.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-primary-foreground shadow-lg transition-transform hover:scale-110 animate-pulse-glow md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </button>
  );
};

export default WhatsAppButton;

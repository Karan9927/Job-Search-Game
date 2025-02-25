"use client";

interface ServiceHeroProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function ServiceHero({
  title,
  description,
  imageSrc,
}: ServiceHeroProps) {
  const handleBookDemo = () => {
    window.open(
      "https://calendly.com/karansingh-ks7417/30min?month=2025-02",
      "_blank"
    );
  };

  return (
    <div className="relative pb-24">
      <div className="absolute inset-0 z-0 h-[500px]">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-[500px] flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8">{description}</p>
          <button
            onClick={handleBookDemo}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}

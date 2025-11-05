import { HeroBackground, HeroContent, HeroScrollIndicator } from "./hero";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      {/* Content container */}
      <div className="relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center min-h-[70vh] sm:min-h-[80vh]">
            <HeroContent />
          </div>
        </div>

        <HeroScrollIndicator />
      </div>
    </section>
  );
};
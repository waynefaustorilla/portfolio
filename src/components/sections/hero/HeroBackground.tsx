import heroImage from "../../../assets/img/IMG_2992.jpg";

export const HeroBackground = () => {
  return (
    <>
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Lighter overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </>
  );
};
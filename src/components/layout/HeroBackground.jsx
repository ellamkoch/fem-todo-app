/**
 * HeroBackground
 * Shows the top background image (switches based on theme).
 */
export default function HeroBackground({ isDark }) {
  return (
    <div className="pointer-events-none relative h-[200px] w-full overflow-hidden md:h-[300px]">
      <img
        src={isDark
            ? "/images/bg-desktop-dark.jpg"
            : "/images/bg-desktop-light.jpg"}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
}

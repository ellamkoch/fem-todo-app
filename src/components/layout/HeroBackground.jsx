/**
 * Hero background image that switches based on theme and viewport size.
 */
export default function HeroBackground({ isDark }) {
  const mobileSrc = isDark ? '/images/bg-mobile-dark.jpg' : '/images/bg-mobile-light.jpg';
  const desktopSrc = isDark ? '/images/bg-desktop-dark.jpg' : '/images/bg-desktop-light.jpg';

  return (
    <div className="pointer-events-none relative h-[300px] w-full overflow-hidden">
      <picture className="block h-full w-full">
        <source media="(max-width: 1023px)" srcSet={mobileSrc} />
        <source media="(min-width: 1024px)" srcSet={desktopSrc} />
        <img src={desktopSrc} alt="" className="h-full w-full object-cover" />
      </picture>
    </div>
  );
}

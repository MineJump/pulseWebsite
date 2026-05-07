export function Logo() {
  return (
    <a
      href="/"
      className="inline-flex items-center transition-opacity duration-200 hover:opacity-80"
      aria-label="2CHUB – Center for Computation of Human Behavior"
    >
      <img
        src="/logo-2chub.svg"
        alt="2CHUB – Center for Computation of Human Behavior"
        className="h-14 md:h-20 w-auto"
        draggable={false}
      />
    </a>
  );
}

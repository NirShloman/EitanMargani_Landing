type Props = { className?: string };

export function AudiLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 62 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="10" r="8.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="38" cy="10" r="8.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="52" cy="10" r="8.5" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

export function VolkswagenLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="16.5" stroke="currentColor" strokeWidth="2" />
      {/* V — shared arms with W */}
      <path d="M11 9 L18 27 L25 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* W — inscribed in the top of the V */}
      <path d="M11 9 L14 18 L18 12 L22 18 L25 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SkodaLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="16.5" stroke="currentColor" strokeWidth="2" />
      {/* Arrow pointing right — simplified reference to the Škoda winged arrow */}
      <path d="M10 18 L22 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 12 L23 18 L16 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Top wing */}
      <path d="M10 14 L16 14 L20 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom wing */}
      <path d="M10 22 L16 22 L20 25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SeatLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="16.5" stroke="currentColor" strokeWidth="2" />
      {/* S letterform — two arcs */}
      <path
        d="M24 13 C24 10.5 21.5 9 18 9 C14.5 9 12 11 12 13.5 C12 16 14 17.2 18 18 C22 18.8 24 20.2 24 23 C24 25.5 21.5 27 18 27 C14.5 27 12 25.5 12 23"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export const brandLogoMap: Record<string, React.FC<Props>> = {
  "Audi": AudiLogo,
  "Volkswagen": VolkswagenLogo,
  "ŠKODA": SkodaLogo,
  "SEAT": SeatLogo,
};

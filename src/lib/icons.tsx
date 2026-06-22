import type { ReactElement, SVGProps } from "react";
import type { IconName } from "@/lib/types";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };
type IconComponent = (props: IconProps) => ReactElement;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24"
} as const;

function Battery(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="7" width="18" height="10" rx="2" />
      <path d="M22 11v2" />
      <path d="M7 11h4" />
      <path d="M9 9v4" />
      <path d="M14 12h3" />
    </svg>
  );
}

function Car(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 17h12" />
      <path d="M5 17l1-6 2-4h8l2 4 1 6" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
      <path d="M8 11h8" />
    </svg>
  );
}

function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Clock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function Disc(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m18 6-3 3" />
      <path d="m6 18 3-3" />
    </svg>
  );
}

function Gauge(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l4-5" />
      <path d="M8 15h8" />
      <path d="M6 19h12" />
    </svg>
  );
}

function Headphones(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="2" />
      <rect x="17" y="13" width="4" height="6" rx="2" />
      <path d="M17 19c0 1.5-2 2-5 2" />
    </svg>
  );
}

function Shield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function Spark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" />
    </svg>
  );
}

function Tag(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 12 12 20 4 12V4h8l8 8Z" />
      <circle cx="9" cy="9" r="1.5" />
    </svg>
  );
}

function Target(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function Truck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
    </svg>
  );
}

function Wrench(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.8 2.8-2-2 2.8-2.8Z" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M20.52 3.45C18.24 1.24 15.24 0 12.05 0 5.46 0 .1 5.33.1 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.34-1.65c1.74.94 3.71 1.44 5.71 1.45h.01c6.58 0 11.94-5.34 11.95-11.9 0-3.17-1.24-6.16-3.49-8.45zM12.05 21.79h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.79 9.79 0 0 1-1.51-5.26c0-5.41 4.41-9.81 9.84-9.81 2.63 0 5.1 1.02 6.96 2.88a9.73 9.73 0 0 1 2.88 6.93c0 5.41-4.41 9.81-9.83 9.88zm5.4-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.64.07-1.75-.87-2.9-1.56-4.06-3.53-.31-.52.31-.49.88-1.62.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.48-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.19 1.87.12.57-.08 1.75-.71 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.5 6.8-4" />
      <path d="m8.6 13.5 6.8 4" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.932-1.956 1.888v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
    </svg>
  );
}

export const iconMap: Record<IconName, IconComponent> = {
  battery: Battery,
  car: Car,
  check: Check,
  clock: Clock,
  disc: Disc,
  gauge: Gauge,
  headphones: Headphones,
  shield: Shield,
  spark: Spark,
  tag: Tag,
  target: Target,
  truck: Truck,
  wrench: Wrench
};

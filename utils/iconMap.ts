import {
  AirVent,
  Layers,
  Sofa,
  Droplets,
  Bug,
  Trophy,
  BadgeCheck,
  Wallet,
  Zap,
  FlaskConical,
  ShieldCheck,
  Smile,
  CheckCircle2,
  Star,
  Target,
  MapPin,
  Phone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  // Service icons
  AirVent,
  Layers,
  Sofa,
  Droplets,
  Bug,
  // Why-us / stats icons
  Trophy,
  BadgeCheck,
  Wallet,
  Zap,
  FlaskConical,
  ShieldCheck,
  Smile,
  CheckCircle2,
  Star,
  // Misc
  Target,
  MapPin,
  Phone,
};

export type IconName = keyof typeof ICON_MAP;

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import switches from "@/assets/switches.jpg";
import mcb from "@/assets/mcb.jpg";
import wiresLed from "@/assets/wires-led.jpg";
import handlesHinges from "@/assets/handles-hinges.jpg";
import kitchenBasket from "@/assets/kitchen-basket.jpg";
import kitchenInterior from "@/assets/kitchen-interior.jpg";
import connectors from "@/assets/connectors.jpg";
import kitchenStorage from "@/assets/kitchen-storage.jpg";
import modularDark from "@/assets/modular-dark.jpg";
import kitchenFittings from "@/assets/kitchen-fittings.jpg";

// Seed data stores "asset:<key>" so saved data survives rebuilds that change file hashes.
export const ASSETS: Record<string, string> = {
  hero, about, switches, mcb, wiresLed, handlesHinges, kitchenBasket,
  kitchenInterior, connectors, kitchenStorage, modularDark, kitchenFittings,
};

export function resolveImage(src?: string): string {
  if (!src) return ASSETS.about;
  if (src.startsWith("asset:")) return ASSETS[src.slice(6)] ?? ASSETS.about;
  return src;
}
export const FALLBACK_IMAGE = ASSETS.about;

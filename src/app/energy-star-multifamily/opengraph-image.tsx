import { ogImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Energy Star Multifamily Certification — LES NRG";

export default function Image() {
  return ogImage("Energy Star Multifamily Certification");
}

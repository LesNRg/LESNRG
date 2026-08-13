import { ogImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Why Air Leakage Matters — LES NRG";

export default function Image() {
  return ogImage("Why Air Leakage Matters");
}

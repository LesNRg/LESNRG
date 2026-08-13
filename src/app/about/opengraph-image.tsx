import { ogImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "About LES NRG — Building Performance Experts";

export default function Image() {
  return ogImage("20+ Years of Building Performance Expertise");
}

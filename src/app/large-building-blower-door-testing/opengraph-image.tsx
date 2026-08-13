import { ogImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Whole Building Blower Door Testing — LES NRG";

export default function Image() {
  return ogImage("Whole Building Blower Door Testing");
}

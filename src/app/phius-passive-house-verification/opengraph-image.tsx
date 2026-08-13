import { ogImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "PHIUS Passive House Verification — LES NRG";

export default function Image() {
  return ogImage("PHIUS Passive House Verification");
}

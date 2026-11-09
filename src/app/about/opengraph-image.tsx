import { ogImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "About Neil Goldman — LES NRG";

export default function Image() {
  return ogImage("About Neil Goldman");
}

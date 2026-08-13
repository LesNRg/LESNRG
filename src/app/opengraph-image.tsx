import { ogImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "LES NRG — Building Performance Testing, Philadelphia PA";

export default function Image() {
  return ogImage("Consulting, Inspecting & Testing to Improve Buildings");
}

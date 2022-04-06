import { decodeHtml } from "./mod.ts";

Deno.test("Testing export function", () => {
  const html =
    "&lt;p&gt;Yes. Please note the hospital must approve patient eligibility for financial assistance.&lt;/p&gt;";
  decodeHtml(html);
});

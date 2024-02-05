import { createClient } from "microcms-js-sdk";

const cms_domain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN
const cms_key = import.meta.env.VITE_MICROCMS_API_KEY

export const cms = createClient({
    serviceDomain: "hideko-portfolio.microcms.io",
    apiKey: cms_key
});
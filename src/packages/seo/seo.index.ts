import { Metadata } from "next";
import { envFrontendConfig } from "../env/env.frontend";

const frontendUrl = envFrontendConfig.APP_FRONTEND;
const encodedOGUrl = encodeURI(frontendUrl);

//list your search engine keywords here
const keywords = "keenagile, agile, keen agile, keenaglie, keenaglie.com, keenaglie ui, keenaglie";

const title = "Keen Agile";
const description =
  "Transform your business with our powerful SaaS platform. Scale faster, grow bigger.";

const HomePageSEO: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    type: "website",
    url: encodedOGUrl,
    title,
    description,
  },
};

export default HomePageSEO;

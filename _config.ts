import lume  from 'lume/mod.ts'
import checkUrls from 'lume/plugins/check_urls.ts'
import theme from 'theme/mod.ts'




const site = lume({
  src: "./src",
  watcher: {
    ignore: ["node_modules", ".deno", "_site", ".git", ".idea"],
  },
});

site.ignore("node_modules");
site.ignore(".deno");

site.use(theme({
  siteLogo: {
    src: "/assets/images/logo.png",
    alt: "FHIR Beacon logo",
  },
  siteToc: {
    root: "src",
    sections: [
      { folder: "learn", label: "Learn", order: 0 },
      // { folder: "fhir-data", label: "FHIR Data", order: 1 },
      { folder: "customization", label: "Customize", order: 2 },
      { folder: "reference", label: "Reference", order: 3 },
      { folder: "play", label: "Play", order: 4 },
    ],
  },
  componentEntrypoint: "components/site-components.ts",
  webawesome: {
    customPropertiesCssPath: "/styles/webawesome-theme.css",
  },
}));

site.use(checkUrls({
  anchors: true,
  strict: true,
  throw: true,
}));

site.copy("assets", "assets");

export default site;

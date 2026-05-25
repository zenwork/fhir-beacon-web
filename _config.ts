import lume  from 'lume/mod.ts'
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
    alt: "Fhir Beacon logo",
  },
  siteToc: {
    root: "src",
    sections: [
      { folder: "getting_started", label: "Getting Started", order: 0 },
      { folder: "documentation", label: "Documentation", order: 1 },
      { folder: "customization", label: "Customization", order: 2 },
    ],
  },
  componentEntrypoint: "components/site-components.ts",
  webawesome: {
    customPropertiesCssPath: "/styles/webawesome-theme.css"
  },
}));

site.copy("assets", "assets");

export default site;

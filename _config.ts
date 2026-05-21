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
  siteToc: {
    root: "src",
    sections: [
      { folder: "getting_started", label: "Getting Started", order: 0 },
      { folder: "documentation", label: "Documentation", order: 1 },
      { folder: "customization", label: "Customization", order: 2 },
    ],
  },
  componentEntrypoint: "components/site-components.ts",
}));

site.copy("assets", "assets");

export default site;

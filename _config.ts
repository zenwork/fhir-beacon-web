import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import theme from "theme/mod.ts";

console.log("Theme import.meta.url:", import.meta.resolve("theme/mod.ts"));

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
    includeUrlPrefix: "/",
    // Or provide a full nav filter string:
    // filter: 'hide_menu!=true url^=/guides/',
  },
}));

site.use(esbuild({
  extensions: [".ts", ".js"],
  options: {
    bundle: true, // This is crucial
    format: "esm",
    platform: "browser",
    minify: true,
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
      },
    },
  },
}));

export default site;

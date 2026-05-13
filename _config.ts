import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import theme from "theme/mod.ts";

console.log("Theme import.meta.url:", import.meta.resolve('theme/mod.ts'));

const site = lume({
  watcher: {
    ignore: [".deno", "_site", ".git", ".idea"],
  },
});

site.ignore(".deno");

site.use(theme());

// Ensure Web Awesome runtime assets are available when using the theme remotely.
// The remote theme snapshot does not include the theme repo's local src/lib bundle.
const webawesomeDistCdnPath = "node_modules/@awesome.me/webawesome/dist-cdn";
const webawesomeDistPath = "node_modules/@awesome.me/webawesome/dist";
try {
  Deno.statSync(webawesomeDistCdnPath);
  site.copy(webawesomeDistCdnPath, "lib/webawesome/dist-cdn");
  Deno.statSync(webawesomeDistPath);
  site.copy(webawesomeDistPath, "lib/webawesome/dist");
} catch {
  site.copy(
    "npm:@awesome.me/webawesome@3.1.0/dist-cdn/**/*",
    "lib/webawesome/dist-cdn",
  );
}

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

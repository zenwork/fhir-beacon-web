import lume    from 'lume/mod.ts'
import esbuild from 'lume/plugins/esbuild.ts'
import theme   from 'theme-webawesome'




const site = lume({
  watcher: {
    ignore: ["node_modules", ".deno", "_site", ".git", ".idea"],
  },
});

site.ignore("node_modules");
site.ignore(".deno");

site.use(theme());

site.use(esbuild({
  extensions: [".ts", ".js"],
  options: {
    bundle: true,
    format: "esm",
    minify: true,
    platform: "browser",
    // Ensure decorators are supported for Lit components
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
      },
    },
  },
}));

export default site;

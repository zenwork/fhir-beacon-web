import lume          from 'lume/mod.ts'
import codeHighlight from 'lume/plugins/code_highlight.ts'
import esbuild       from 'lume/plugins/esbuild.ts'
import nav           from 'lume/plugins/nav.ts'




const site = lume()

site
  .ignore('.idea')
  .ignore('src')
  .ignore('node_modules')
  // .add("static", "static")
  .add('styles')
  .add('main.ts')
  .use(codeHighlight())
  .use(nav())
  .use(esbuild())
  .data('viewerLang', function (lang: string): string {
    return [
             { short: 'css', classes: 'language-css hljs' },
             { short: 'js', classes: 'language-js hljs' },
             { short: 'html', classes: 'language-xml hljs' }
           ].filter((l) => l.short === lang)[0]?.classes || 'hljs'

  });

export default site

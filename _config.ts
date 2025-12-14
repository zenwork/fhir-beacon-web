import lume           from 'lume/mod.ts'
import attributes     from 'lume/plugins/attributes.ts'
import brotli         from 'lume/plugins/brotli.ts'
import check_urls     from 'lume/plugins/check_urls.ts'
import code_highlight from 'lume/plugins/code_highlight.ts'
import esbuild        from 'lume/plugins/esbuild.ts'
import favicon        from 'lume/plugins/favicon.ts'
import fff            from 'lume/plugins/fff.ts'
import gzip           from 'lume/plugins/gzip.ts'
import mdx            from 'lume/plugins/mdx.ts'
import nav            from 'lume/plugins/nav.ts'
import pagefind       from 'lume/plugins/pagefind.ts'
import remark         from 'lume/plugins/remark.ts'

import slugifyUrls from 'lume/plugins/slugify_urls.ts'
import source_maps from 'lume/plugins/source_maps.ts'




const site = lume()

site
  .ignore('.idea')
  .ignore('src')
  .add('main.ts')
  .use(attributes())
  .use(code_highlight())
  .use(fff())
  .use(mdx())
  .use(nav())
  .use(pagefind())
  .use(remark())
  .use(esbuild())
  .use(source_maps())
  .use(check_urls())
  .use(favicon())
  .use(brotli())
  .use(gzip())
  .use(slugifyUrls())

export default site

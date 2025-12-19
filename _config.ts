import lume     from 'lume/mod.ts'
import metas    from 'lume/plugins/metas.ts'
import ogimages from 'lume/plugins/og_images.ts'
import theme    from './mod.ts'




const site = lume({
                    src: './src'
                  })

site.use(theme())
site.use(ogimages())
site.use(metas())

export default site

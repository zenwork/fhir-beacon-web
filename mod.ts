import type {Options} from './plugins.ts'
import plugins        from './plugins.ts'

import 'lume/types.ts'




export default function (options?: Options) {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins(options))

    // Add remote files
    const files = [
      '_includes/templates/breadcrumb.vto',
      '_includes/layout.vto',
      '_includes/templates/menu_item.vto',
      '_includes/templates/menu.vto',
      'favicon.svg',
      'menu.js',
      'menu.page.ts',
      'copy-code-button.js',
    ]

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`))
    }
  }
}

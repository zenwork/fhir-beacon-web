import {css, html, LitElement} from 'lit'
import {property, state}       from 'lit/decorators.js'
import {styleMap}              from 'lit/directives/style-map.js'




type Item = { slug: string, data: { title: string, url: string, basename: string } }
type Items = (Item & {  children?: Item[]})[]


export class Menu extends LitElement {
  @property()
  url: string = ""

  @state()
  data: Items = []

  static override styles = css`
    wa-tree-item::part(item) {
      background-color: #88aece;
    }

    a {
      background: red;
    }
  `

  override connectedCallback() {
    super.connectedCallback()
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.data = data as Items
        this.requestUpdate()
      });
  }

  override render() {
    console.log(location.pathname)
    return html`<wa-tree >
                    ${this.data.map(item => html`<wa-tree-item expanded>
                                                    <a href="${item.data.url}" style="${styleMap(location.pathname === item.data.url?{background: '#f0f0f0'}:{})}">${item.data.title}</a>
                                                    ${item.children?.map(child => html`<wa-tree-item expanded >
                                                        <a href="${child.data.url}" style="${styleMap(location.pathname === child.data.url?{background: '#f0f0f0'}:{})}">${child.data.title}</a>
                                                    </wa-tree-item>`)}
                                                 </wa-tree-item>`
                    )}
                </wa-tree>`;
  }

  override createRenderRoot() {
    return this
  }
}

  if (!customElements.get('tree-menu')) {
  customElements.define("tree-menu", Menu)
}

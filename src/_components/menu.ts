import {html, LitElement} from 'lit'
import {property, state}  from 'lit/decorators.js'




type Item = { slug: string, data: { title: string, url: string, basename: string } }
type Items = (Item & {  children?: Item[]})[]


export class Menu extends LitElement {
  @property()
  url: string = ""

  @state()
  data: Items = []

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

    return html`<wa-tree >
                    ${this.data.map(item => html`<wa-tree-item expanded>
                                                    <a href="${item.data.url}" >${item.data.title}</a>
                                                    ${item.children?.map(child => html`<wa-tree-item expanded>
                                                        <a href="${child.data.url}" >${child.data.title}</a>
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

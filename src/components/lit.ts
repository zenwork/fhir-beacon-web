import {css, html, LitElement}   from 'lit'
import {customElement, property} from 'lit/decorators.js'




// Registers the element
@customElement('my-element')
export class MyElement extends LitElement {
  // Styles are applied to the shadow root and scoped to this element
  static override styles = css`
    span {
      color: green;
    }
  `

  // Creates a reactive property that triggers rendering
  @property()
  accessor mood = 'great'


  // Render the component's DOM by returning a Lit template
  override render() {
    return html`Web Components are <span>${this.mood}</span>!`
  }
}
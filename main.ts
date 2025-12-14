import './src/components/lit.ts'




// Create a class for the element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ['color', 'size']


  constructor() {
    // Always call super first in constructor
    super()
  }


  connectedCallback() {
    console.log('Custom element added to page.')
    this.innerHTML = '<p>Hello World!</p>'
  }


  disconnectedCallback() {
    console.log('Custom element removed from page.')
  }


  connectedMoveCallback() {
    console.log('Custom element moved with moveBefore()')
  }


  adoptedCallback() {
    console.log('Custom element moved to new page.')
  }


  attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    console.log(`Attribute ${name} has changed.`)
  }
}




customElements.define('my-custom-element', MyCustomElement)
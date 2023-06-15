export default function ComplexComponent ({html}) {
  return html`
    <basic-component prop="val"><div slot=defaults>Some <b>slotted content</b> here</div></basic-component>
    <deeply-nested-component></deeply-nested-component>
  `
}

export default function BasicComponent ({html}) {
  return html`<section><div>before slot</div><slot name=defaults>hello from basic defaults</slot><div>after slot</div></section>`
}

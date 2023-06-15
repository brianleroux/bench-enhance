export default function DeeplyNestedComponent ({html, state}) {
  return html`<pre>${ JSON.stringify(state, null, 2) }</pre>`
}

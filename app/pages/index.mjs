import {
  performance,
  PerformanceObserver
} from 'perf_hooks'

export default function IndexPage ({ html }) {

  let before = performance.now()
  console.time('ssr')

  // actual work
  let result = html`<complex-component></complex-component>`

  let then = performance.now() - before
  console.timeEnd('ssr')
  
  return result + `<script>console.log('timing data', '${then}')</script>`
}

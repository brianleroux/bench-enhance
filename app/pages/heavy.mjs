import {
  performance,
  PerformanceObserver
} from 'perf_hooks'

export default function IndexPage ({ html }) {

  let before = performance.now()
  console.time('ssr')

  // actual work
  let one = `<complex-component></complex-component>` 
  let lots = ''
  for (let i = 0; i <= 10000; i++) lots += one
  let result = html`${lots}`

  let then = performance.now() - before
  console.timeEnd('ssr')
  
  return result + `<script>console.log('timing data', '${then}')</script>`
}


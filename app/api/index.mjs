import {
  performance,
  PerformanceObserver
} from 'perf_hooks'

export async function get (req) {

  let before = performance.now()
  console.time('api')

  let then = performance.now() - before
  console.timeEnd('api')

  return { json: { api: then } }
}

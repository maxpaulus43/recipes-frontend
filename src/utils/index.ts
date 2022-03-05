export function debounce(fn: Function, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args): void {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

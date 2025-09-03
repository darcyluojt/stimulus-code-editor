export const debounce = (callback, delay = 1000) => {
  let timeoutId

  return () => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => callback(), delay)

    return () => clearTimeout(timeoutId)
  }
}
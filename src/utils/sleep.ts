export default function sleep (fn: Function, ...par: any) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fn(...par)), 500)
    })
}



export function buildRoutePath(path) {
  // regex -> expressão regular 
  // (encontrar textos c formatos específicos dentro de textos maiores)
  const routeParametersRegex = /:([a-zA-z]+)/g

console.log(Array.from(path.matchAll(routeParametersRegex)))
}

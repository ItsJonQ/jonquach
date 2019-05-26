// Use commonJS module format as this may be consumed by NodeJS script

// Gatsby complains if we use gql tagged template literals in
// the wrong context, so this simple function will let us a
// our own gql tagged template literal for syntax highlighting
// purposes.
module.exports = (strings = [], values = []) =>
  strings.reduce((accumulator, current, index) => {
    return accumulator + current + (values[index] || '')
  }, '')

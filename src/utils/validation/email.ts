const emailValidation: (email: string) => boolean = (email) => {
  const fragment = email.split('')
  const dot = fragment.includes('.')
  const at = fragment.includes('@')
  const minMax = fragment.length > 7
  return Boolean(dot && at && minMax)
}

export default emailValidation

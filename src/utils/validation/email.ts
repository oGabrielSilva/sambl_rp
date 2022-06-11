const emailValidation: (email: string) => boolean = (email) => {
  const fragment = email.split('')
  const dot = fragment.includes('.')
  const at = fragment.includes('@')
  const minMax = fragment.length > 10
  const prov = email.split('@')[1]?.split('.')[1]?.length > 1
  return dot && at && minMax && prov
}

export default emailValidation

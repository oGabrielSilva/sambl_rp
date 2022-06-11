const passwordValidation: (password: string) => boolean = (password) => {
  const fragment = password.split('')
  const len = fragment.length >= 8
  const num = fragment.map((val) => !Number.isNaN(Number(val)))
  return Boolean(len && num)
}

export default passwordValidation

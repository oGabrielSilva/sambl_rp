const textareaValidation: (text: string) => boolean = (text) =>
  text.length > 20 && text.length <= 500

export default textareaValidation

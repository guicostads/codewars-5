function createPhoneNumber(numbers){
  const toStr = numbers.join('')
  const areaCode = toStr.substring(0, 3)
  const firstNums = toStr.substring(3, 6)
  const lastNums = toStr.substring(6, 10)
  return `(${areaCode}) ${firstNums}-${lastNums}`
}
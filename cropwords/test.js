const cropwords = require('./cropwords')


test('Crop 123 with K = 14', () => {
    const message = 123
    const K = 14
    expect(cropwords(message, K)).toBe("")
})
test('Crop "Hi" with K = -1', () => {
    const message = "Hi"
    const K = -1
    expect(cropwords(message, K)).toBe("")
})
test('Crop "Codility We test coders" with K = 14', () => {
    const message = "Codility We test coders"
    const K = 14
    expect(cropwords(message, K)).toBe("Codility We")
})
test(' co de my" with K = 5', () => {
    const message = " co de my"
    const K = 5
    expect(cropwords(message, K)).toBe(" co")
})
test(' co de my" with K = 7', () => {
    const message = " co de my"
    const K = 7
    expect(cropwords(message, K)).toBe(" co de")
})
test('Crop "   " with K = 2', () => {
    const message = "   "
    const K = 2
    expect(cropwords(message, K)).toBe("")
})
test('Crop "   re" with K = 2', () => {
    const message = "   re"
    const K = 2
    expect(cropwords(message, K)).toBe("")
})
test('Crop " c " with K = 3', () => {
    const message = " c "
    const K = 3
    expect(cropwords(message, K)).toBe(" c")
})
test('Crop " c d  " with K = 5', () => {
    const message = " c d  "
    const K = 5
    expect(cropwords(message, K)).toBe(" c d")
})
test('Crop "co de my" with K = 5', () => {
    const message = "co de my"
    const K = 5
    expect(cropwords(message, K)).toBe("co de")
})
test('Crop "Hello" with K = 5', () => {
    const message = "Hello"
    const K = 5
    expect(cropwords(message, K)).toBe("Hello")
})
test('Crop "codility We test coders" with K = 23', () => {
    const message = "codility We test coders"
    const K = 23
    expect(cropwords(message, K)).toBe("codility We test coders")
})
test('Crop "withOutSpaces" with K = 14', () => {
    const message = "withOutSpaces"
    const K = 14
    expect(cropwords(message, K)).toBe("withOutSpaces")
})
test('Crop "" with K = 14', () => {
    const message = ""
    const K = 14
    expect(cropwords(message, K)).toBe("")
})
test('Crop "Separatedby hyphens" with K = 14', () => {
    const message = "Separatedby hyphens"
    const K = 14
    expect(cropwords(message, K)).toBe("Separatedby")
})
test('Crop "      Codility We test coders     " with K = 14', () => {
    const message = "      Codility We test coders     "
    const K = 14
    expect(cropwords(message, K)).toBe("      Codility")
})
test('Crop "      Codility We test coders     " with K = 10', () => {
    const message = "      Codility We test coders     "
    const K = 10
    expect(cropwords(message, K)).toBe("")
})

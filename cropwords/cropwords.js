// There is a forum that has a limit of K characters per entry. In this task your job is to implement an algorithm
// for cropping messages that are too long. You are given a message, consisting of English alphabet letters and
// spaces, that might be longer than the limit. Your algorithm should crop a number of words from the end of the
// message, keeping in mind that:
//
// - It may not crop away part of a word
// - The output message may not end with a space
// - The output message may not exceed the K-Character limit
// - The output message should be as long as possible
//
// This means that, in some cases, the algorithm may need to crop away the entire message, outputting an empty string.
//
// For example, given the text: “Codility We test coders”
//
// With K.= 14 the algorithm should output “Codility We”
//
// Note that:
// - The output “Codility We the” would be incorrect, because the original message is cropped through the middle of a word;
// - The output “Codility We “ would be incorrect because it ends with a space
// - The output “Codility We test coders” mould be incorrect because it exceeds the K-character limit
// - The output “Codility” would be incorrect because it is shorter than the correct output
function cropword(message, K) {
    if (K <= 0 || typeof message !== "string") return ""
    if (message.length <= K) return message.trimRight()

    let res = ""
    for (let word of message.split(" ")) {
        let temp = res + word
        if (temp.length <= K) res = temp + " "
        else break
    }
    return res.trimRight()
}

module.exports = cropword;
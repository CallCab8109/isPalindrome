// // Write your code below

// const reverseString(word) {
//     if(word === reverseString(word)) {
//         return true
//     } else {
//         return false
//     }
// }

// let emordnilap = palindrome("noon")
// console.log(emordnilap)
function reverseString(str) {
    let str1 = (str.split('').reverse().join(''))
  if(str1 === (str)){
    console.log(true)
  } else {
    console.log(false)
  }
}
  reverseString("palindrome");
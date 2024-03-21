// let ism = prompt("ismingizni kiriting")
// let resultat = ism.split('').reverse().join('')
// console.log(resultat);




let isPalindromArr = ['non', 'amma', 'olma', 'aziza', 'Gul', 'mashina']
let arr = []

for (let i = 0; i < isPalindromArr.length; i++) {
    let word = isPalindromArr[i]
    let reverseWord = word.split('').reverse().join('')

    if(word === reverseWord){
     arr.push(word)
     console.log(arr);
    }
}

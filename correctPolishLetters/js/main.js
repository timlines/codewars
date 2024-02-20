// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z


// function correctPolishLettters(string){
//     let newString = string.replaceAll('ą', 'a')
//     newString = newString.replaceAll('ć', 'c')
//     newString = newString.replaceAll('ę', 'e')
//     newString = newString.replaceAll('ł', 'l')
//     newString = newString.replaceAll('ń', 'n')
//     newString = newString.replaceAll('ó', 'o')
//     newString = newString.replaceAll('ś', 's')
//     newString = newString.replaceAll('ź', 'z')
//     newString = newString.replaceAll('ż', 'z')

//     return newString;
// }


// v2


const polishLetters = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z',
};

function correctPolishLetters(string){
    return string.split('').map((char) => polishLetters[char] || char).join('');
}


console.log(correctPolishLetters('Jędrzej Błądziński'))
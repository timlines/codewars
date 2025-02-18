function add(a, b){
    // return (BigInt(a) + BigInt(b)).toString();

    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        const sum = digitA + digitB + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
        i--;
        j--;
    }
    return result;



}



console.log(add('123', '456')) // '579'
console.log(add('63829983432984289347293874', '90938498237058927340892374089')) // '579'





// return (BigInt(a) + BigInt(b)).toString();
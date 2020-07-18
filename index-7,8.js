
const reverseStr = str => {return str.split('').reverse().join('');
}

console.log(reverseStr('Привет как дела?'));
console.log(reverseStr('А роза упала на лапу Азора'));
console.log(reverseStr('Hello Lectrum!'));
console.log(reverseStr('!murtceL olleH'));

const reversePhrase = str => {return str.split(' ').reverse().join(' ');
}

console.log(reversePhrase('Наконец-то я выучил основы JavaScript!'));


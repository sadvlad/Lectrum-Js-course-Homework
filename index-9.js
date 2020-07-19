
const truncate = (str, num) => {
    if(num < str.length){
    return str.substr(0, num) + '...'
    }
    else
    return str
}

console.log(truncate('Наконец-то я выучил основы JavaScript!',12));
console.log(truncate('Наконец-то я выучил основы JavaScript!',40));
console.log(truncate('Наконец-то я выучил основы JavaScript!',5));
console.log('Наконец-то я выучил основы JavaScript!'.length);
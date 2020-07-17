function pow(a, b = a) {
    if(parseInt(a) && parseInt(b) && b > 0) {    
    return a ** b;    
    }
    else {
    return null;
    }    
};
console.log(pow(2, 2));
console.log(pow(3, 4));
console.log(pow(2, -6));
console.log(pow(2, 0));

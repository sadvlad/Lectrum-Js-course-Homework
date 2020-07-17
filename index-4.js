
function join(){
let arr = [];
    for (let i = 0 ; i < arguments.length; i++){
        if(typeof arguments[i] == 'string' && arguments[i] !== '' && arguments[i] !== ' '){    
        arr[i] = arguments[i].trim();
        }
        else{
        continue;    
        }
    }
    if ( arguments.length > 0){       
    return arr.join(' ').trim().replace(/  /g, ' ');
    }
    else {
    return null;        
    }
}
 
console.log(join('', 68, ' hello ', 35,'Lectrum', ''));
console.log(join()); 
console.log(join('Hello', 'Lectrum'));
console.log(join('Hello', '', 'Lectrum'));
console.log(join('Hello', ' ', 'Lectrum'));

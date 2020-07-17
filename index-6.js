
let person = {
name: 'John Doe', 
role: ['Project Manager', 'Developer'],
toString: function() {
    if(person.role !== undefined && person.name.length >= 3){
    return 'Сотрудник ' + this.name + ' занимает следующие позиции в компании: ' + this.role;
    }
    else if(person.name.length < 3){
    return 'Имя должно состоять не менее чем из 3 символов'
    }
    else
    return 'Сотруднику ' + this.name + ' не назначены роли'
    }
}

console.log(person.toString());

let staff = {
    payroll: 'зарплата сотрудника',
     advance:  'аванс сотрудника',
     salary:  'зарплата сотрудника',
     __proto__: person,
} 
const checkPayroll = x =>{
    if(typeof x == 'number' && x > 0 ){
    staff.payroll = x; 
    staff.advance = 0.3 * x;
    staff.salary = 0.7 * x;
    console.log(staff);
    }
    else {
    staff.payroll = 0;
    console.log('Not valid payroll key');
    }
}
checkPayroll(600);
checkPayroll(-50);
checkPayroll('просто строка');




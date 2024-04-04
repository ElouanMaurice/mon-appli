function checkValues(data) {
    let newList = [];
    
    for(let user of data){
        for(const userinformation in user){
            if (user[userinformation] === '' || user[userinformation] === ' '){ user[userinformation] = null;
            }
          newList.push(user)   
        }             
    }  
    return newList;
    
}

const list = [
   { fullname: 'John Doe', age: 42, tel: '', email: ' ' },
   { fullname: 'Vanessa Williams', age: '', tel: ' ', email: 'v.williams@gmail.com' },
   { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: '' },
];
console.log(checkValues(list));
// Expected:
// [{ fullname: 'John Doe', age: 42, tel: null, email: null },
//     { fullname: 'Vanessa Williams', age: null, tel: null, email: 'v.williams@gmail.com' },
//     { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: null }]

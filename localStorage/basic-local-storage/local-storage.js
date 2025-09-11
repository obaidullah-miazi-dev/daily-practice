const addToLs = () =>{
    const number = Math.ceil(Math.random()*100)
    console.log(number)
    localStorage.setItem('number',number)
}

const getFromLs = ()=>{
    const number = localStorage.getItem('number')
    console.log('saved item in ls',number)
}


const setObject = () => {
    const customer = {name: 'jhon doe', age: 21, designation: 'web developer'}
    const customerJson =JSON.stringify(customer)
    localStorage.setItem('customer',customerJson)
}

const readObj = ()=>{
    const customerJson = localStorage.getItem('customer')
    const customerObj = JSON.parse(customerJson)
    console.log(customerObj)
    console.log(customerObj.name, customerObj.age, customerObj.designation)
}
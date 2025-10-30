const getData1 = new Promise((resolve, reject)=>{
    const number = Math.random()*10;
    console.log('1Random num: ', number)
    if(number>2){
        resolve({num1: number})
    }
    else{
        reject({error1: 'data not found'})
    }
})


const getData2 = new Promise((resolve, reject)=>{
    const number = Math.random()*10;
    console.log('2Random num: ', number)
    if(number>2){
        resolve({num2: number})
    }
    else{
        reject({error2: 'data not found'})
    }
})


const getData3 = new Promise((resolve, reject)=>{
    const number = Math.random()*10;
    console.log('3Random num: ', number)
    if(number>2){
        resolve({num3: number})
    }
    else{
        reject({error3: 'data not found'})
    }
})

Promise.all([getData1,getData2,getData3])
.then(res => console.log(res))
.catch(error => console.log(error))


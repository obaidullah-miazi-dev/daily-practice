const getData = new Promise((resolve, reject)=>{
    const number = Math.random()*10;
    console.log('Random num: ', number)
    if(number>5){
        resolve({num: number})
    }
    else{
        reject({error: 'data not found'})
    }
})

getData
.then(data => console.log(data))
.catch(error => console.log(error))

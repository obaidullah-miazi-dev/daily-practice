async function loadData(){
    console.log('1')
    console.log('2')
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => console.log('async 3'))
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log('await 3 is here', data[0].name)
    console.log('4')
    console.log('5')
}

// loadData();

const loadData2 = async () => {
    console.log('one')
    console.log('two')
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log('await three')
    }
    catch(error){
        console.log(error)
    }
    console.log('four')
    console.log('five')
}

loadData2()
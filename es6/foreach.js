const numbers = [2,8,4,6,3]
// numbers.forEach(num => console.log(num*2))

const names = ['ami','tumi','se','tara']
// names.forEach(name=>console.log(name))

const Names ={
    name:'obaidullah',
    age:21
}
Object.keys(Names).forEach(info => {
    console.log(info, Names[info])
})

// const person = {
//     name: 'obaidullah',
//     age:21,
//     designation: 'student',
//     isRich: false,
// }

// console.log(person)

// // object to json file convert --> use stringify
// const personJSON= JSON.stringify(person)
// console.log(personJSON)


// // JSON to object file convert --> use parse
// const objectJSON = JSON.parse(personJSON)
// console.log(objectJSON)



// -------------------------------------------------------------------------------------

// api to json 

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}




const loadUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(response => response.json())
        .then(data => getUsers(data))
}




const getUsers = (users) => {

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";


    users.forEach(element => {

        const div = document.createElement('div');
        
        div.innerHTML = `
        <div id="all-info" class="bg-yellow-50 rounded-xl shadow-blue-100 p-5 w-[500px]">
            <h1 class="text-2xl font-bold mb-3">${element.name}</h1>
            <div class="mb-3">
                <h2 class="font-bold">User info:</h2>
                <h3>Username: <span class="font-bold">${element.username}</span></h3>
                <h3>Email: <span class="font-bold">${element.email}</span></h3>
            </div>
            <div class="mb-3">
                <h2 class="font-bold">Address:</h2>
                <p>street: <span class="font-bold">${element.address.street}</span></p>
                <p>suite: <span class="font-bold">${element.address.suite}</span></p>
                <p>city: <span class="font-bold">${element.address.city}</span></p>
                <p>zipcode: <span class="font-bold">${element.address.zipcode}</p>
            </div>
            <div class="mb-3">
                <h2 class="font-bold">Contact Info:</h2>
                <p>phone: <span class="font-bold">${element.phone}</span></p>
                <p>website: <span class="font-bold">${element.website}</span></p>
            </div>

            <div>
                <h2 class="font-bold">Company:</h2>
                <p>name: <span class="font-bold">${element.company.name}</span></p>
            </div>
        </div>
        `;
        
        cardContainer.appendChild(div)
    });
}

loadUsers()

// {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//         }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//     }
// }
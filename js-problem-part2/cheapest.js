const phones = [
    { name: 'xiaomi', price: 45000, camera: '64mp', battery: '4500mah' },
    { name: 'samsung', price: 30000, camera: '48mp', battery: '5000mah' },
    { name: 'motorola', price: 35000, camera: '108mp', battery: '6500mah' },
    { name: 'honor', price: 55000, camera: '108mp', battery: '4000mah' }
]

function cheapestPhone(phones) {
    let min = phones[0];
    for (phone of phones) {
        if (min.price > phone.price) {
            min = phone;
        }
    }
    return min;
}

const cheap = cheapestPhone(phones);
console.log(cheap);

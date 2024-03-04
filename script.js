// const person = {
//   name: 'Leonardo',
//   shirt: 'white'
// }

// //dot notation
// console.log(person.name)

// //bracket notation
// console.log(person['shirt'])

// //assign object
// person.phone = '1-222-222-2222'
// console.log(person.phone)

// console.log(person)

//object person 2

// const person2 = {
//   name: 'Qazi',
//   shirt: 'black'
// }

// console.log(person2)
// console.log(person2.name)

//function
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    debt: 50000,
    netWorth: function() {
      return this.assets - this.debt
    }
  }
  const intro = `Hello my name is ${person.name}, the color of my shirt is $${person.shirt} and my networth is ${person.netWorth()} USD.`

  return intro
}

console.log(introducer('Leonardo', 'white'))
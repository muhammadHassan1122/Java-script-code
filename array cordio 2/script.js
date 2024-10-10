const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


//   Array.prototype.some

const isAdult = people.some(person => ((new Date ()).getFullYear())
- person.year >= 19)

console.log({isAdult})

// Array.prototype.every

const allAdults = people.every(person => ((new Date ()).getFullYear())
- person.year >= 19)

console.log({allAdults})


// Array.prototype.find

const comment = comments.find(comment => comment.id === 823423)

console.table(comment)


// Array.prototype.find

const index = comments.findIndex(index => index.id === 823423)

console.table(index)

const newComments = [
    comments.splice(0, index),
    comments.splice(index + 1)
]
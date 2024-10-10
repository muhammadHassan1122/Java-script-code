const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Jahannes", last: "kepler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Coperniceous", year: 1473, passed: 1543 },
];

const people = [
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
  "Beck, Glenn",
];


// Array.prototype.filter

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))
console.table(fifteen)


// Array.prototype.map
const firstName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(firstName)


// Array.prototype.sort
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(ordered)

// Array.prototype.reduce
const totalyears  = inventors.reduce((total, inventor) => {
   return total + (inventor.passed - inventor.year)
}, 0)
console.log(totalyears)

// sort the inventer by years lived

const oldest = inventors.sort(function (a, b) {
    const lastGuy = a.passed - a.year
    const nextGuy = b.passed - b.year
     return lastGuy > nextGuy ? -1 : 1;
})

console.table(oldest)

// sort the people alpha betically by last name

const alpha = people.sort(function (lastone, nextone) {
    const [aLast, aFirst] = lastone.split(", ")
    const [bLast, bFirst] = nextone.split(", ")
    return aLast > bLast ? 1 : -1
})

console.log(alpha)


// set up the instances of each of these

const data = ['car', 'car', 'truck', 'bike', 'cycle', 'rickshaw', 'walk', 'bike', 'van', 'truck', ];

const transportation = data.reduce(function(obj, item) {
if(!obj[item]){
    obj[item] = 0;
}
obj[item]++;
  return obj;
}, {
//   car: 0,
//   truck:0,
//   walk: 0,
//   car: 0,

});

console.log(transportation)
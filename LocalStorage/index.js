const addItems= document.querySelector('.add-items');
const itemsList= document.querySelector('.plates');

// check localStorage for items if nothing found fallback to empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

// =========== Funtion to add item to the list ==================
function addItem(e){
  e.preventDefault();
  //   grab the value from the input with the selector name = item
  //   this references the form
  const text = (this.querySelector('[name=item]')).value;
  //   after getting the text value, place it on an object
  
  const item = {
  // shorthand in es6 instead of text:text
    text,
    done: false
  };
  //   push the new item into our items array
  items.push(item);
  //   populate the list using the populateList function
  populateList(items, itemsList);
  //   Adding items into Local Storage and stringify since they must be string to make it work
  //setItem is part of the LocalStorage API   
  localStorage.setItem('items', JSON.stringify(items));
  //   reset the form after submission - each form has a reset property
  this.reset();
}

// populate the list
function populateList(plates = [], platesList){
//   loop over the array and create the new list item html
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

// Preserve checkbox if page refresh
// by doing event delegation on the class plates ( var itemsList)
// we can make sure that an element that always exists on the DOM would
// delegate the event listeners to the <li> or any future <li>
// we're using the data-index on the input checkbox to see if done = false or true
function toggleDone(e){
  if(!e.target.matches('input'))return; //skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done; //switching done back and forth between false and true
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

 
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList); 

checkboxes = document.querySelectorAll('.item input[type = "checkbox"]');
let lastChecked;
function handleCheck(e) {
 let inBetween = false;
 if (e.shiftKey && lastChecked.checked && this.checked && lastChecked != this) {
  checkboxes.forEach(checkbox => {
   if (checkbox === this || checkbox === lastChecked) {
    inBetween = !inBetween;
   }
   inBetween ? (checkbox.checked = true) : "";
  });
 }
 lastChecked = this;
}

checkboxes.forEach(checkbox => {
 checkbox.addEventListener("click", handleCheck);
});

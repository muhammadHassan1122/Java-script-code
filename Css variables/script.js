const input = document.querySelectorAll('.Controls input')

function handleUpdate() {
    // console.log(this.value)
    const suffix = this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) 
}

input.forEach(input => input.addEventListener('change', handleUpdate));
input.forEach(input => input.addEventListener('mousemove', handleUpdate));
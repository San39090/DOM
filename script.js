function color(element){
    let color = element.textContent;
    element.style.backgroundColor = color;
}
function change(){
    let curr = document.querySelector('button').previousElementSibling.value
    document.querySelector('.name').textContent = "Hello, "+curr;
    document.querySelector('button').previousElementSibling.value = "";
}
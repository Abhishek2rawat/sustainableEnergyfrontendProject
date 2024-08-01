var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.zIndex = "2";
}
function hideMenu(){
    navLinks.style.zIndex = "-1";
}


document.querySelector('.contact-submit').addEventListener('click', (e) => {
    // e.preventDefault();
    // e.target.elements.name.value = '';
    // e.target.elements.email.value = '';
    // e.target.elements.subject.value = '';
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#subject').value = "";

});




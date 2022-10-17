let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active')
    });
});

document.querySelectorAll('.tabs_content img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.popup-imagen').style.display = 'block';
        document.querySelector('.popup-imagen img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-imagen').onclik = () => {
    document.querySelector('.popup-imagen').style.display = 'none';
};


function cambiar() {
    var imagen = document.getElementById("popup");
    if(imagen.style.display  === "none")
        {imagen.style.display  = "block"}
        else {imagen.style.display  = "none"}};



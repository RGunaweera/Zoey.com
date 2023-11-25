const aside = document.querySelector('.social-media');
const footer = document.querySelector('#footer');
const trigMenu = document.getElementById('menu-btn');



function handleIntersection(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aside.classList.add('hidden');
        } else {
            aside.classList.remove('hidden');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(footer);

trigMenu.addEventListener('click', function() { 
    document.querySelector('nav').classList.toggle('active'); 
});

const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const smallScreen = document.getElementById('small');

// hiding the small screen
menuBtn.addEventListener('click', () => {
    smallScreen.classList.toggle('hidden');
    menuBtn.classList.add('hidden')
    closeBtn.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    smallScreen.classList.toggle('hidden');
    menuBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden')
})
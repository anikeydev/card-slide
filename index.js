const $app = document.querySelector('body')
const $slides = document.querySelectorAll('.slide')
$app.addEventListener('click', handlerClickOnCard)

function handlerClickOnCard(event) {
    if (event.target.dataset.type === 'card') {
        clearActiveClasses()
        event.target.classList.add('active')
    }
}

function clearActiveClasses() {
    $slides.forEach(($slide) => {
        $slide.classList.remove('active')
    })
}
let images = document.querySelector('.images');

let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');

let img = document.querySelectorAll('#img')

let index = 0;

const changeImages = () => {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }
    images.style.transform = `translate(${-index*700}px)`
}


const runSlide = () => {
    index++
    changeImages()
}
let interval = setInterval(runSlide, 2000)

const resetInterval = () => {
    clearInterval(interval)

    interval = setInterval(runSlide, 2000)
}



nextBtn.addEventListener('click', () => {
    index++
    resetInterval()
    changeImages()
})
prevBtn.addEventListener('click', () => {
    index--
    resetInterval()
    changeImages()
})
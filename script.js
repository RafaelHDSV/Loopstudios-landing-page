let hamburguer = document.querySelector('.hamburguer')
let hamburguerMenu = document.querySelector('.hamburguer_menu')
let imgHero = document.querySelector('.img_hero')
let imgInteractive = document.querySelector('.interactive img')
let imgCreation = document.querySelectorAll('.creation img')
let hamburguerBoolean = true

setInterval(() => {
    if (window.screen.width < 720) {
        imgHero.src = imgHero.src.replace('desktop', 'mobile')

        imgInteractive.src = imgInteractive.src.replace('desktop', 'mobile')

        for (let i = 0; i < imgCreation.length; i++) {
            imgCreation[i].src = imgCreation[i].src.replace('desktop', 'mobile')
        }
    } else {
        imgHero.src = imgHero.src.replace('mobile', 'desktop')

        imgInteractive.src = imgInteractive.src.replace('mobile', 'desktop')

        for (let i = 0; i < imgCreation.length; i++) {
            imgCreation[i].src = imgCreation[i].src.replace('mobile', 'desktop')
        }
    }
}, 1000)

hamburguer.addEventListener('click', () => {
    hamburguerBoolean = !hamburguerBoolean

    if (hamburguerBoolean == true) {
        hamburguer.src = 'images/icon-hamburger.svg'
        hamburguerMenu.style.display = 'none'
    } else {
        hamburguer.src = 'images/icon-close.svg'
        hamburguerMenu.style.display = 'flex'
    }
})
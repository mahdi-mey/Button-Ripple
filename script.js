let rippleButton = document.querySelector('.ripple-button')

rippleButton.addEventListener('click', e => {
    let positionX = e.offsetX
    let positionY = e.offsetY

    rippleButton.style.setProperty('--x', positionX + 'px')
    rippleButton.style.setProperty('--y', positionY + 'px')

    rippleButton.classList.add('pulse')

    rippleButton.addEventListener('animationend', () => {
        rippleButton.classList.remove('pulse')
    })  
})
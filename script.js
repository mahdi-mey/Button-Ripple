let rippleButton = document.querySelector('.ripple-button')

rippleButton.addeventListener('click', e => {
    let positionX = e.offsetX
    let positionY = e.offsetY

    allRippleButtons.style.setProperty('--x', positionX + 'px')
    allRippleButtons.style.setProperty('--y', positionY + 'px')

    allRippleButtons.classList.add('pulse')

    allRippleButtons.addEventListener('animationend', () => {
        allRippleButtons.classList.remove('pulse')
    })
})
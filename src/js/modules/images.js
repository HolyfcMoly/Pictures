const images = (imgSeleector) => {
    const sizeBlock = document.querySelectorAll(imgSeleector)


    const showImg = (block) => {
        const img = block.querySelector('img')
        img.src = img.src.slice(0, -4) + '-1.png'
        img.classList.add('animated', 'fadeIn')
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none'
        })
    }

    const hideImg = (block) => {
        const img = block.querySelector('img')
        img.src = img.src.slice(0, -6) + '.png'
        img.classList.remove('animated', 'fadeIn')
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block'
        })
    }

    sizeBlock.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block)
        })
        block.addEventListener('mouseout', () => {
            hideImg(block)
        })
    })
}

export default images
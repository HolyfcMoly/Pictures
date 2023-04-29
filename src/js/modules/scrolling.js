const scrolling = (up) => {
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650) {
            console.log(1)
        }
    })
}

export default scrolling
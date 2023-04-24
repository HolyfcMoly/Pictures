const checkTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector)
    let errorBlock;

    textInputs.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if(this.getAttribute('name') === 'email') {
                if(!(/[a-z0-9@._\-]/i.test(e.key))) {
                    e.preventDefault();
                    if(!errorBlock) {

                        errorBlock = document.createElement('div')
                        errorBlock.classList.add('error')
                        errorBlock.style.backgroundColor = '#ffffff'
                        errorBlock.style.padding = '6px'
                        errorBlock.style.borderRadius = '10px'
                        errorBlock.style.border = '1px solid red'
                        errorBlock.style.position = 'absolute'
                        errorBlock.style.left = '690px'
                        errorBlock.style.top = '-36px'
                        errorBlock.classList.add('animated', 'fadeIn')

                        this.parentNode.insertBefore(errorBlock, this.nextSibling)
                    }
                    errorBlock.textContent = 'Введите свою почту на англ. языке'
                        setTimeout(() => {
                            errorBlock.classList.add('fadeOut')
                            setTimeout(() => {
                                errorBlock.remove()
                                errorBlock = null;
                            }, 1000)
                        }, 3000)
                }
            } else if (this.getAttribute('name') === 'message') {
                if(e.key.match(/[^а-яё 0-9]/ig)) {
                    e.preventDefault()
                    if(!errorBlock) {

                        errorBlock = document.createElement('div')
                        errorBlock.classList.add('error')
                        errorBlock.style.backgroundColor = '#ffffff'
                        errorBlock.style.padding = '6px'
                        errorBlock.style.borderRadius = '10px'
                        errorBlock.style.border = '1px solid red'
                        errorBlock.classList.add('animated', 'fadeIn')

                        this.insertAdjacentElement('beforebegin',errorBlock)
                    }
                    errorBlock.textContent = 'Введите своё сообщение на русс. языке'
                        setTimeout(() => {
                            errorBlock.classList.add('fadeOut')
                            setTimeout(() => {
                                errorBlock.remove()
                                errorBlock = null;
                            }, 1000)
                        }, 3000)
                }
            } else {
                if(e.key.match(/[^а-яё 0-9]/ig)) {
                    e.preventDefault()
                    if(!errorBlock) {

                        errorBlock = document.createElement('div')
                        errorBlock.classList.add('error')
                        errorBlock.style.backgroundColor = '#ffffff'
                        errorBlock.style.padding = '6px'
                        errorBlock.style.borderRadius = '10px'
                        errorBlock.style.border = '1px solid red'
                        errorBlock.style.position = 'absolute'
                        errorBlock.style.left = '45px'
                        errorBlock.style.top = '-36px'
                        errorBlock.classList.add('animated', 'fadeIn')

                        this.parentNode.insertBefore(errorBlock, this.nextSibling)
                    }
                    errorBlock.textContent = 'Введите своё имя на русс. языке'
                        setTimeout(() => {
                            errorBlock.classList.add('fadeOut')
                            setTimeout(() => {
                                errorBlock.remove()
                                errorBlock = null;
                            }, 1000)
                        }, 3000)
                }
            }
        })
    })
}

export default checkTextInputs
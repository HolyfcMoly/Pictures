const checkTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector)

    textInputs.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if(this.getAttribute('name') === 'email') {
                if(!(/[a-z0-9@._\-]/i.test(e.key))) {
                    e.preventDefault();
                }
            } else {
                if(e.key.match(/[^а-яё 0-9]/ig)) {
                    e.preventDefault()
                }
            }
        })
    })
}

export default checkTextInputs
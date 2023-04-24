const mask = (selector) => {
    let setCursorPosition = (pos, el) => {
        el.focus()

        if(el.setSelectionRange) {
            el.setSelectionRange(pos, pos)
        } else if (el.createTextRange) {
            let range = el.createTextRange()

            range.collapse(true)
            range.moveEnd('character', pos)
            range.moveStart('character', pos)
            range.select()
        }
    }

    function createMask(e) {
        let matrix = '+7 (___) ___ __ __'
        let i = 0
        let def = matrix.replace(/\D/g, '')
        let value = this.value.replace(/\D/g, '')

        if(def.length >= value.length) {
            value = def
        }
        

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a
        })

        if(e.type == 'blur') {
            if(this.value.length === 2) {
                this.value = ''
            }
        } else {
            setCursorPosition(this.value.length, this)
            if (this.value.replace(/\D/g, '').length >= 11) {
                setCursorPosition(this.value.length, this)
            }
        }
    }

    let inputs = document.querySelectorAll(selector)

    inputs.forEach(input => {
        input.addEventListener('input', createMask)
        input.addEventListener('focus', createMask)
        input.addEventListener('blur', createMask)
    })
}

export default mask
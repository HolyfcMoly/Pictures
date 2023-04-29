const accordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);
    // активный может быть только 1 элемент, при повторном нажатии элемент скрывается
    // получаем список всех кнопок аккордеона
    btns.forEach((btn) => {
        // добавляем обработчик события для каждой кнопки
        btn.addEventListener("click", function () {
            // скрываем все другие открытые блоки кроме текущего
            btns.forEach((btn) => {
                if (btn !== this && btn.classList.contains("active-style")) {
                    // удаляем классы и стили
                    btn.classList.remove("active-style");
                    btn.nextElementSibling.classList.remove("active-content");
                    btn.nextElementSibling.style.maxHeight = "0px";
                }
            });
            // проверяем, был ли клик на уже активной кнопке
            if (!this.classList.contains("active-style")) {
                // если кнопка неактивна - добавляем классы и стили
                this.classList.add("active-style");
                this.nextElementSibling.classList.add("active-content");
                this.nextElementSibling.style.maxHeight =
                    this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                // иначе удаляем классы и стили
                this.classList.remove("active-style");
                this.nextElementSibling.classList.remove("active-content");
                this.nextElementSibling.style.maxHeight = "0px";
            }
        });
    });

    // // активным элементом может быть только 1
    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if(this.classList.contains('active-style')) {
    //             this.classList.toggle('active-style')
    //             this.nextElementSibling.classList.toggle('active-content')
    //             this.nextElementSibling.style.maxHeight = '0px';
    //         } else {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active-style')
    //                 btn.nextElementSibling.classList.remove('active-content')
    //                 btn.nextElementSibling.style.maxHeight = '0px';
    //             })
    //         }
    //         this.classList.toggle('active-style')
    //         this.nextElementSibling.classList.toggle('active-content')
    //         this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
    //     })
    // })
    // активным элементом могут быть все
    // const blocks = document.querySelectorAll(itemsSelector)

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown')
    // })

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if(!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style')
    //             })
    //             this.classList.add('active', 'active-style')
    //         }
    //     })
    // })
};

export default accordion;

// Определение функции filter
const filter = () => {
    // Получение элементов DOM
    const menu = document.querySelector(".portfolio-menu");
    const items = menu.querySelectorAll("li");
    const wrapper = document.querySelector(".portfolio-wrapper");
    const no = document.querySelector(".portfolio-no");
    const [btnAll, btnLovers, btnChef, btnGirl, btnGuy, btnGrandmother, btnGranddad] = menu.querySelectorAll('li');
    const markAll = wrapper.querySelectorAll(".all");
    const markGirl = wrapper.querySelectorAll(".girl");
    const markLovers = wrapper.querySelectorAll(".lovers");
    const markChef = wrapper.querySelectorAll(".chef");
    const markGuy = wrapper.querySelectorAll(".guy");

    // Определение функции typeFilter для фильтрации
    const typeFilter = (markType) => {
        // Скрытие всех фотографий
        markAll.forEach((mark) => {
            mark.classList.add('hide');
            mark.classList.remove("animated", "fadeIn", 'show');
        });

        // скрытие сообщения об отсутствии подходящих элементов
        no.classList.add('hide');
        no.classList.remove("animated", "fadeIn", 'show');

        // Если передан параметр markType, показыаем соответствующие фотографии, 
        // иначе - отображаем информацию о том, что результатов нет.
        if (markType) {
            markType.forEach((mark) => {
                mark.classList.remove('hide');
                mark.classList.add("animated", "fadeIn", 'show');
            });
        } else {
            no.classList.remove('hide');
            no.classList.add("animated", "fadeIn", 'show');
        }
    };

    // Определение функции btnsActive для активации выбранных фильтров
    const btnsActive = (btnSelector, markSelector) => {
        btnSelector.addEventListener('click', () => {
            typeFilter(markSelector);
        });
    }

    // назначение слушателя для каждого фильтра
    btnsActive(btnAll, markAll);
    btnsActive(btnLovers, markLovers);
    btnsActive(btnChef, markChef);
    btnsActive(btnGuy, markGuy);
    btnsActive(btnGirl, markGirl);
    btnsActive(btnGrandmother);
    btnsActive(btnGranddad);

    // назначение слушателя для элементов списка
    menu.addEventListener("click", (e) => {
        let target = e.target;

        // выделение активного элемента в списке
        if (target && target.tagName == "LI") {
            items.forEach((btn) => btn.classList.remove("active"));
            target.classList.add("active");
        }
    });
};

export default filter;

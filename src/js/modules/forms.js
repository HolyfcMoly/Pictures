import {postData} from '../services/requests';
import calc from './calc.js';

const forms = () => {
const form = document.querySelectorAll("form");
const input = document.querySelectorAll("input");
const upload = document.querySelectorAll('[name="upload"]')
const select = document.querySelectorAll('select')
const result = document.querySelector('.calc-price')

const message = {
    loading: "Загрузка...",
    success: "Спасибо, мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail:'assets/img/fail.png'
};

const path = {
    design: 'assets/server.php',
    question: 'assets/question.php'
}

const clearInput = () => {
    input.forEach((item) => {
    item.value = "";
    });
    upload.forEach(item => {
        item.previousElementSibling.textContent = 'Файл не выбран'
    })
    select.forEach(item => {
        item.selectedIndex = 0
    })
    result.textContent = 'Пожалуйста выберите размер и материал картины'
};

upload.forEach(item => {
    item.addEventListener('input', () => {
        console.log(item.files[0])
        let dots;
        const arr = item.files[0].name.split('.')
        arr[0].length > 6 ? dots = '...' : dots = '.'
        const name = arr[0].substring(0, 6) + dots + arr[1]
        item.previousElementSibling.textContent = name
    })
})

form.forEach((item) => {
    item.addEventListener("submit", (e) => {
    e.preventDefault();

    let statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    item.parentNode.appendChild(statusMessage);

    item.classList.add('animated', 'fadeOutUp')
    setTimeout(()=> {
        item.style.display = 'none'
    }, 400)

    let statusImg = document.createElement('img')
    statusImg.setAttribute('src', message.spinner)
    statusImg.classList.add('animated', 'fadeInUp')
    statusMessage.appendChild(statusImg)

    let textMessage = document.createElement('div')
    textMessage.textContent = message.loading
    statusMessage.appendChild(textMessage)

    const formData = new FormData(item);
    let api;
    item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.design : api = path.question
    console.log(api)

    const parameters = ['size', 'material', 'options'];
    Object.values(calc().obj).forEach((value, key) => {
        formData.append(parameters[key], value)
    })
    formData.append('price', calc().sum);

    postData(api, formData)
        .then((res) => {
        console.log(res);
        statusImg.setAttribute('src', message.ok)
        textMessage.textContent = message.success;
        })
        .catch(() => {
            statusImg.setAttribute('src', message.fail)
            textMessage.textContent = message.failure;
        })
        .finally(() => {
        clearInput();
        setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block'
            item.classList.remove('fadeOutUp')
            item.classList.add('fadeInUp')
        }, 5000);
        });
    });
});
};

export default forms;

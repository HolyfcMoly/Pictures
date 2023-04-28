/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const calc = () => {
  const sizeBlock = document.querySelector("#size");
  const materialBlock = document.querySelector("#material");
  const optionsBlock = document.querySelector("#options");
  const promocodeBlock = document.querySelector(".promocode");
  const resultBlock = document.querySelector(".calc-price");
  let sum = 0;
  let obj = {};
  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    resultBlock.textContent = sum;
    if (sizeBlock.value === "" || materialBlock.value === "") {
      resultBlock.textContent = "Пожалуйста выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      sum = Math.round(sum * 0.7);
      resultBlock.textContent = sum;
    } else {
      resultBlock.textContent = sum;
    }
    const updateRes = () => {
      const size = sizeBlock.value;
      const material = materialBlock.value;
      const options = optionsBlock.value;
      return obj = {
        size,
        material,
        options
      };
    };
    updateRes(obj);
  };
  calcFunc();
  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
  return {
    sum,
    obj
  };
};
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkCursorInput.js":
/*!********************************************!*\
  !*** ./src/js/modules/checkCursorInput.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const checkCursorInput = selector => {
  const inputPhone = document.querySelectorAll(selector);
  inputPhone.forEach(phone => {
    phone.addEventListener("click", () => {
      if (phone.selectionStart < 3) {
        phone.selectionStart = 3;
      }
    });
    phone.addEventListener("keydown", event => {
      const arrow = event.keyCode;
      if (arrow === 37 || arrow === 38 || arrow === 39 || arrow === 40) {
        if (phone.selectionStart < 3) {
          phone.selectionStart = 3;
        }
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkCursorInput);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach(item => {
    item.addEventListener('keypress', function (e) {
      if (this.getAttribute('name') === 'email') {
        if (!/[a-z0-9@._\-]/i.test(e.key)) {
          e.preventDefault();
        }
      } else {
        if (e.key.match(/[^а-яё 0-9]/ig)) {
          e.preventDefault();
        }
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
  const typeFilter = markType => {
    // Скрытие всех фотографий
    markAll.forEach(mark => {
      mark.classList.add('hide');
      mark.classList.remove("animated", "fadeIn", 'show');
    });

    // скрытие сообщения об отсутствии подходящих элементов
    no.classList.add('hide');
    no.classList.remove("animated", "fadeIn", 'show');

    // Если передан параметр markType, показыаем соответствующие фотографии, 
    // иначе - отображаем информацию о том, что результатов нет.
    if (markType) {
      markType.forEach(mark => {
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
  };

  // назначение слушателя для каждого фильтра
  btnsActive(btnAll, markAll);
  btnsActive(btnLovers, markLovers);
  btnsActive(btnChef, markChef);
  btnsActive(btnGuy, markGuy);
  btnsActive(btnGirl, markGirl);
  btnsActive(btnGrandmother);
  btnsActive(btnGranddad);

  // назначение слушателя для элементов списка
  menu.addEventListener("click", e => {
    let target = e.target;

    // выделение активного элемента в списке
    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");
/* harmony import */ var _calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc.js */ "./src/js/modules/calc.js");


const forms = () => {
  const form = document.querySelectorAll("form");
  const input = document.querySelectorAll("input");
  const upload = document.querySelectorAll('[name="upload"');
  const select = document.querySelectorAll('select');
  const result = document.querySelector('.calc-price');
  const calcForm = document.querySelector('.calc_form');
  const message = {
    loading: "Загрузка...",
    success: "Спасибо, мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    design: 'assets/server.php',
    question: 'assets/question.php'
  };
  const clearInput = () => {
    input.forEach(item => {
      item.value = "";
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
    select.forEach(item => {
      item.selectedIndex = 0;
    });
    result.textContent = 'Пожалуйста выберите размер и материал картины';
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.design : api = path.question;
      console.log(api);
      const parameters = ['size', 'material', 'options'];
      Object.values((0,_calc_js__WEBPACK_IMPORTED_MODULE_1__["default"])().obj).forEach((value, key) => {
        formData.append(parameters[key], value);
      });
      formData.append('price', (0,_calc_js__WEBPACK_IMPORTED_MODULE_1__["default"])().sum);
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInput();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/images.js":
/*!**********************************!*\
  !*** ./src/js/modules/images.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const images = imgSeleector => {
  const sizeBlock = document.querySelectorAll(imgSeleector);
  const showImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  };
  const hideImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  };
  sizeBlock.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, el) => {
    el.focus();
    if (el.setSelectionRange) {
      el.setSelectionRange(pos, pos);
    } else if (el.createTextRange) {
      let range = el.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(e) {
    let matrix = '+7 (___) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let value = this.value.replace(/\D/g, '');
    if (def.length >= value.length) {
      value = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a;
    });
    if (e.type == 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
      if (this.value.replace(/\D/g, '').length >= 11) {
        setCursorPosition(this.value.length, this);
      }
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed;
  function bindModal(trigerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const triger = document.querySelectorAll(trigerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();
    triger.forEach(item => {
      item.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (destroy) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = "none";
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = "block";
        document.body.classList.add("modal-open");
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener("click", () => {
      windows.forEach(item => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener("click", e => {
      if (e.target == modal) {
        windows.forEach(item => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal').forEach(el => {
        if (getComputedStyle(el).display !== 'none') {
          display = 'block';
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }
  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "0px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    return scrollWidth;
  }
  function showByScroll(selector) {
    window.addEventListener('scroll', () => {
      // let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)  для старых браузеров
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        // <- scrollHeight подставить вместо 
        document.querySelector(selector).click();
      }
    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  showByScroll('.fixed-gift');

  // showModalByTime('.popup-consultation', 60000)
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // cards.forEach(card => {
  //     card.classList.add('animated', 'fadeInUp')
  // })

  // btn.addEventListener('click', () => {
  //     cards.forEach(card => {
  //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs')
  //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
  //     })
  //     // btn.style.display = 'none'
  //     btn.remove()
  // })

  btn.addEventListener("click", function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)("assets/db.json").then(res => createCards(res.styles)
    // createCards(res)
    ).catch(e => {
      const errorBlock = document.createElement('div');
      errorBlock.innerHTML = `
			<div class='status'>
				Ошибка, перезагрузите страницу. "${e.message}"
			</div>`;
      document.querySelector(wrapper).appendChild(errorBlock);
    });
    this.remove();
  });
  function createCards(response) {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement("div");
      card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
      card.innerHTML = `
				<div class='styles-block'>
					<img src=${src} alt='style'>
					<h4>${title}</h4>
					<a href="${link}">Подробнее</a>
				</div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1;
  let paused = false;
  const items = document.querySelectorAll(slides);
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(slide => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });
    items[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);
  function changeSlide(n) {
    showSlides(slideIndex += n);
  }
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener("click", () => {
      changeSlide(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      changeSlide(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}
  function activateAnim() {
    if (dir === "vertical") {
      paused = setInterval(function () {
        changeSlide(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(function () {
        changeSlide(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }
  activateAnim();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnim();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": function() { return /* binding */ getResource; },
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_checkCursorInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkCursorInput */ "./src/js/modules/checkCursorInput.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/images */ "./src/js/modules/images.js");










window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="email"]');
  (0,_modules_checkCursorInput__WEBPACK_IMPORTED_MODULE_5__["default"])('[name="phone"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_6__["default"])('.button-styles', '#styles .row');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_modules_images__WEBPACK_IMPORTED_MODULE_9__["default"])('.sizes-block');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map
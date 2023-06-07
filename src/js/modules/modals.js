const modals = () => {
  let btnPressed;

  function bindModal(
    trigerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const triger = document.querySelectorAll(trigerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();

    triger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true

        if(destroy) {
          item.remove()
        }

        windows.forEach((item) => {
          item.style.display = "none";
          item.classList.add('animated', 'fadeIn')
        });

        modal.style.display = "block";
        document.body.classList.add("modal-open");
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });

      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener("click", (e) => {
      if (e.target == modal) {
        windows.forEach((item) => {
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
      let display

      document.querySelectorAll('[data-modal').forEach(el => {
        if(getComputedStyle(el).display !== 'none') {
          display = 'block'
        }
      })
      if(!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        let scroll = calcScroll()
        document.body.style.marginRight = `${scroll}px`;
      }
      
    }, time);
  }

  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  function showByScroll(selector) {
    window.addEventListener('scroll', () => {
      // let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)  для старых браузеров
      if(!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {// <- scrollHeight подставить вместо 
        document.querySelector(selector).click()
      }
    })
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
  showByScroll('.fixed-gift')
  
  showModalByTime('.popup-consultation', 30000)
};

export default modals;

const modals = () => {
  function bindModal(
    trigerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
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

        windows.forEach((item) => {
          item.style.display = "none";
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
      if (e.target == modal && closeClickOverlay) {
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

    return scrollWidth;
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
  
  // showModalByTime('.popup-consultation', 60000)
};

export default modals;

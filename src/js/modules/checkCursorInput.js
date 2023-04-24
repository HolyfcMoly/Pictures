const checkCursorInput = (selector) => {
  const inputPhone = document.querySelectorAll(selector);


  inputPhone.forEach((phone) => {
    phone.addEventListener("click", () => {
      if (phone.selectionStart < 3) {
        phone.selectionStart = 3;
      }
    });
    phone.addEventListener("keydown", (event) => {
      const arrow = event.keyCode
    if (arrow === 37 || arrow === 38 || arrow === 39 || arrow === 40) {
      if (phone.selectionStart < 3) {
        phone.selectionStart = 3;
      }
    }
    });
    
  });
};

export default checkCursorInput;


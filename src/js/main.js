import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import checkCursorInput from "./modules/checkCursorInput";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import images from "./modules/images";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener("DOMContentLoaded", () => {
    modals();
    sliders(
        ".feedback-slider-item",
        "horizontal",
        ".main-prev-btn",
        ".main-next-btn"
    );
    sliders(".main-slider-item", "vertical");
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    checkTextInputs('[name="email"]');
    checkCursorInput('[name="phone"]');
    showMoreStyles(".button-styles", "#styles .row");
    calc();
    filter();
    images(".sizes-block");
    accordion(".accordion-heading");
    burger(".burger-menu", ".burger");
    scrolling('.pageup');
    drop();
});

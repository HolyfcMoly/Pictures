const calc = () => {
    const sizeBlock = document.querySelector("#size");
    const materialBlock = document.querySelector("#material");
    const optionsBlock = document.querySelector("#options");
    const promocodeBlock = document.querySelector(".promocode");
    const resultBlock = document.querySelector(".calc-price");
    let sum = 0;
    let obj = {};

    const calcFunc = () => {
        sum = Math.round(
            +sizeBlock.value * +materialBlock.value + +optionsBlock.value
        );
        resultBlock.textContent = sum;

        if (sizeBlock.value === "" || materialBlock.value === "") {
            resultBlock.textContent =
                "Пожалуйста выберите размер и материал картины";
        } else if (promocodeBlock.value === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }

        const updateRes = () => {
            const size = sizeBlock.value;
            const material = materialBlock.value;
            const options = optionsBlock.value;

            obj = {
                size,
                material,
                options,
            };
            return console.log(obj);
        };
        updateRes(obj);
    };
    calcFunc();

    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionsBlock.addEventListener("change", calcFunc);
    promocodeBlock.addEventListener("input", calcFunc);

    return sum
};

export default calc;

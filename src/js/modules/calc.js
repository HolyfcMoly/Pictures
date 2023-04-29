const calc = (
    sizeSelector,
    materialSelector,
    optionsSelector,
    promocodeSelector,
    resultSelector
) => {
    const sizeBlock = document.querySelector(sizeSelector);
    const materialBlock = document.querySelector(materialSelector);
    const optionsBlock = document.querySelector(optionsSelector);
    const promocodeBlock = document.querySelector(promocodeSelector);
    const resultBlock = document.querySelector(resultSelector);
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
            sum = Math.round(sum * 0.7);
            resultBlock.textContent = sum;
        } else {
            resultBlock.textContent = sum;
        }

        const updateRes = () => {
            const size = sizeBlock.value;
            const material = materialBlock.value;
            const options = optionsBlock.value;

            return (obj = {
                size,
                material,
                options,
            });
        };
        updateRes(obj);
    };
    calcFunc();

    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionsBlock.addEventListener("change", calcFunc);
    promocodeBlock.addEventListener("input", calcFunc);

    return { sum, obj };
};

export default calc;

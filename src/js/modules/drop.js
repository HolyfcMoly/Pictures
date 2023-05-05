const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    const uploadServ = document.querySelector("#serv");

    ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    const message = {
        loading: "Загрузка...",
        success: "Спасибо, мы с вами свяжемся",
        failure: "Что-то пошло не так...",
        spinner: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png",
    };

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest(".file_upload").style.border = "5px solid yellow";
        item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unHighlight(item) {
        item.closest(".file_upload").style.border = "none";
        if (item.closest(".calc_form")) {
            item.closest(".file_upload").style.backgroundColor = "#fff";
        } else {
            item.closest(".file_upload").style.backgroundColor = "transparent";
        }
    }

    ["dragenter", "dragover"].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ["dragleave", "drop"].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach((input) => {
        input.addEventListener("drop", (e) => {
            preventDefaults(e);
            if (uploadServ && input === uploadServ) {
                const parentBlock = document.querySelector(".file_upload");
                let statusMessage = document.createElement("div");
                statusMessage.classList.add("status");
                parentBlock.parentNode.appendChild(statusMessage);

                parentBlock.classList.add("animated", "fadeOutUp");
                setTimeout(() => {
                    parentBlock.style.display = "none";
                }, 400);

                let statusImg = document.createElement("img");
                statusImg.setAttribute("src", message.spinner);
                statusImg.classList.add("animated", "fadeInUp");
                statusMessage.appendChild(statusImg);

                let textMessage = document.createElement("div");
                textMessage.textContent = message.loading;
                statusMessage.appendChild(textMessage);

                const formData = new FormData();
                formData.append("file", e.dataTransfer.files[0]);

                fetch("assets/server.php", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        console.log(response, "File uploaded!");
                        statusImg.setAttribute("src", message.ok);
                        textMessage.textContent = message.success;
                    })
                    .catch((error) => {
                        console.error("Error during file upload:", error);
                        statusImg.setAttribute("src", message.fail);
                        textMessage.textContent = message.failure;
                    })
                    .finally(() => {
                        setTimeout(() => {
                            statusMessage.remove();
                            parentBlock.style.display = "block";
                            parentBlock.classList.remove("fadeOutUp");
                            parentBlock.classList.add("fadeInUp");
                        }, 5000);
                    });

                if (input.files && input.files[0]) {
                    let dots;
                    const arr = input.files[0].name.split(".");

                    arr[0].length > 6 ? (dots = "...") : (dots = ".");
                    const name = arr[0].substring(0, 6) + dots + arr[1];
                    input.previousElementSibling.textContent = name;
                }
            } else {
                input.files = e.dataTransfer.files;
                let dots;
                const arr = input.files[0].name.split(".");

                arr[0].length > 6 ? (dots = "...") : (dots = ".");
                const name = arr[0].substring(0, 6) + dots + arr[1];
                input.previousElementSibling.textContent = name;
            }
        });
    });
};

export default drop;

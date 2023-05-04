const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    const uploadServ = document.querySelector("#serv");

        ["dragenter", "dragleave", "dragover", "drop"].forEach(
            (eventName) => {
                fileInputs.forEach((input) => {
                    input.addEventListener(eventName, preventDefaults, false);
                });
            }
        );

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
                const formData = new FormData();
                formData.append("file", e.dataTransfer.files[0]);

                fetch("assets/server.php", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        console.log(response, "File uploaded!");
                    })
                    .catch((error) => {
                        console.error("Error during file upload:", error);
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

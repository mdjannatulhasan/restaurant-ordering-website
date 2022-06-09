function toastNew() {
    Toastify({
        text: "Product Added",
        duration: 4000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #1DC39A, #1DC39A)",
        },
        onClick: function () {}, // Callback after click
    }).showToast();
}

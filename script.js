document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");
    const containers = document.querySelectorAll(".photo-container");

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            containers[index].classList.toggle("show");
        });
    });
});

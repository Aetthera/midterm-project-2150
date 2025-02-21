document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-primary");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Product added to cart!");
        });
    });
});
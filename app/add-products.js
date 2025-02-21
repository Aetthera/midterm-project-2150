import './add-products.scss';

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addProductForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const title = document.getElementById("productTitle").value.trim();
        const description = document.getElementById("productDescription").value.trim();
        const price = document.getElementById("productPrice").value;
        const quantity = document.getElementById("productQuantity").value;

        if (!title || !description || !price || !quantity) {
            alert("All fields must be filled!");
            return;
        }

        alert("Product added successfully!");
        this.reset();
    });
});

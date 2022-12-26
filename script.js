const largeImage = document.querySelector(".img-large img");
const productImages = document.querySelectorAll(".img-small img");

console.log(productImages.length);

productImages.forEach((image) => {
    image.addEventListener("click", (e) => {
        let src = e.target.getAttribute("src");

        largeImage.src = src;
    })
})
const images = {  
    
   image: ["images/alice.jpg", "images/basketball.JPG", "images/butterfly.JPG", "images/colour.JPG", "images/david.JPG", "images/dope.JPG", "images/fire.JPG", "images/friday.JPG", "images/link.jpg", "images/lion.jpg", "images/rose.JPG", "images/skull.JPG"  ],
    alt: ["alice in wonderland", "basketball", "bufferfly and skull", "colour", "david attenbourgh", "dope", "fire", "friday the 13th", "link", "lion", "rose", "skull"]

};

console.log(images.image.length);

const back = document.getElementById("back");
const next = document.getElementById("next");
const image = document.getElementById("image");

let pageNumber = 1;

image.setAttribute("src", images.image[pageNumber - 1]); image.setAttribute("alt", images.alt[pageNumber - 1]);

next.addEventListener("click", () => {
    pageNumber++;
    image.setAttribute("src", images.image[pageNumber - 1]); image.setAttribute("alt", images.alt[pageNumber - 1]);
    if ( pageNumber > 11 ) {
        pageNumber = 0; 
    }
}); 

back.addEventListener("click", () => {
    pageNumber--;
    image.setAttribute("src", images.image[pageNumber + 1]); image.setAttribute("alt", images.alt[pageNumber + 1]);
    if ( pageNumber < 0 ) {
        pageNumber = 11; 
    }
});

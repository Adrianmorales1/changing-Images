var aniimalImage = document.querySelector("#catcat");

console.log(aniimalImage); //this is grabbing the img 

function pickCat() {
    aniimalImage.src ="CAT.png"; //changing image just by calling the file. with "src" at the end of animalImage
}

function pickDog() {
    aniimalImage.src ="DOG.png";
}
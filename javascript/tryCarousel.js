let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(indiceImg) {
    showDivs(slideIndex += indiceImg);
}

function showDivs(indiceImg) {
    let i;
    let classMySlides = document.getElementsByClassName("mySlides");
    if (indiceImg > classMySlides.length) { slideIndex = 1 }
    if (indiceImg < 1) { slideIndex = classMySlides.length };
    for (i = 0; i < classMySlides.length; i++) {
        classMySlides[i].style.display = "none";
    }
    classMySlides[slideIndex - 1].style.display = "block";
    console.log(indiceImg);
    console.log(slideIndex);
    console.log(classMySlides);
    console.log(classMySlides.length);
}
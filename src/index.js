console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
}
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("event - click on", anchors[i]);
        ShowDetails();
        setDetails(anchors[i]);
    })
}
function ShowDetails() {
    mainClass.classList.remove(HIDDEN);
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
}
console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitale = document.querySelector(".details-titale");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
function setDetails(anchor) {
    detailsImage.setAttribute("src",anchor.getAttribute("data-details-image"));
    detailsTitale.innerHTML = anchor.getAttribute("data-details-title");
}
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("event - click on ", anchors[i]);
        setDetails(anchors[i]);
        showDetails();
    })
}
function showDetails() {
    mainClass.classList.remove(HIDDEN);
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
}
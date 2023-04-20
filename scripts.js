const gallery = (function () {
const GALLERY = document.querySelector(".gallery__container")
const FOCUSED_IMAGE = document.createElement("img")
FOCUSED_IMAGE.classList.add("gallery__focusedImage")

const THUMBNAILS = document.createElement("div")
THUMBNAILS.classList.add("gallery__thumbnails")


function buildThumbnail (image) {
    const BUTTON = document.createElement("button")
    BUTTON.addEventListener("mouseover", changeFocus)
    BUTTON.innerHTML = `<img src="${image}" alt="galleri miniature" class="gallery__thumbnail">`
    BUTTON.classList.add("gallery__button")
    THUMBNAILS.append(BUTTON)
}

function changeFocus (event) {
    if(event.target.className == "gallery__thumbnail"){
        FOCUSED_IMAGE.src = event.target.src
    }
    
}
// gallery__thumbnails 
// gallery__tumbnail


function init(images= []){
    FOCUSED_IMAGE.src = images[0]
    images.forEach(buildThumbnail)  //adds thumbnail into div
    GALLERY.append(FOCUSED_IMAGE, THUMBNAILS)

}

return {
    init
}

} )() 
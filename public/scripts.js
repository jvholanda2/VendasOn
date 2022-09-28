const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoID = card.getAttribute("id")
        //modalOverlay.classList.add('active')
        window.location.href = `/video?id=${videoID}`
        //modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`
    })
}


// const closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
//     modalOverlay.classList.remove('active')
//     modalOverlay.querySelector("iframe").src = ""

// })


let darkmode = localStorage.getItem("darkmode");
let themeSwitch= document.getElementById("switch-theme");
const enableDarkmode= () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode","active");
}

const disableDarkmode= () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", null);
}

if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", ()=>{
    darkmode =localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

/---------------search--------------/
let searchInput = document.querySelector(".search");
let cards = document.querySelectorAll(".featured .card, .featured .category-section");

searchInput.addEventListener("keyup", function () {
    let value = this.value.toLowerCase().trim();

    cards.forEach(card => {
        let bookName = card.querySelector(".book-name")?.textContent.toLowerCase() || "";
        let authorName = card.querySelector(".author-name")?.textContent.toLowerCase() || "";
        let publisherName = card.querySelector(".publishers-name")?.textContent.toLowerCase() || "";
        let publishers = card.querySelector(".publisher")?.textContent.toLowerCase() || "";
        let books = card.querySelector(".book-info")?.textContent.toLowerCase() || ""  ;
        let category = card.querySelector(".category")?.textContent.toLowerCase() || ""  ;

        if (
            bookName.includes(value) ||
            authorName.includes(value) ||
            publisherName.includes(value) ||
            publishers.includes(value) ||
            books.includes(value)   ||
            category.includes(value)
        ) { 
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

/--------------login------------/

function login (){
    window.location.href="login.html";
}


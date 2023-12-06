// Меню з мовами
const current_language = document.querySelector("header .language .current");
const list_language = document.querySelector("header .language .menu");

current_language.addEventListener("click", (event) => {
    current_language.classList.toggle("current_click");
    list_language.classList.toggle("show_language");
});

document.body.addEventListener("click", (event) => {
    if (!event.target.closest(".language")) {
        current_language.classList.remove("current_click");
        list_language.classList.remove("show_language");
    }
});

// Мобільне головне меню

const burger_btn_show = document.querySelector("header .burger .show");
const burger_btn_hide = document.querySelector("header .burger .menu .header .close")
const burger_menu = document.querySelector("header .burger .menu");

burger_btn_show.addEventListener("click", (event) => {
    burger_menu.classList.add("show_burger_menu");
})

burger_btn_hide.addEventListener("click", (event) => {
    burger_menu.classList.remove("show_burger_menu");
});

// Пошук в Our Locations

const input_search = document.querySelector("main .locations .content_locations .search label");

input_search.addEventListener("click", (event) => {
    input_search.classList.add("active_search");
})

document.body.addEventListener("click", (event) => {
    if (!event.target.closest(".search label")) {
        input_search.classList.remove("active_search");
    }
});

// Акордіон

const acordion_btns = document.querySelectorAll("main .faq .content_faq .question .button div");
const acordion_ansvers = document.querySelectorAll("main .faq .content_faq .question");

acordion_btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (!btn.parentElement.parentElement.classList.contains("show_answer")) {
            acordion_ansvers.forEach(ansver => {
                ansver.classList.remove("show_answer")
            });
        }
        btn.parentElement.parentElement.classList.toggle("show_answer")
    })
})

// Модальне вікно

const modal = document.querySelector(".modal");
const btn_show_modal = document.querySelector("main .partners .franchise");
const btn_hide_modal = document.querySelector(".modal form .actions .back");
const cross_hide_modal = document.querySelectorAll(".modal .cross");

const btn_next_modal = document.querySelector(".modal form .actions .send");

btn_show_modal.addEventListener("click", () => {
    modal.classList.add("show_modal");
})

function hide_modal() {
    modal.classList.remove("show_modal", "show_step_two");
}

btn_hide_modal.addEventListener("click", hide_modal);

cross_hide_modal.forEach((item) => {
    item.addEventListener("click", hide_modal);
})

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        hide_modal();
    }
});

btn_next_modal.addEventListener("click", () => {
    modal.classList.add("show_step_two");
})

// Таби в Price

const tab_btns = document.querySelectorAll(".price .tabs_button .button");
const tab_contents = document.querySelectorAll(".price .main_price .tab_content");

tab_btns.forEach((btn, i) => {
    btn.addEventListener("click", (event) => {
        tab_btns.forEach(item => item.classList.remove("active"));
        btn.classList.add("active");

        tab_contents.forEach(item => item.classList.remove("active_tab"));
        tab_contents[i].classList.add("active_tab");
    })
})

// слайдер 
let currentIndex = 0;
const slideTexts = [
    "To have my shoes cleaned and restored. The results were truly outstanding! Not only do my shoes look brand new, but the level of customer service was impeccable.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "To have my shoes cleaned and restored. The results were truly outstanding! Not only do my shoes look brand new, but the level of customer service was impeccable.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",

];

function showSlide(index) {
    const ribbon = document.querySelector('.ribbon');
    const totalSlides = slideTexts.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const translation = -currentIndex * 100 + '%';
    ribbon.style.transform = 'translateX(' + translation + ')';
    updateNavCircles();
    updateSlideText();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateNavCircles() {
    const navCircles = document.querySelectorAll('.nav_circle div');
    navCircles.forEach((circle, index) => {
        circle.classList.toggle('active_circle', index === currentIndex);
    });
}

function updateSlideText() {
    const ribbon = document.querySelector('.ribbon p');
    ribbon.textContent = slideTexts[currentIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentIndex);
});

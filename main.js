const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
});

const dinnerMenus = [
    { name: "김치찌개", imageUrl: "images/kimchi.jpg" },
    { name: "된장찌개", imageUrl: "images/doenjang.jpg" },
    { name: "삼겹살", imageUrl: "images/samgyeopsal.jpg" },
    { name: "치킨", imageUrl: "images/chicken.jpg" },
    { name: "피자", imageUrl: "images/pizza.jpg" },
    { name: "초밥", imageUrl: "images/sushi.jpg" },
    { name: "파스타", imageUrl: "images/pasta.jpg" },
    { name: "떡볶이", imageUrl: "images/tteokbokki.jpg" },
    { name: "부대찌개", imageUrl: "images/budae.jpg" },
    { name: "곱창", imageUrl: "images/gopchang.jpg" }
];

const recommendBtn = document.getElementById('recommend-btn');
const menuDisplay = document.getElementById('menu-display');
const menuImage = document.getElementById('menu-image');

recommendBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    menuDisplay.textContent = `오늘 저녁은 ${selectedMenu.name} 어떠세요?`;
    menuImage.src = selectedMenu.imageUrl;
    menuImage.style.display = 'block';
});

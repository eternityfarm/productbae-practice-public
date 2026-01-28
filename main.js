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
    { name: "김치찌개", imageUrl: "https://picsum.photos/seed/kimchi/400/300" },
    { name: "된장찌개", imageUrl: "https://picsum.photos/seed/doenjang/400/300" },
    { name: "삼겹살", imageUrl: "https://picsum.photos/seed/samgyeopsal/400/300" },
    { name: "치킨", imageUrl: "https://picsum.photos/seed/chicken/400/300" },
    { name: "피자", imageUrl: "https://picsum.photos/seed/pizza/400/300" },
    { name: "초밥", imageUrl: "https://picsum.photos/seed/sushi/400/300" },
    { name: "파스타", imageUrl: "https://picsum.photos/seed/pasta/400/300" },
    { name: "떡볶이", imageUrl: "https://picsum.photos/seed/tteokbokki/400/300" },
    { name: "부대찌개", imageUrl: "https://picsum.photos/seed/budae/400/300" },
    { name: "곱창", imageUrl: "https://picsum.photos/seed/gopchang/400/300" }
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

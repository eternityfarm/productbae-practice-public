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
    "김치찌개",
    "된장찌개",
    "삼겹살",
    "치킨",
    "피자",
    "초밥",
    "파스타",
    "떡볶이",
    "부대찌개",
    "곱창"
];

const recommendBtn = document.getElementById('recommend-btn');
const menuDisplay = document.getElementById('menu-display');

recommendBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    menuDisplay.textContent = `오늘 저녁은 ${selectedMenu} 어떠세요?`;
});

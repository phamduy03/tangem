const texts = [
    "I love you ❤️", "You're amazing 💖", "Thank you for being my everything 💘",
    "There is no other 💞", "You are my sunshine ☀️", "You are my universe 🌌",
    "I love you so much! 💗", "Honey bunch, you are my everything! 💓",
    "Our Anniversary 💝", "You make my heart smile 💘"
];

function createText() {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.className = "falling-text";
    div.style.left = (3.7 + Math.random() * 92.6) + "vw";
    div.style.animationDuration = 3 + Math.random() * 3 + "s";
    div.textContent = texts[Math.floor(Math.random() * texts.length)];
    container.appendChild(div);
    setTimeout(() => container.removeChild(div), 8000);
}
setInterval(createText, 300);  // nhanh hơn

// Ảnh rơi
function createFallingPhoto() {
    const container = document.getElementById("container");
    const img = document.createElement("img");
    img.src = "anhdoi.jpg";
    img.className = "falling-image";
    img.style.left = (3.7 + Math.random() * 92.6) + "vw";
    img.style.animationDuration = 4 + Math.random() * 3 + "s";
    container.appendChild(img);
    setTimeout(() => container.removeChild(img), 8000);
}
setInterval(createFallingPhoto, 1500); // nhanh hơn

// Ngày kỷ niệm
function createAnniversaryText() {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.className = "falling-text";
    div.textContent = "28/09/2024 💝";
    div.style.left = (3.7 + Math.random() * 92.6) + "vw";
    div.style.animationDuration = 4 + Math.random() * 4 + "s";
    container.appendChild(div);
    setTimeout(() => container.removeChild(div), 8000);
}
setInterval(createAnniversaryText, 2000);

// Sao nền
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
        }
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// Sao glow phía trước
function createStarGlow() {
    const container = document.getElementById("container");
    const star = document.createElement("div");
    star.className = "star-glow";
    star.style.left = (3.7 + Math.random() * 92.6) + "vw";
    star.style.top = Math.random() * 100 + "vh";
    container.appendChild(star);
    setTimeout(() => container.removeChild(star), 4000);
}

// Icon ♥ 💖 💕 💗 rơi
function createFallingIcon() {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.className = "falling-icon";
    const icons = ["♥", "💖", "💕", "💗"];
    div.textContent = icons[Math.floor(Math.random() * icons.length)];
    div.style.left = (3.7 + Math.random() * 92.6) + "vw";
    div.style.animationDuration = (5 + Math.random() * 3) + "s";
    container.appendChild(div);
    setTimeout(() => container.removeChild(div), 8000);
}
setInterval(createFallingIcon, 700);

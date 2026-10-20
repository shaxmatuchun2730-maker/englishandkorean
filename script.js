// Telegram WebApp obyektini ishga tushiramiz
const tg = window.Telegram.WebApp;

// Mini App ochilganda Telegram interfeysini sozlash
tg.expand(); // Ilovani to'liq ekranga yozish

// O'quvchining Telegram ismini aniqlash va joylashtirish
const usernameEl = document.getElementById('username');
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    usernameEl.innerText = tg.initDataUnsafe.user.first_name;
} else {
    usernameEl.innerText = "Mehmon"; // Agar brauzerda ochilsa
}

// 4 ta katak bosilganda ishlaydigan funksiya (Hozircha test rejimi)
function openSection(sectionName) {
    alert(sectionName + " bo'limi muvaffaqiyatli ochildi! Yaqinda bu yerda to'liq darslar chiqadi.");
}

// IELTS / TOPIK bosilganda chiqadigan "Trailer" bildirishnomasi
function openTrailer() {
    tg.showPopup({
        title: '📈 IELTS / TOPIK Prep',
        message: 'Ushbu bo\'lim hozirda tayyorlanmoqda! Yaqin kunlardagi yangilanishda albatta chiqadi. 🚀',
        buttons: [{type: 'ok'}]
    });
}


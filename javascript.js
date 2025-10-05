// 1. текущая дата
const currentDate = new Date();

// 2. получить текущий год
const currentYear = currentDate.getFullYear();

// 3. дата 9 мая текущего года
const may9ThisYear = new Date(currentYear, 4, 9);

// 4. проверить, прошло ли уже 9 мая
const isAfterMay9 = currentDate > may9ThisYear;

// 5. определить целевую дату
const targetDate = isAfterMay9 
    ? new Date(currentYear + 1, 4, 9)  // следующий год
    : may9ThisYear;                   // этот год

// проверить, сегодня ли 9 мая
const isTodayMay9 = 
    currentDate.getDate() === 9 && 
    currentDate.getMonth() === 4; 


function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate.getTime() - now;


    if (isTodayMay9) {
        document.getElementById("timer").innerHTML = "<span>Поздравляем с Днём Победы!</span>";
        clearInterval(countdownInterval);
        return;
    }

    //обычный отсчёт
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
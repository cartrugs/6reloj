// Variables

// Days
const clock = () => {
    const date = new Date();
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weekDay = week[date.getDay()];

    document.getElementById('day').textContent = `Today is ${weekDay}`;

    // Hours
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = ('0' + minutes).slice(-2);
    // seconds = ('0' + minutes).slice(-2)

// Time
    document.getElementById('time').textContent =`${hours}:${minutes}`;
}

setInterval(clock, 1000);
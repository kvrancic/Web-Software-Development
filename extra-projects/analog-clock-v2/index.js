const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');

console.log(hours);

function update(){
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes() + s / 60;
    const h = (date.getHours() % 12 + m / 60);

    const sDeg = s / 60 * 360; 
    const mDeg = m / 60 * 360;
    const hDeg = h / 12 * 360;

    seconds.style.transform = `rotate(${sDeg}deg)`;
    minutes.style.transform = `rotate(${mDeg}deg)`;
    hours.style.transform = `rotate(${hDeg}deg)`;

    setTimeout(update, 1000);
}; 

update(); 
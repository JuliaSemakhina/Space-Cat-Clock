const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const starHand = document.querySelector('.star');
const eyeBall = document.querySelectorAll('.eyeball');


function setDate() {
  const date = new Date;
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hours = date.getHours();


  const secondsDegrees = (sec*6) + 90;
  const minDegrees = (min*6) + 90;
  const hoursDegrees = (hours*30) + 90;

  if(secondsDegrees === 360) {
    secHand.style.transition = 'none';
    starHand.style.transition = 'none';
  }

  if(minDegrees === 360) {
    minHand.style.transition = 'none';
  }

  if(hoursDegrees === 360) {
    hourHand.style.transition = 'none';
  }

  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  starHand.style.transform = `rotate(${secondsDegrees}deg) translateX(-28rem) `;
  eyeBall.forEach(ball=> {
    ball.style.transform = `rotate(${secondsDegrees}deg) translateX(-2rem) `;
  }
    );
};

setInterval(setDate, 1000);


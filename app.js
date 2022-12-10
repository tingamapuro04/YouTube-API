const displayer = (kk) => {
  console.log(kk);
};

const calculator = (num1, num2, secondFunc) => {
  const product = num1 * num2;
  secondFunc(product);
};

const sayHello = () => {
  let date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let time = `The time now is ${hour}:${minutes}:${seconds}`
  if (hour >= 12 && hour <= 23) {
    time = time.concat('PM');
  } else {
    time = time.concat('AM');
  }
  document.querySelector('body').textContent = time;
};

setInterval(sayHello, 1000);

const myNumbers = [4, 1, -20, -7, 5, 9, -6, 10];
const newL = myNumbers.filter((item) => item >= 0);
console.log(myNumbers);

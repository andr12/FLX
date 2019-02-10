function formatTime(n)  {
if (n<0) {
console.log("Valid input should be greater than or equal to 0 ");
}
  let num=n;
  let days= (num/1440);
  let rndDay = Math.floor(days);
  let hr = (num % (1440)) / 60;
  let rndHr = Math.floor(hr);
  let min = (num % (1440)) % 60;
  let rndMin = Math.floor(min);
  return rndDay + " day(s) " + rndHr + " hour(s) " + rndMin + " minute(s)";
}

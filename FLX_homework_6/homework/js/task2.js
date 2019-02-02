let price_without = parseFloat(prompt('Enter amount of money '));
let discount = parseFloat(prompt('Enter discount'));
let saved = price_without * discount / 100;
let price_whith = price_without - saved;


if (price_without < 0 || discount > 100 || isNaN(price_without, discount) ) {
  console.log('Invalid data');
} else {
  console.log('Price without discount: ' + price_without);
  console.log('Discount: '+ discount + '%');
  console.log('Price with discount: ' + price_whith);
  console.log('Saved: ' + saved);
}

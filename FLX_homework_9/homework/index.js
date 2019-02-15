//#1
function findType(someType) {
	return typeof someType;
}
//#2
let forEach = (array, fn) => {
	for (let i = 0; i < array.length; i++) {
		fn(array[i]);
	}
}
//#3
function mapArray(array, fn) {
	let newArray = [];
	forEach(array, function (el) {
		newArray.push(fn(el));
	});
	return newArray;
}
//#4
function filterArray(array, fn) {
	let newArray = [];
	forEach(array, function (el) {
		if (fn(el)) {
			newArray.push(el);
		}
	});
	return newArray;
  }
//#5
const usersData = [{
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

  function getAdultAppleLovers(data) {
  	let filterAllPerson = filter(data, function (person) {
  		return person.age > 18 && person.favoriteFruit === 'apple';
  	});
  	return map(filterAllPerson, function (person) {
  		return person.name;
  	});
  }
//#6
const usersData = [{
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

function getGreenAdultBananaLovers(data) {
    let filterAllPerson = filter(data, function (person) {
        return person.age > 18 && person.favoriteFruit === 'banana' && person.eyeColor === 'green';
    });
    return map(filterAllPerson, function (person) {
  		return person.name;
    });
  }
//#7
  function keys(obj) {
  	let arrayKeys = [];
  	for (let key in obj) {
  		if (obj.hasOwnProperty(key)) {
  			arrayKeys.push(key);
  		}
  	}
  	return arrayKeys;
  }
//#8
 function values(obj) {
	let arrayValues = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arrayValues.push(obj[key]);
		}
	}
	return arrayValues;

//#9
let showFormattedDate = date => {
	let monthNameShortVersion = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `Date: ${date.getDate()} of ${monthNameShortVersion[date.getMonth()]}, ${date.getFullYear()}`;
}
//#10
function isEvenYear(date) {
    let enterDate = date;
    let year = enterDate.getFullYear();
    let evenOrOdd = year % 2 === 0;
    return evenOrOdd;
}
//#11
function isEvenMonth(date) {
    let enterDate = date;
    let month = enterDate.getMonth() + 1;
    let evenOrOdd = month % 2 === 0;
    return evenOrOdd;
}

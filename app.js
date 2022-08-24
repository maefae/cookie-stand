'use strict';

let storeHours = ["6am", "7am", '8am', '9am', '10am', "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function Store (location, minCustomerPerHour, maxCustomerPerHour, avgCookiePerCustomer) {
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  this.display();
}

Store.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
};

Store.prototype.getCookiePerHour = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let customerPerHour = this.getRandomCustomers();
    let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
    this.cookiesPerHour.push(totalCookiesSold); //push into array
    this.totalDailyCookies += totalCookiesSold;
  }
};

Store.prototype.display = function () {
  this.getCookiePerHour();
  let tableBody = document.getElementById('data');
  let tr = document.createElement('tr');
  tableBody.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.location;
  tr.appendChild(th);

  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.totalDailyCookies;
  tr.appendChild(td);
};


let headRow = function () {
  let tableBody = document.getElementById('data');
  let thead = document.createElement('thead');
  tableBody.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    td.textContent = storeHours[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = ('Total');
  tr.appendChild(td);
};

headRow();

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


// let seattle = {
//   location:'Seattle',
//   minCustomerPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiePerCustomer: 6.3,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
// },

// //for loop within a function that iterates storeHours array. Random number between min and max multiply it by average and push it into an array for hourly sales
//   getCookiePerHour: function () {
//     for (let i = 0; i < storeHours.length; i++)
//     // for (let i = 0; i < 14;i++)
//     {
//       let customerPerHour = this.getRandomCustomers();
//       let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
//       this.cookiesPerHour.push(totalCookiesSold); //push into array
//       this.totalDailyCookies += totalCookiesSold;
//       console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
//       console.log(this.cookiesPerHour);
//     }

// // return Math.floor(Math.random() * max);

// },

//   display: function () {
//     this.getCookiePerHour();
//     let displaySeattle = document.getElementById(this.location);
//     for (let i = 0; i < storeHours.length; i++) {
//       let entry = document.createElement('li');
//       entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       displaySeattle.appendChild(entry);

//     }
//     let total = document.createElement('li');
//     total.textContent = `Total: ${this.totalDailyCookies} cookies`;
//     displaySeattle.appendChild(total);
//   }
// };


// let tokyo = {
//   location: 'Tokyo',
//   minCustomerPerHour: 3,
//   maxCustomerPerHour: 24,
//   avgCookiePerCustomer: 1.2,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
//   },

//   getCookiePerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let customerPerHour = this.getRandomCustomers();
//       let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
//       this.cookiesPerHour.push(totalCookiesSold); //push into array
//       this.totalDailyCookies += totalCookiesSold;
//       console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
//       console.log(this.cookiesPerHour);
//     }
//   },

//   display: function () {
//     this.getCookiePerHour();
//     let displayTokyo = document.getElementById(this.location);
//     for (let i = 0; i < storeHours.length; i++) {
//       let entry = document.createElement('li');
//       entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       displayTokyo.appendChild(entry);

//     }
//     let total = document.createElement('li');
//     total.textContent = `Total: ${this.totalDailyCookies} cookies`;
//     displayTokyo.appendChild(total);
// }
// };


// let dubai = {
//   location: 'Dubai',
//   minCustomerPerHour: 11,
//   maxCustomerPerHour: 38,
//   avgCookiePerCustomer: 3.7,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
// },

// getCookiePerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let customerPerHour = this.getRandomCustomers();
//       let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
//       this.cookiesPerHour.push(totalCookiesSold); //push into array
//       this.totalDailyCookies += totalCookiesSold;
//       console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
//       console.log(this.cookiesPerHour);
//     }
// },

//   display: function () {
//     this.getCookiePerHour();
//     let displayDubai = document.getElementById(this.location);
//     for (let i = 0; i < storeHours.length; i++) {
//       let entry = document.createElement('li');
//       entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       displayDubai.appendChild(entry);

//     }
//     let total = document.createElement('li');
//     total.textContent = `Total: ${this.totalDailyCookies} cookies`;
//     displayDubai.appendChild(total);
// }
// };


// let paris = {
//   location: 'Paris',
//   minCustomerPerHour: 20,
//   maxCustomerPerHour: 38,
//   avgCookiePerCustomer: 2.3,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
// },

//   getCookiePerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let customerPerHour = this.getRandomCustomers();
//       let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
//       this.cookiesPerHour.push(totalCookiesSold); //push into array
//       this.totalDailyCookies += totalCookiesSold;
//       console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
//       console.log(this.cookiesPerHour);
//     }
// },

//   display: function () {
//     this.getCookiePerHour();
//     let displayParis = document.getElementById(this.location);
//     for (let i = 0; i < storeHours.length; i++) {
//       let entry = document.createElement('li');
//       entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       displayParis.appendChild(entry);

//     }
//     let total = document.createElement('li');
//     total.textContent = `Total: ${this.totalDailyCookies} cookies`;
//     displayParis.appendChild(total);
// }
// };


// let lima = {
//   location: 'Lima',
//   minCustomerPerHour: 2,
//   maxCustomerPerHour: 16,
//   avgCookiePerCustomer: 4.6,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
// },

//   getCookiePerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let customerPerHour = this.getRandomCustomers();
//       let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
//       this.cookiesPerHour.push(totalCookiesSold); //push into array
//       this.totalDailyCookies += totalCookiesSold;
//       console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
//       console.log(this.cookiesPerHour);
//     }
// },

//   display: function () {
//     this.getCookiePerHour();
//     let displayLima = document.getElementById(this.location);
//     for (let i = 0; i < storeHours.length; i++) {
//       let entry = document.createElement('li');
//       entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       displayLima.appendChild(entry);

//     }
//     let total = document.createElement('li');
//     total.textContent = `Total: ${this.totalDailyCookies} cookies`;
//     displayLima.appendChild(total);
// }
// };

// seattle.display();
// tokyo.display();
// dubai.display();
// paris.display();
// lima.display();


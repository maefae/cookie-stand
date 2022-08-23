'use strict';

let storeHours = ["6am", "7am", '8am', '9am', '10am', "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

let seattle = {
  location:'Seattle',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiePerCustomer: 6.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
},

//for loop within a function that iterates storeHours array. Random number between min and max multiply it by average and push it into an array for hourly sales
getCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++)
    // for (let i = 0; i < 14;i++)
    {
      let customerPerHour = this.getRandomCustomers();
      let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
      this.cookiesPerHour.push(totalCookiesSold); //push into array
      this.totalDailyCookies += totalCookiesSold;
      console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }

// return Math.floor(Math.random() * max);

},

  display: function () {
    this.getCookiePerHour();
    let displaySeattle = document.getElementById(this.location);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displaySeattle.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displaySeattle.appendChild(total);
}
};


let tokyo = {
  location: 'Tokyo',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiePerCustomer: 1.2,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
},

  getCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customerPerHour = this.getRandomCustomers();
      let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
      this.cookiesPerHour.push(totalCookiesSold); //push into array
      this.totalDailyCookies += totalCookiesSold;
      console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
},

  display: function () {
    this.getCookiePerHour();
    let displayTokyo = document.getElementById(this.location);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayTokyo.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayTokyo.appendChild(total);
}
};


let dubai = {
  location: 'Dubai',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiePerCustomer: 3.7,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
},

getCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customerPerHour = this.getRandomCustomers();
      let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
      this.cookiesPerHour.push(totalCookiesSold); //push into array
      this.totalDailyCookies += totalCookiesSold;
      console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
},

  display: function () {
    this.getCookiePerHour();
    let displayDubai = document.getElementById(this.location);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayDubai.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayDubai.appendChild(total);
}
};


let paris = {
  location: 'Paris',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiePerCustomer: 2.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
},

getCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customerPerHour = this.getRandomCustomers();
      let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
      this.cookiesPerHour.push(totalCookiesSold); //push into array
      this.totalDailyCookies += totalCookiesSold;
      console.log(`The ${this.location} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
},

display: function () {
    this.getCookiePerHour();
    let displayParis = document.getElementById(this.location);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayParis.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayParis.appendChild(total);
}
};


let lima = {
location: 'Lima',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiePerCustomer: 4.6,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
},

getCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customerPerHour = this.getRandomCustomers();
      let totalCookiesSold = Math.ceil(customerPerHour * this.avgCookiePerCustomer);
      this.cookiesPerHour.push(totalCookiesSold); //push into array
      this.totalDailyCookies += totalCookiesSold;
      console.log(`The ${this.name} store had ${customerPerHour} customers during this hour and sold a total of ${totalCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
},

  display: function () {
    this.geteCookiePerHour();
    let displayLima = document.getElementById(this.location);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayLima.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayLima.appendChild(total);
}
};

seattle.display();
tokyo.display();
dubai.display();
paris.display();
lima.display();


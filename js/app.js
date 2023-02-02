'use strict';

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

function storeHours() {
    let hoursTable = document.querySelector('table');
    let thead = document.createElement('thead');
    let th = document.createElement('th');
    let tr = document.createElement('tr');
    tr.appendChild(th);
    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        td.textContent = hours[i];
        tr.appendChild(td);
    }
    let td = document.createElement('td');
    td.textContent = 'Daily Location Total';
    tr.appendChild(td);
    thead.appendChild(tr);
    hoursTable.appendChild(thead);
};

storeHours();

function StoreSales(name, min, max, avg, salesByHourArray, dailyTotal) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesByHourArray = salesByHourArray;
    this.dailyTotal = dailyTotal;
    this.calculateRandomNumberOfCustomers = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
    this.generateCookiesPerHour = function () {
        for (let i = 0; i < hours.length; i++) {
            let customers = this.calculateRandomNumberOfCustomers();
            let cookiesSoldThisHour = Math.round(customers * this.avg);
            this.salesByHourArray.push(cookiesSoldThisHour);
            this.dailyTotal += cookiesSoldThisHour;
        }
    };
    this.render = function () {
        this.generateCookiesPerHour();
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]} : ${this.salesByHourArray[i]} `;
        }
        let totalLiElement = document.createElement('li');
        totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    };
};

StoreSales.prototype.renderTable = function () {
    let storeTable = document.querySelector('table');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        td.textContent = this.salesByHourArray[i];
        tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = this.dailyTotal;
    tr.appendChild(td);
    tbody.appendChild(tr);
    storeTable.appendChild(tbody);
    tr.appendChild(td);
};


let seattle = new StoreSales('Seattle', 23, 65, 6.3, [], 0);
let tokyo = new StoreSales('Tokyo', 3, 24, 1.2, [], 0);
let dubai = new StoreSales('Dubai', 11, 38, 3.7, [], 0);
let paris = new StoreSales('Paris', 20, 38, 2.3, [], 0);
let lima = new StoreSales('Lima', 2, 16, 4.6, [], 0);

let storeArray = [seattle, tokyo, dubai, paris, lima];

seattle.render();
seattle.renderTable();
tokyo.render();
tokyo.renderTable();
dubai.render();
dubai.renderTable();
paris.render();
paris.renderTable();
lima.render();
lima.renderTable();

let cookiesPerHour = [];

function footer() {
    let footerTable = document.querySelector('table');
    let tfoot = document.createElement('tfoot');
    let th = document.createElement('th');
    th.textContent = 'Totals ';
    let tr = document.createElement('tr');
    tr.appendChild(th);
    let dailyGlobalTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let globalCookieSalesPerHour = 0;
        for (let j = 0; j < storeArray.length; j++) {
            globalCookieSalesPerHour += storeArray[j].salesByHourArray[i];
        }
        cookiesPerHour[i] = globalCookieSalesPerHour;
        dailyGlobalTotal += globalCookieSalesPerHour;
        let td = document.createElement('td');
        td.textContent = cookiesPerHour[i];
        tr.appendChild(td);
    }
    let td = document.createElement('td');
    td.textContent = dailyGlobalTotal;
    tr.appendChild(td);
    tfoot.appendChild(tr);
    footerTable.appendChild(tfoot);
};

footer();

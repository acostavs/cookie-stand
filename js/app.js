`use strict`;

let hours = [`6:00am:`, `7:00am:`, `8:00am:`, `9:00am:`, `10:00am:`,
    `11:00am:`, `12:00pm:`, `1:00pm:`, `2:00pm:`, `3:00pm:`, `4:00pm:`, `6:00pm:`, `7:00pm:`]

let storeTotal = []
let allStoreTotal = new Array(hours.length + 1).fill(0);
let table = document.getElementById("myTableId");
let body = document.createElement("tbody");
table.appendChild(body);

function Store(location, min, max, avgSales) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgSales = avgSales
    this.dailyStoreTotal = 0;
    this.cookiesSoldEachHourArray = [];
    this.totalCookiesPerDay = 0
    storeTotal.push(this)
    this.render()
    this.calculateTotal()
};

Store.prototype.getNumberOfRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
};
Store.prototype.calculateCookiesSoldPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        let numberOfCustomers = this.getNumberOfRandomCustomers()
        let salesThisHour = Math.round(numberOfCustomers * this.avgSales)
        this.cookiesSoldEachHourArray.push(salesThisHour)
        this.dailyStoreTotal += salesThisHour
    }

};
Store.prototype.render = function () {
    this.calculateCookiesSoldPerHour();
    let tr = document.createElement("tr")
    let th = document.createElement("td")
    th.textContent = `${this.location}: `
    tr.appendChild(th)

    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
        let td = document.createElement("td")
        td.textContent = this.cookiesSoldEachHourArray[i]
        tr.appendChild(td)
    }
    let td = document.createElement("td")
    td.textContent = this.dailyStoreTotal
    tr.appendChild(td);
    body.appendChild(tr);

};

function header() {
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.textContent = "Location"
    tr.appendChild(th)
    for (let i = 0; i < hours.length; i++) {
        let th = document.createElement("th");
        th.textContent = hours[i];
        tr.appendChild(th);
    }
    th = document.createElement("td")
    th.textContent = "Total"
    tr.appendChild(th)
    thead.appendChild(tr)
    table.appendChild(thead)
}

function footer() {
    let tfoot = document.createElement("tfoot")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.textContent = "Total"
    tr.appendChild(td)
    for (let i = 0; i < allStoreTotal.length; i++) {
        th = document.createElement("td");
        th.textContent = allStoreTotal[i];
        tr.appendChild(th);
    }
    tr.appendChild(th);
    tfoot.appendChild(tr);
    table.appendChild(tfoot);
};

Store.prototype.calculateTotal = function () {
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
        allStoreTotal[allStoreTotal.length - 1] += this.cookiesSoldEachHourArray[i];
        allStoreTotal[i] += this.cookiesSoldEachHourArray[i];
    }
}

Store.prototype.createTableBody = function () {
    let tableHead = document.getElementById("myHeadId")
    let tRowHead = document.createElement("tr")
    tRowHead.setAttribute("id", "myTableRowId")
    tableHead.appendChild(tRowHead)
    let td = document.createElement("td")
    td.textContent = ` `;
    tRowHead.appendChild(td)
    for (let i = 0; i < hours.length; i++) {
        let tHeadCell = document.createElement("td")
        tRowHead.appendChild(tHeadCell)
        tHeadCell.textContent = `${hours[i]}`
    }
}
Store.prototype.createTotalsRow = function () {
    let totalsRow = document.createElement(`tr`)
    let tableBody = document.getElementById(`myTBodyId`)
    let tCell = document.createElement(`td`)
    tCell.textContent = `Totals `
    tableBody.appendChild(totalsRow)
    totalsRow.appendChild(tCell)

    console.log(this.cookiesSoldEachHourArray)
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
        let tDCellTwo = document.createElement(`td`)
        tDCellTwo.textContent = this.cookiesSoldEachHourArray[i]
        totalsRow.appendChild(tDCellTwo)
    }
}


let seattle = new Store(`Seattle`, 23, 65, 6.3)
let tokyo = new Store(`Tokyo`, 3, 24, 1.2)
let dubai = new Store(`Dubai`, 11, 38, 3.7)
let paris = new Store(`Paris`, 20, 38, 2.3)
let lima = new Store(`Lima`, 2, 16, 4.6);
header();
footer();

function addStoreClickHandler(e) {
    e.preventDefault();
    let newLocationName = e.target.newLocation.value;
    // let conditionalCheck = e.target.newLocation
    // console.log(conditionalCheck)
    // conditionalCheck.setAttribute("id", "newStoreCheck")
    let newLocationMinCust = +e.target.minCust.value;
    let newLocationMaxCust = +e.target.maxCust.value;
    let newLocationAvgSales = +e.target.avgCookieSales.value;
    let newLocation = new Store(newLocationName, newLocationMinCust, newLocationMaxCust, newLocationAvgSales);
    return newLocation

};

let myForm = document.querySelector('form');
myForm.addEventListener("submit", addStoreClickHandler);

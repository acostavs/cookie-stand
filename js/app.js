`use strict`

let hours = [`6am:`, `7am:`, `8am:`, `9am:`, `10am:`,
    `11am:`, `12pm:`, `1pm:`, `2pm:`, `3pm:`, `4pm:`, `6pm:`, `7pm:`]

let seattleLoc = {
    location: `Seattle`,
    min: 23,
    max: 65,
    avgSales: 6.3,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getNumberOfRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
    },
    calculateCookiesSoldPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let numberOfCustomers = this.getNumberOfRandomCustomers()
            let salesThisHour = Math.round(numberOfCustomers * this.avgSales)
            this.cookiesSoldEachHourArray.push(salesThisHour)
            this.dailyTotal += salesThisHour
        }
        console.log(this.cookiesSoldEachHourArray)
    },
    render: function () {
        this.calculateCookiesSoldPerHour()
        let container = document.getElementById(`seattle`)
        let myList = document.createElement(`ul`)
        container.appendChild(myList)
        for (let i = 0; i < hours.length; i++) {
            let myListItem = document.createElement(`li`)
            myList.appendChild(myListItem)
            myListItem.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]}`
        }
        let totalLi = document.createElement(`li`)
        totalLi.textContent = `Total: ${this.dailyTotal} cookies`
        myList.appendChild(totalLi)
    },
}
// console.log(seattleLoc.getNumberOfRandomCustomers())

seattleLoc.render()

let tokyoLoc = {
    location: `Tokyo`,
    min: 3,
    max: 24,
    avgSales: 1.2,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getNumberOfRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
    },
    calculateCookiesSoldPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let numberOfCustomers = this.getNumberOfRandomCustomers()
            let salesThisHour = Math.round(numberOfCustomers * this.avgSales)
            this.cookiesSoldEachHourArray.push(salesThisHour)
            this.dailyTotal += salesThisHour


        }
    },
    render: function () {
        this.calculateCookiesSoldPerHour()
        let container = document.getElementById(`seattle`)
        let myList = document.createElement(`ul`)
        container.appendChild(myList)
        for (let i = 0; i < hours.length; i++) {
            let myListItem = document.createElement(`li`)
            myList.appendChild(myListItem)
            myListItem.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]}`
        }
        let totalLi = document.createElement(`li`)
        totalLi.textContent = `Total: ${this.dailyTotal} cookies`
        myList.appendChild(totalLi)
    }
}

tokyoLoc.render()

let dubaiLoc = {
    location: `Dubai`,
    min: 11,
    max: 38,
    avgSales: 3.7,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getNumberOfRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
    },
    calculateCookiesSoldPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let numberOfCustomers = this.getNumberOfRandomCustomers()
            let salesThisHour = Math.round(numberOfCustomers * this.avgSales)
            this.cookiesSoldEachHourArray.push(salesThisHour)
            this.dailyTotal += salesThisHour
        }
    },
    render: function () {
        this.calculateCookiesSoldPerHour()
        let container = document.getElementById(`seattle`)
        let myList = document.createElement(`ul`)
        container.appendChild(myList)
        for (let i = 0; i < hours.length; i++) {
            let myListItem = document.createElement(`li`)
            myList.appendChild(myListItem)
            myListItem.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]}`
        }
        let totalLi = document.createElement(`li`)
        totalLi.textContent = `Total: ${this.dailyTotal} cookies`
        myList.appendChild(totalLi)
    }
}

dubaiLoc.render()

let parisLoc = {
    location: `Paris`,
    min: 20,
    max: 38,
    avgSales: 2.3,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getNumberOfRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
    },
    calculateCookiesSoldPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let numberOfCustomers = this.getNumberOfRandomCustomers()
            let salesThisHour = Math.round(numberOfCustomers * this.avgSales)
            this.cookiesSoldEachHourArray.push(salesThisHour)
            this.dailyTotal += salesThisHour
        }
    },
    render: function () {
        this.calculateCookiesSoldPerHour()
        let container = document.getElementById(`seattle`)
        let myList = document.createElement(`ul`)
        container.appendChild(myList)
        for (let i = 0; i < hours.length; i++) {
            let myListItem = document.createElement(`li`)
            myList.appendChild(myListItem)
            myListItem.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]}`
        }
        let totalLi = document.createElement(`li`)
        totalLi.textContent = `Total: ${this.dailyTotal} cookies`
        myList.appendChild(totalLi)
    }
}

parisLoc.render()

let limaLoc = {
    location: `Lima`,
    min: 2,
    max: 16,
    avgSales: 4.6,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,
    getNumberOfRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
    },
    calculateCookiesSoldPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let numberOfCustomers = this.getNumberOfRandomCustomers()
            let salesThisHour = Math.round(numberOfCustomers * this.avgSales)
            this.cookiesSoldEachHourArray.push(salesThisHour)
            this.dailyTotal += salesThisHour
        }
    },
    render: function () {
        this.calculateCookiesSoldPerHour()
        let container = document.getElementById(`seattle`)
        let myList = document.createElement(`ul`)
        container.appendChild(myList)
        for (let i = 0; i < hours.length; i++) {
            let myListItem = document.createElement(`li`)
            myList.appendChild(myListItem)
            myListItem.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]}`
        }
        let totalLi = document.createElement(`li`)
        totalLi.textContent = `Total: ${this.dailyTotal} cookies`
        myList.appendChild(totalLi)
    }
}

limaLoc.render()


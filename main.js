let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count +=1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// let username = "per"
// let notifications = "You have tree new notifications"
// console.log(notifications + " " + username + "!")
// let messageToUser = notifications + " " + username + "!"
// console.log(messageToUser)

// // let myName = "Humberto"
// // let greeting2 = "Hi, my name is "
// // let myGreeting  = greeting + myName
// // console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Humberto"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += "👋"

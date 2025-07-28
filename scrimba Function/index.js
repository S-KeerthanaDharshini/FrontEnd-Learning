const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greets ,name,emoji) {
    welcomeEl.textContent = `${greets} , ${name}  ${emoji}`
}

greetUser("Hallo!","keerthu","🙏")
function login (usernameInput, passwordInput) {
    const username = "Amos";
    const password = "12345";

    if (username === usernameInput && password === passwordInput) {
        return true;
    }

    return false;
}

console.log(login("Amos", "12345"));
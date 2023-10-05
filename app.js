document.addEventListener("DOMContentLoaded", (event) => {
    const passBox = document.querySelector(".password-box");
    const generateBtn = document.querySelector(".generator-btn");
    const chars ="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
    const passLength = 16;

    function generatePass() {
        let password = "";

        for (let i = 0; i < passLength; i++) 
            password += chars[Math.floor(Math.random() * chars.length)];
            return password;
    };

    generateBtn.addEventListener("click", () => {
        passBox.value = generatePass();
    });

    const passwordInput = document.querySelector('.password-box');

    passwordInput.addEventListener('click', function() {
        this.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('login-modal');
    const closeButton = document.querySelector('.close-button');
    const loginForm = document.getElementById('login-form');

    // List of users with pre-hashed passwords (hashed using SHA-256)
    const users = [
        { username: "user1", passwordHash: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad" }, // hash for "password"
        { username: "user2", passwordHash: "anotherHashedPassword" }
        // Add more users as needed
    ];

    closeButton.addEventListener('click', closeModal);

    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const hashedPassword = await hashPassword(password);

        const validUser = users.some(user => user.username === username && user.passwordHash === hashedPassword);

        if (validUser) {
            localStorage.setItem('loggedIn', 'true'); // Set a flag in localStorage
            closeModal();
            window.location.href = 'useless.html'; // Redirect to the useless page
        } else {
            alert('Incorrect Username or Password');
        }
    });

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Optionally, open the modal on page load for demonstration
    openModal();
});

document.addEventListener('DOMContentLoaded', function() {
    // ...existing JavaScript functionalities for services, gallery, etc...

    const modal = document.getElementById('login-modal');
    const closeButton = document.querySelector('.close-button');
    const loginForm = document.getElementById('login-form');

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeButton.addEventListener('click', closeModal);

    const correctUsername = 'admin';
    const correctPassword = 'abc';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === correctUsername && password === correctPassword) {
            alert('Login Successful!');
            closeModal();
        } else {
            alert('Incorrect Username or Password');
        }
    });

    // Optionally, open the modal on page load for demonstration
    openModal();
});

async function toggleMain() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const inputPassword = passwordInput.value;
    const correctPasswordHashUsr1 = '0affd72c1363633dc0349e3f6f8aeb92685863d220a642a03843a14453b49607';

    try {
        const inputPasswordHash = await sha256(inputPassword);

        if (username === 'bb' && inputPasswordHash === correctPasswordHashUsr1) {
            // Hide login section and show main section
            document.getElementById('login').style.display = 'none';
            document.getElementById('main').style.display = 'block';
            updateDaysTogether();
            generateMustDoList();
        } else {
            alert('Login failed. Please check your username and password.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred. Please try again later.');
    }
}

async function sha256(message) {
    // Encode the message as a Uint8Array
    const msgBuffer = new TextEncoder().encode(message);

    // Hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // Convert the ArrayBuffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

function updateDaysTogether() {
    const startDate = new Date('February 18, 2024');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.querySelector('#main .days-count').innerText = diffDays;
}

function generateMustDoList() {
    const list = document.getElementById('mustDoList');
    for (let i = 1; i <= 100; i++) {
        const item = document.createElement('div');
        item.className = 'must-do-item';
        if (i === 1) {
            item.textContent = "一起看电影";
            item.style.backgroundColor = "#ffcae9";
        // } else if (i === 3) {
        //     item.textContent = `Task #${i} (Done)`;
        //     item.style.backgroundColor = "#a29bfe";
            // item.style.textDecoration = "line-through";
        } else {
            item.textContent = `PlaceHolder #${i}`;
        }
        list.appendChild(item);
    }
}
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const email = urlParams.get('email');
const game = urlParams.get('game');

// Display data on the page
document.getElementById('displayName').textContent = name;
document.getElementById('displayEmail').textContent = email;
document.getElementById('displayGame').textContent = game;

// Store data in localStorage, sessionStorage, and cookies
localStorage.setItem('name', name);
sessionStorage.setItem('email', email);
document.cookie = `game=${encodeURIComponent(game)}`;
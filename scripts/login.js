document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const usuario = document.getElementById('username').value;
    const password = document.getElementById('password').value;

const response = await fetch('https://script.google.com/macros/s/AKfycbyhQI-T-F-NBEqIQQCoMBQDUMw_rlPKRn-1PNO68vjjtTNUv_GNssMYLhDmLYA4mBHJ/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, password }),
    mode: 'no-cors' // Agregar esta línea
});

    const result = await response.json();
    if (result.autorizado) {
        window.location.href = 'pages/dashboard.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

//Un poco de java script

// Toggle tema claro/oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    
    if (isDark) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggle.textContent = '☀️';
        // Cambiar color de la estrella
        document.getElementById('movingStar').src = 'https://via.placeholder.com/150/FFD700/000000?text=⭐';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.textContent = '🌙';
        // Volver al color original
        document.getElementById('movingStar').src = 'https://via.placeholder.com/150/4A90E2/FFFFFF?text=⭐';
    }
});

// Animación adicional al hacer hover en cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(255,255,255,0.25)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255,255,255,0.15)';
    });
});

// Contador de visitas (simulado)
let visits = localStorage.getItem('visits') || 0;
visits++;
localStorage.setItem('visits', visits);
console.log(`📊 Visitas totales: ${visits}`);
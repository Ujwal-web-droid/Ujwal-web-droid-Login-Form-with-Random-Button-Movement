document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const errorMessage = document.getElementById('errorMessage');
    const CORRECT_USERNAME = "Ujwal";
    const CORRECT_PASSWORD = "ujwal@123";
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
            // Correct credentials - button doesn't move
            errorMessage.style.display = 'none';
            alert('Login successful!');
            // Here you would typically redirect to another page
        } else {
            // Incorrect credentials - move button randomly
            errorMessage.style.display = 'block';
            moveButtonRandomly();
        }
    });
    
    function moveButtonRandomly() {
        // Get viewport dimensions
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        
        // Calculate random position within viewport
        const randomX = Math.floor(Math.random() * (vw - 100));
        const randomY = Math.floor(Math.random() * (vh - 50));
        
        // Position button absolutely and move it
        loginBtn.style.position = 'absolute';
        loginBtn.style.left = randomX + 'px';
        loginBtn.style.top = randomY + 'px';
        
        // Reset after a short delay to allow animation
        setTimeout(() => {
            loginBtn.style.transition = 'left 0.3s, top 0.3s';
        }, 10);
    }
});
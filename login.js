document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (email && password) {
            // Simulate API call
            loginBtn.textContent = 'Signing in...';
            loginBtn.style.opacity = '0.8';
            loginBtn.disabled = true;
            
            setTimeout(() => {
                loginBtn.textContent = 'Success!';
                loginBtn.style.backgroundColor = '#10b981'; // Success green
                loginBtn.style.boxShadow = '0 4px 14px 0 rgba(16, 185, 129, 0.39)';
                
                // Redirect simulation
                setTimeout(() => {
                    console.log('Redirecting to dashboard...');
                    // window.location.href = '/dashboard';
                    
                    // Reset for demo purposes
                    loginBtn.textContent = 'Sign In';
                    loginBtn.style.backgroundColor = '';
                    loginBtn.style.boxShadow = '';
                    loginBtn.style.opacity = '1';
                    loginBtn.disabled = false;
                    loginForm.reset();
                }, 1500);
            }, 1500);
        }
    });

    const googleLoginBtn = document.getElementById('googleLoginBtn');
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', () => {
            const originalContent = googleLoginBtn.innerHTML;
            googleLoginBtn.innerHTML = '<span class="spinner"></span> Connecting...';
            googleLoginBtn.style.opacity = '0.8';
            googleLoginBtn.disabled = true;

            setTimeout(() => {
                googleLoginBtn.innerHTML = 'Success!';
                googleLoginBtn.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                googleLoginBtn.style.borderColor = '#10b981';
                googleLoginBtn.style.color = '#10b981';
                
                // Redirect simulation
                setTimeout(() => {
                    console.log('Redirecting to dashboard from Google...');
                    // window.location.href = '/dashboard';
                    
                    // Reset for demo
                    googleLoginBtn.innerHTML = originalContent;
                    googleLoginBtn.style.backgroundColor = '';
                    googleLoginBtn.style.borderColor = '';
                    googleLoginBtn.style.color = '';
                    googleLoginBtn.style.opacity = '1';
                    googleLoginBtn.disabled = false;
                }, 1500);
            }, 1500);
        });
    }
});

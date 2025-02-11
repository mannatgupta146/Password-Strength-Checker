const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggle-btn');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.querySelector('.strength-text');

const checkPasswordStrength = (password) => {
    const strength = {
        score: 0,
        hasLower: /[a-z]/.test(password),
        hasUpper: /[A-Z]/.test(password),
        hasNumber: /\d/.test(password),
        hasSpecial: /[^A-Za-z0-9]/.test(password),
        length: password.length
    };

    let score = 0;
    if (strength.length >= 8) score++;
    if (strength.length >= 12) score++;
    if (strength.hasLower) score++;
    if (strength.hasUpper) score++;
    if (strength.hasNumber) score++;
    if (strength.hasSpecial) score++;

    return Math.min(score, 6);
};

const updateStrengthIndicator = (strength) => {
    const percentage = (strength / 6) * 100;
    let color = '#ef4444';  
    let text = 'Very Weak';

    if (strength >= 4) {
        color = '#22c55e';
        text = 'Strong';
    } else if (strength >= 2) {
        color = '#eab308';
        text = 'Medium';
    }

    strengthBar.style.setProperty('--strength-width', `${percentage}%`);
    strengthBar.style.setProperty('--strength-color', color);
    strengthText.textContent = text;
    strengthText.style.color = color;
};

passwordInput.addEventListener('input', (e) => {
    const password = e.target.value;
    const strength = checkPasswordStrength(password);
    updateStrengthIndicator(strength);
});

toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleBtn.querySelector('.eye-icon').classList.toggle('active', !isPassword);
});

updateStrengthIndicator(0);
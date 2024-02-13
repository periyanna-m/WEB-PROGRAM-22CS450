// Function to validate the login form
function validateLoginForm() {
    resetErrorStyles();

    var username = document.querySelector('.wrapper input[type="text"]').value;
    var password = document.querySelector('.wrapper input[type="password"]').value;

    if (username.trim() === '') {
        alert('Please enter your username.');
        document.querySelector('.wrapper input[type="text"]').classList.add('input-error');
        return false;
    }

    if (password.trim() === '') {
        alert('Please enter your password.');
        document.querySelector('.wrapper input[type="password"]').classList.add('input-error');
        return false;
    }
    // Additional validation checks can be added as needed
    // Function to validate the login form

    return true;
}

/*// Function to validate the registration form
function validateRegistrationForm() {
    resetErrorStyles();

    var nameInput = document.querySelector('#name');
    var emailInput = document.querySelector('#email');
    var passwordInput = document.querySelector('#password');
    var dobInput = document.querySelector('#dob');
    var phoneInput = document.querySelector('.phone-no input[type="text"]');
    var addressInput = document.querySelector('#address');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var dob = dobInput.value;
    var phone = phoneInput.value;
    var address = addressInput.value;

    if (name.trim() === '') {
        alert('Please enter your name.');
        nameInput.classList.add('input-error');
        return false;
    }

    if (email.trim() === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.classList.add('input-error');
        return false;
    }

    if (password.trim() === '') {
        alert('Please enter a password.');
        passwordInput.classList.add('input-error');
        return false;
    }

    if (dob.trim() === '') {
        alert('Please enter your date of birth.');
        dobInput.classList.add('input-error');
        return false;
    }

    if (phone.trim() === '') {
        alert('Please enter your phone number.');
        phoneInput.classList.add('input-error');
        return false;
    }

    if (address.trim() === '') {
        alert('Please enter your address.');
        addressInput.classList.add('input-error');
        return false;
    }

    // Additional validation checks can be added as needed

    return true;
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to reset error styles
function resetErrorStyles() {
    var elements = document.querySelectorAll('.input-error');
    elements.forEach(function (element) {
        element.classList.remove('input-error');
    });
}*/
// Function to validate the registration form
function redirectToLoginPage() {
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 3000);
}
function validateRegistrationForm() {
    resetErrorStyles();

    var nameInput = document.querySelector('#name');
    var emailInput = document.querySelector('#email');
    var passwordInput = document.querySelector('#password');
    var dobInput = document.querySelector('#dob');
    var phoneInput = document.querySelector('.phone-no input[type="text"]');
    var addressInput = document.querySelector('#address');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var dob = dobInput.value;
    var phone = phoneInput.value;
    var address = addressInput.value;

    if (name.trim() === '') {
        alert('Please enter your name.');
        nameInput.classList.add('input-error');
        return false;
    }

    if (email.trim() === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.classList.add('input-error');
        return false;
    }

    if (!isValidPassword(password)) {
        alert('Password must be at least 8 characters and include at least one uppercase letter, one number, and one special character.');
        passwordInput.classList.add('input-error');
        return false;
    }

    if (dob.trim() === '') {
        alert('Please enter your date of birth.');
        dobInput.classList.add('input-error');
        return false;
    }

    if (!isValidPhoneNumber(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        phoneInput.classList.add('input-error');
        return false;
    }

    if (address.trim() === '') {
        alert('Please enter your address.');
        addressInput.classList.add('input-error');
        return false;
    }

    // Additional validation checks can be added as needed
    redirectToLoginPage();
    return true;
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password format
function isValidPassword(password) {
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Function to validate phone number format
function isValidPhoneNumber(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Function to reset error styles
function resetErrorStyles() {
    var elements = document.querySelectorAll('.input-error');
    elements.forEach(function (element) {
        element.classList.remove('input-error');
    });
}

// Function to validate the login form
function validateLoginForm() {
    var username = document.querySelector('.wrapper input[type="text"]').value;
    var password = document.querySelector('.wrapper input[type="password"]').value;

    // Remove previous error styles
    document.querySelector('.wrapper input[type="text"]').classList.remove('input-error');
    document.querySelector('.wrapper input[type="password"]').classList.remove('input-error');

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

    return true;
}

// Function to validate the registration form
function validateRegistrationForm() {
    var nameInput = document.querySelector('#name');
    var emailInput = document.querySelector('#email');
    var passwordInput = document.querySelector('#password');
    var dobInput = document.querySelector('#dob');
    var phoneInput = document.querySelector('.phone-no input[type="text"]');

    // Remove previous error styles
    nameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
    dobInput.classList.remove('input-error');
    phoneInput.classList.remove('input-error');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var dob = dobInput.value;
    var phone = phoneInput.value;

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

    // Additional validation checks can be added as needed

    return true;
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

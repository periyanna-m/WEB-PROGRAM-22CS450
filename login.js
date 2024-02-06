
   function loginform(){
       
        document.addEventListener('DOMContentLoaded', function () {
            var form = document.querySelector('.card form');

            form.addEventListener('submit', function (event) {
                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;
                var dob = document.getElementById('dob').value;
                var phone = document.querySelector('.phone-no input[type="text"]').value;

                // Simple validation checks
                if (name.trim() === '') {
                    alert('Please enter your name.');
                    event.preventDefault();
                }

                if (email.trim() === '' || !isValidEmail(email)) {
                    alert('Please enter a valid email address.');
                    event.preventDefault();
                }

                if (password.trim() === '') {
                    alert('Please enter a password.');
                    event.preventDefault();
                }

                if (dob.trim() === '') {
                    alert('Please enter your date of birth.');
                    event.preventDefault();
                }

                if (phone.trim() === '') {
                    alert('Please enter your phone number.');
                    event.preventDefault();
                }

                // Additional validation checks can be added as needed
            });

            // Function to validate email format
            function isValidEmail(email) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        });
   }
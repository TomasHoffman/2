document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const birthdayDay = document.getElementById('birthday-day').value.trim();
        const birthdayMonth = document.getElementById('birthday-month').value.trim();
        const birthdayYear = document.getElementById('birthday-year').value.trim();
        const country = document.getElementById('country').value.trim();

        // Basic validation example
        if (name === '' || lastName === '' || email === '' || phone === '' || birthdayDay === '' || birthdayMonth === '' || birthdayYear === '' || country === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        // Additional validation logic can be added here (e.g., email format, phone number format, etc.)

        return true;
    }

    function submitForm() {
        const formData = new FormData(form);
        const url = form.action;

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Registration successful!');
            form.reset();
        })
        .catch(error => {
            alert('There was a problem with your registration. Please try again later.');
            console.error('Error:', error);
        });
    }
});

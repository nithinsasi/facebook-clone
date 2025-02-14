document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup-form");
    const signupBtn = document.querySelector(".signupbtn");

    signupBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const firstName = document.querySelector('input[placeholder="First name"]').value.trim();
        const surname = document.querySelector('input[placeholder="Surname"]').value.trim();
        const emailOrPhone = document.querySelector('input[placeholder="Mobile number or email address"]').value.trim();
        const password = document.querySelector('input[placeholder="New Password"]').value.trim();
        const dobDay = document.querySelector('select').value;
        const dobMonth = document.querySelectorAll('select')[1].value;
        const dobYear = document.querySelectorAll('select')[2].value;
        const gender = document.querySelector('input[name="GENDER"]:checked');

        // Validate inputs
        if (!firstName || !surname || !emailOrPhone || !password || !dobDay || !dobMonth || !dobYear || !gender) {
            alert("Please fill in all fields.");
            return;
        }

        // Validate email/phone format (basic check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
            alert("Please enter a valid email address or phone number.");
            return;
        }

        // Validate password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // If all validations pass, show success message
        alert("Your account is created successfully!");
        form.reset(); // Clear the form
    });
});
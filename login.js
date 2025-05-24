document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    // Form submission validation
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation for empty fields
        if (!name || !email || !password) {
            alert("All fields are required.");
            event.preventDefault();  // Prevent form submission if validation fails
            return;
        }

        // Email validation using regex pattern
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();  // Prevent form submission
            return;
        }

        if(name.length < 4){
            alert("Name must be atlest of 4 characters long.");
            event.preventDefault();
            return;
        }

        // Password validation (example: at least 6 characters)
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();  // Prevent form submission
            return;
        }

    });
});

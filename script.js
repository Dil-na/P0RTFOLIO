// Get the contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let valid = true;


    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }


    // Email validation
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    }
    else if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }


    // Subject validation
    if (subject === "") {
        subjectError.textContent = "Please enter a subject.";
        valid = false;
    }


    // Message validation
    if (message === "") {
        messageError.textContent = "Please enter your message.";
        valid = false;
    }


    // If everything is valid
    if (valid) {

        successMessage.textContent =
            "Your message has been submitted successfully!";

        // Clear the form
        contactForm.reset();
    }

});
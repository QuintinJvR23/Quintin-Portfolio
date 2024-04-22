document.addEventListener("DOMContentLoaded", function() {
    var exploreBtn = document.getElementById("exploreBtn");
    var contactBtn = document.getElementById("contactBtn"); // Get contact button
    var modal = document.getElementById("myModal");
    var closeModal = document.getElementsByClassName("close")[0];

    // Open modal on contact button click
    contactBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close modal on close button click
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var name = contactForm.querySelector('input[type="text"]').value;
        var email = contactForm.querySelector('input[type="email"]').value;
        var message = contactForm.querySelector('textarea').value;
        // Here you can add code to handle the form submission, like AJAX request or displaying a confirmation message
        console.log("Name: " + name + ", Email: " + email + ", Message: " + message);
        modal.style.display = "none";
    });
});

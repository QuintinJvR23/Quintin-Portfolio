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

        // Simulate sending message to example@mail.com
        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        // You would typically send this data to a server using AJAX
        // Here's a simulated AJAX request for demonstration
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://example.com/send_message');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('Message sent successfully!');
                    // You can display a success message to the user or perform any other action
                } else {
                    console.error('Failed to send message:', xhr.statusText);
                    // Handle error: display an error message to the user or retry sending the message
                }
                modal.style.display = "none"; // Close the modal regardless of the outcome
            }
        };
        xhr.send(formData);
    });
});

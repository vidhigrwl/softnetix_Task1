document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const projectButtons = document.querySelectorAll(".project");

    projectButtons.forEach(button => {
        button.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank"); // Open the URL in a new tab
            }
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Form submitted');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log({ name, email, message });

    const data = { name, email, message };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.text();
    })
    .then(text => {
        console.log('Response text:', text);
        if (text === 'Message sent successfully!') {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
});

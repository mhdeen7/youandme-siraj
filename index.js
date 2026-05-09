function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Set active button
    event.target.classList.add('active');
}
// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Tab switching
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');

    // Contact form submission
const submitBtn = document.getElementById('submitBtn');

if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const formMessage = document.getElementById('formMessage');

        // Validation
        if (!name || !email || !subject || !message) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fill in all fields!';
            return;
        }

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message })
            });

            const data = await response.json();

            if (data.success) {
                formMessage.style.color = 'green';
                formMessage.textContent = '✅ Message sent successfully! We will get back to you soon.';
                document.getElementById('contactName').value = '';
                document.getElementById('contactEmail').value = '';
                document.getElementById('contactSubject').value = '';
                document.getElementById('contactMessage').value = '';
            } else {
                formMessage.style.color = 'red';
                formMessage.textContent = '❌ Failed to send. Please try WhatsApp or email directly.';
            }
        } catch (error) {
            formMessage.style.color = 'red';
            formMessage.textContent = '❌ Something went wrong. Please try again.';
        }

        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    });
}
}
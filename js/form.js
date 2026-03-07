// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message')
            };

            // Validate form
            if (!data.name || !data.email || !data.message) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }

            try {
                // Send form to backend
                const response = await fetch('php/send-email.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
                    contactForm.reset();
                } else {
                    alert('Ошибка при отправке: ' + result.message);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Ошибка при отправке сообщения. Попробуйте еще раз.');
            }
        });
    }
});

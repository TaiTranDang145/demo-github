document.addEventListener('DOMContentLoaded', () => {
    // Payment Method Selection
    const methods = document.querySelectorAll('.method');
    methods.forEach(method => {
        method.addEventListener('click', () => {
            methods.forEach(m => m.classList.remove('active'));
            method.classList.add('active');
        });
    });

    // Simple Card Number Formatting
    const cardNumber = document.getElementById('cardNumber');
    cardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        e.target.value = formattedValue;
    });

    // Expiry Date Formatting (MM/YY)
    const expiry = document.getElementById('expiry');
    expiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });

    // Form Submission & Modal
    const paymentForm = document.getElementById('paymentForm');
    const payBtn = document.getElementById('payBtn');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate Processing
        payBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing...';
        payBtn.disabled = true;
        payBtn.style.opacity = '0.8';

        setTimeout(() => {
            // Show Success Modal
            successModal.classList.add('active');
            
            // Reset Button
            payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay $386.90';
            payBtn.disabled = false;
            payBtn.style.opacity = '1';
        }, 2000);
    });

    closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
        paymentForm.reset();
    });
});

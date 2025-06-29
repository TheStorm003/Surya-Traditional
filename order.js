document.addEventListener('DOMContentLoaded', () => {
    const person = localStorage.getItem('selectedPerson') || "Not Found";
    const basePrice = parseFloat(localStorage.getItem('selectedPrice')) || 0;

    document.getElementById('personName').innerText = person;
    document.getElementById('basePrice').innerText = basePrice;

    calculateTotal();  // Call once initially to display base price + GST
});

function calculateTotal() {
    const basePrice = parseFloat(localStorage.getItem('selectedPrice')) || 0;
    const extra = document.getElementById('itemsCheckbox').checked ? 500 : 0;
    const gst = (basePrice + extra) * 0.18;
    const total = basePrice + extra + gst;

    document.getElementById('extraAmount').innerText = extra;
    document.getElementById('gstAmount').innerText = gst.toFixed(2);
    document.getElementById('totalAmount').innerText = total.toFixed(2);
}

function placeOrder() {
    const total = parseFloat(document.getElementById('totalAmount').innerText);

    const options = {
        key: "rzp_test_D5Z5D1vedQtI84",
        amount: total * 100,
        currency: "INR",
        name: "Surya Traditional",
        description: "Service Booking",
        handler: function (response) {
            alert("Payment Successful! ID: " + response.razorpay_payment_id);
            window.location.href = "finalpage.html";
        },
        theme: {
            color: "#FF5733"
        }
    };

    const rzp = new Razorpay(options);
    rzp.open();
}

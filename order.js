const person = localStorage.getItem('selectedPerson');
const basePrice = parseFloat(localStorage.getItem('selectedPrice')) || 0;

document.getElementById('personName').innerText = person;
document.getElementById('basePrice').innerText = basePrice;
document.getElementById('totalAmount').innerText = (basePrice * 1.18).toFixed(2);

function calculateTotal() {
  const extra = document.getElementById('itemsCheckbox').checked ? 500 : 0;
  const gst = (basePrice + extra) * 0.18;
  const total = basePrice + extra + gst;

  document.getElementById('extraAmount').innerText = extra;
  document.getElementById('gstAmount').innerText = gst.toFixed(2);
  document.getElementById('totalAmount').innerText = total.toFixed(2);
}

function placeOrder() {
  const total = document.getElementById('totalAmount').innerText;

  // Basic Razorpay Integration (Test mode)
  const options = {
    key: "rzp_test_D5Z5D1vedQtI84", // Use Razorpay Test Key
    amount: total * 100, // Amount in paisa
    currency: "INR",
    name: "Surya Traditional",
    description: "Service Booking",
    handler: function (response) {
      alert("Payment Successful! ID: " + response.razorpay_payment_id);
      window.location.href = "finalpage.html"; // Redirect after success
    },
    prefill: {
      name: person,
      email: "user@example.com" // Optional, can be fetched from localStorage
    },
    theme: {
      color: "#FF5733"
    }
  };
  const rzp = new Razorpay(options);
  rzp.open();
}
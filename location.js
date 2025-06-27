function redirectToLink() {
    const city = document.getElementById("city").value;
    if (city) {
      location.replace("vizagpage.html"); // Replace based on city logic
    }
  }

  // Show Welcome Message from localStorage
  const firstname = localStorage.getItem('firstname');
  if (firstname) {
    document.getElementById('welcome').textContent = `Welcome, ${firstname}`;
  }
  function logout() {
    localStorage.clear();
    window.location.href = 'index.html'; // Redirect to home page or login page
}
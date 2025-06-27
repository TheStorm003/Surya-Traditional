document.getElementById('orderNum').textContent = 'ORD' + Math.floor(100000 + Math.random() * 900000);
document.getElementById('orderDate').textContent = new Date().toLocaleString();

function logout() {
  localStorage.clear();
  window.location.href = 'index.html';
}
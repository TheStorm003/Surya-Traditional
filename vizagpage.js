function showPeople(service) {
    document.querySelectorAll('.people-container').forEach(div => div.style.display = 'none');
    document.getElementById(service).style.display = 'block';
  }
  function showDetails(name, languages, qualification, age, experience, price) {
    document.getElementById('personName').innerText = name;
    document.getElementById('languages').innerText = languages;
    document.getElementById('qualification').innerText = qualification;
    document.getElementById('age').innerText = age;
    document.getElementById('experience').innerText = experience;
    document.getElementById('price').innerText = price;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    localStorage.setItem('selectedPerson', name);
    localStorage.setItem('selectedPrice', price);
  }
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  function selectPerson() {
    window.location.href = 'order.html';
  }
  
  const firstname = localStorage.getItem('firstname');
  if (firstname) {
    document.getElementById('welcome-msg').textContent = `Welcome, ${firstname}`;
  }
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('active', window.scrollY > 100);
  });
  toTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  function logout() {
      localStorage.clear();
      window.location.href = 'index.html'; 
  }
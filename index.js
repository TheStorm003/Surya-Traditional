const toTop = document.getElementById('toTop');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          toTop.classList.add('active');
        } else {
          toTop.classList.remove('active');
        }
      });
  
      toTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
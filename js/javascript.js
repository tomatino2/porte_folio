document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const submitButton = this.querySelector('button[type="submit"]');
  const loadingMessage = document.createElement('p');
  loadingMessage.innerHTML = 'Envoi en cours...';
  this.appendChild(loadingMessage);
  submitButton.disabled = true;

  fetch(this.action, {
      method: 'POST',
      body: formData,
  })
  .then(response => {
      loadingMessage.style.display = 'none';
      submitButton.disabled = false;
      if (response.ok) {
          document.getElementById('messageVer').style.display = 'block';
          document.getElementById('errorVer').style.display = 'none';
      } else {
          document.getElementById('errorVer').style.display = 'block';
          document.getElementById('messageVer').style.display = 'none';
      }
  })
  .catch(() => {
      loadingMessage.style.display = 'none';
      submitButton.disabled = false;
      document.getElementById('errorVer').style.display = 'block';
      document.getElementById('messageVer').style.display = 'none';
  });
});

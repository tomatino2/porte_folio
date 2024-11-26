const iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {
  iframe.addEventListener('mouseenter', () => {
    iframe.style.transform = 'scale(1.05) translateZ(20px)';
    iframe.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
  });

  iframe.addEventListener('mouseleave', () => {
    iframe.style.transform = 'scale(1) translateZ(0)';
    iframe.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animate');

  const elements2 = document.querySelectorAll('.animate-inside');

  const elements3 = document.querySelectorAll('.animate-inside-fast');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-viewport');
          }
      });
  }, {
      threshold: 0.1 // Trigger when 20% of the element is visible
  });

  elements.forEach(el => observer.observe(el));
  elements2.forEach(el => observer.observe(el));
  elements3.forEach(el => observer.observe(el));
});

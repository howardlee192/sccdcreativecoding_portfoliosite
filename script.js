/**
 * Personal Archive - Desktop 1440 // Lee Ho Kan
 * Pure Static Handcrafted Implementation
 * (All audio, animations, toasts, and reactive gimmicks removed per specification)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Prevent default anchor jumping for placeholder project links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

  const desighBtn = document.getElementById('desighBtn');
  if (desighBtn) {
    desighBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Pure static button: no reactions, no sound, no state shifts
    });
  }
});

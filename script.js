const buttons = document.querySelectorAll('.toggle-info');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const info = button.nextElementSibling;
    info.classList.toggle('hidden');
    button.classList.toggle('open');
  });
});

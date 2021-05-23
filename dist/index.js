const aTag = document.querySelectorAll('a');

aTag.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

document.querySelectorAll('[data-time]').forEach(element => {
  element.textContent = new Date(element.dataset.time).toLocaleString();
});

document
  .querySelectorAll('[data-scroll-to-bottom]')
  .forEach(element => (element.scrollTop = element.scrollHeight));

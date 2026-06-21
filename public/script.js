document
  .querySelectorAll('[data-scroll-to-bottom]')
  .forEach(element => (element.scrollTop = element.scrollHeight));

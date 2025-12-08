// change navbar styles on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// FAQ toggle
const faqs = document.querySelectorAll('.faq_item');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon inside this faq
    const icon = faq.querySelector('.faq__icon i');
    if (!icon) return;
    if (icon.classList.contains('uil-plus')) {
      icon.classList.remove('uil-plus');
      icon.classList.add('uil-minus');
    } else {
      icon.classList.remove('uil-minus');
      icon.classList.add('uil-plus');
    }
  });
});

// NAV menu show/hide
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");

if (menuBtn && closeBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });

  const closeNav = () => {
    menu.classList.remove('open');
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  };

  closeBtn.addEventListener('click', closeNav);
}

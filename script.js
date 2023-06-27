const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href === hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
    
    // Optionally, scroll to the clicked section
    const sectionId = hrefLinkClick.split('#')[1];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

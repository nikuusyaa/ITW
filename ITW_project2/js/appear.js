const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.1, 
  }
);

document.querySelectorAll(".slide-in").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.5}s`; 
  observer.observe(el);
});

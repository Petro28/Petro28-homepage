(() => {
  "use strict";

  const elements = document.querySelectorAll(".fade");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
})();

/**
 * Force dark theme on TypeDoc (GitHub Pages) and inject portfolio nav links.
 * Runs as early as possible; retries inject after DOM is ready.
 */
(function () {
  function forceDark() {
    try {
      var root = document.documentElement;
      root.dataset.theme = "dark";
      root.style.colorScheme = "dark";
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("tsd-theme", "dark");
      localStorage.setItem("tsd-color-scheme", "dark");
    } catch (_) {}
  }

  forceDark();

  function injectLinks() {
    if (document.querySelector(".portfolio-links")) return;

    var bar = document.createElement("nav");
    bar.className = "portfolio-links";
    bar.setAttribute("aria-label", "Portfolio links");
    bar.innerHTML =
      '<a href="https://my-resume.armandaneshwork.workers.dev/" target="_blank" rel="noopener noreferrer">Live resume</a>' +
      '<a href="https://arman-danesh.github.io/my-resume/">API documentation</a>' +
      '<a href="https://github.com/arman-danesh/my-resume" target="_blank" rel="noopener noreferrer">GitHub</a>';

    var toolbar = document.querySelector(".tsd-page-toolbar");
    if (toolbar && toolbar.parentNode) {
      toolbar.parentNode.insertBefore(bar, toolbar.nextSibling);
    } else if (document.body) {
      document.body.insertBefore(bar, document.body.firstChild);
    }
  }

  function boot() {
    forceDark();
    injectLinks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // TypeDoc may hydrate theme after load
  window.addEventListener("load", function () {
    forceDark();
    injectLinks();
  });
})();

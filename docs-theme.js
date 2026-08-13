/**
 * Force dark color scheme for TypeDoc and inject nav links to resume / GitHub / docs.
 */
(function () {
  try {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
    localStorage.setItem("tsd-theme", "dark");
  } catch (_) {}

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
    } else {
      document.body.insertBefore(bar, document.body.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectLinks);
  } else {
    injectLinks();
  }
})();

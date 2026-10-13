(function () {
  var btn = document.getElementById("mc-contact-open");
  if (!btn) return;

  var encoded = btn.getAttribute("data-mail");
  if (!encoded) return;

  var subject = "Engagement inquiry — Mauli Consulting Services";

  function openInquiry() {
    try {
      var addr = atob(encoded);
      if (!addr || addr.indexOf("@") < 1) return;
      window.location.href =
        "mailto:" + addr + "?subject=" + encodeURIComponent(subject);
    } catch (e) {
      /* ignore */
    }
  }

  btn.addEventListener("click", openInquiry);

  var footerLink = document.getElementById("footer-contact-link");
  if (footerLink) {
    footerLink.addEventListener("click", function (e) {
      e.preventDefault();
      openInquiry();
    });
  }

  document.querySelectorAll('a[href$="#contact"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.getElementById("contact");
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) {
        history.replaceState(null, "", link.getAttribute("href"));
      }
    });
  });
})();

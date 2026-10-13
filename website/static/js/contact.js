(function () {
  var btn = document.getElementById("mc-contact-open");
  if (!btn) return;

  var encoded = btn.getAttribute("data-mail");
  if (!encoded) return;

  var subject = "Engagement inquiry — Mauli Consulting Services";

  btn.addEventListener("click", function () {
    try {
      var addr = atob(encoded);
      if (!addr || addr.indexOf("@") < 1) return;
      window.location.href =
        "mailto:" + addr + "?subject=" + encodeURIComponent(subject);
    } catch (e) {
      /* ignore */
    }
  });
})();

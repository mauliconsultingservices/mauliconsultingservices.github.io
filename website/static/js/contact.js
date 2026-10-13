(function () {
  var subject = "Engagement inquiry — Mauli Consulting Services";

  function openInquiry(encoded) {
    try {
      var addr = atob(encoded);
      if (!addr || addr.indexOf("@") < 1) return;
      window.location.href =
        "mailto:" + addr + "?subject=" + encodeURIComponent(subject);
    } catch (e) {
      /* ignore */
    }
  }

  document.querySelectorAll("[data-mail]").forEach(function (btn) {
    var encoded = btn.getAttribute("data-mail");
    if (!encoded) return;
    btn.addEventListener("click", function () {
      openInquiry(encoded);
    });
  });
})();

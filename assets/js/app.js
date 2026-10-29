(function () {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const now = new Date();
  const dateEl = $("#today-date");
  if (dateEl) {
    try {
      dateEl.textContent = new Intl.DateTimeFormat("hi-IN", {
        day: "numeric", month: "long", year: "numeric"
      }).format(now);
    } catch (_) {
      dateEl.textContent = now.toLocaleDateString();
    }
  }
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(now.getFullYear());

  const toggle = $("#menu-toggle");
  const nav = $("#main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const thoughtEl = $("#daily-thought");
  if (thoughtEl) {
    const thoughts = [
      "छोटे कदम, लगातार प्रयास और सही दिशा—लंबे समय में बड़ा बदलाव ला सकते हैं।",
      "सीखने की आदत बनाए रखें; हर दिन का थोड़ा ज्ञान आगे काम आता है।",
      "सही जानकारी के साथ लिया गया छोटा कदम भी प्रगति की शुरुआत है।",
      "धैर्य, मेहनत और ईमानदारी—किसी भी लक्ष्य की मजबूत नींव हैं।",
      "आज का अच्छा निर्णय, कल के बेहतर अवसर बना सकता है।"
    ];
    const day = Math.floor(Date.now() / 86400000);
    thoughtEl.textContent = thoughts[((day % thoughts.length) + thoughts.length) % thoughts.length];
  }
})();

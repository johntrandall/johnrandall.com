// Mockup-only controls: ?docs=3 shows the future three-document state,
// ?face=charter previews the Butterick face, ?theme=dark|light forces a theme.
(function () {
  var q = new URLSearchParams(location.search), root = document.documentElement;
  if (q.get("face")) root.dataset.face = q.get("face");
  if (q.get("theme")) root.dataset.theme = q.get("theme");
  var three = q.get("docs") === "3";
  document.querySelectorAll("[data-future]").forEach(function (el) { el.hidden = !three; });
  document.querySelectorAll("[data-today-only]").forEach(function (el) { el.hidden = three; });
  function link(k, v, label) { var p = new URLSearchParams(location.search); v ? p.set(k, v) : p.delete(k);
    return '<a href="?' + p.toString() + '">' + label + "</a>"; }
  var box = document.createElement("div"); box.className = "mock";
  box.innerHTML = "<b>Mockup</b> · " + (three ? link("docs", "", "today: 1 document") : link("docs", "3", "later: 3 documents")) +
    " · " + (q.get("face") ? link("face", "", "Carlito (PDF match)") : link("face", "charter", "try Charter")) +
    " · " + link("theme", "dark", "dark") + link("theme", "light", "light") + link("theme", "", "system");
  document.body.appendChild(box);
})();

// Smooth transition between pages: fade the page out, then open the next file.
document.querySelectorAll('a[href$=".html"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || a.target) return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(function () { location.href = a.href; }, 250);
  });
});
// Restore the page if the browser shows it again from the back/forward cache.
addEventListener('pageshow', function (e) { if (e.persisted) document.body.classList.remove('leaving'); });

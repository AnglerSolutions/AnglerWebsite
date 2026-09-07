(function(){
  var blocks = Array.prototype.slice.call(document.querySelectorAll('.lang-block'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-lang-btn]'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealAll(container){
    container.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
  function observeReveals(container){
    if (reduceMotion || !('IntersectionObserver' in window)) { revealAll(container); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    container.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  }

  function setLang(lang){
    blocks.forEach(function(b){ b.hidden = (b.getAttribute('data-lang') !== lang); });
    buttons.forEach(function(btn){
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('al_lang', lang); } catch(e){}
    var active = document.getElementById('lang-' + lang);
    if (active) observeReveals(active);
  }

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){ setLang(btn.getAttribute('data-lang-btn')); });
  });

  var stored = null;
  try { stored = localStorage.getItem('al_lang'); } catch(e){}
  var initial = stored;
  if (!initial) {
    var navLang = (navigator.language || '').toLowerCase();
    if (navLang.indexOf('es') === 0) initial = 'es';
    else if (navLang.indexOf('de') === 0) initial = 'de';
    else initial = 'en';
  }
  setLang(initial);
})();

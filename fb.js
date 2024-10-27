;(function() {
  // 配置 id -----
  var id = '';
  // 配置 ----
  
function initHandler (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  var noscript = document.createElement('noscript');
  var img = document.createElement('img');
  img.width = 1;
  img.height = 1;
  img.style.display = 'none';
  img.src = 'https://www.facebook.com/tr?id=' + id + '&ev=PageView&noscript=1';
  noscript.appendChild(img);
  document.head.appendChild(noscript);
  
  n = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}
initHandler(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq("init", id);
var add = window.location.toString();
if (add.indexOf("/#!/") != -1) {
  fbq("track", "PageView");
}

window.addEventListener('EVENT_REGISTRATION', () => {
  window.fbq('track', 'CompleteRegistration');
});

window.addEventListener("EVENT_FIRST_RECHARGE", (ev) => {
  var detail = ev.detail;
  window.fbq("trackCustom", "FirstRecharge", { value: detail.money, currency: detail.currency });
});

window.addEventListener('EVENT_RECHARGE', (ev) => {
  var detail = ev.detail;
  window.fbq('track', 'Purchase', { value: detail.money, currency: detail.currency });
});

}());
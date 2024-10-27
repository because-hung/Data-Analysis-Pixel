;(function(){
  // Google tag (gtag.js)
  var id = ''; // G-
  // Google tag (gtag.js)
  
  var scriptUrl = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  var script = document.createElement('script');
  script.src = scriptUrl;
  script.async = true;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
  window.addEventListener('EVENT_REGISTRATION', () => {
    gtag('event', 'sign_up');
  });
  window.addEventListener('EVENT_RECHARGE', (ev) => {
    var detail = ev.detail;
    gtag('event', 'purchase', {
      'value': detail.money,
      'currency': detail.currency
    });
  });
}());

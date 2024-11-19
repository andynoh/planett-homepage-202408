


    // 탭 자동 클릭
    function triggerEvent(eventType) {
      const history = document.getElementById('tabhistory');
      const simcard = document.getElementById('tabsimcard');
      const router = document.getElementById('tabrouter');
      const business = document.getElementById('tabbusiness');
      const mall = document.getElementById('tabmall');

      if (eventType === 'history' && history) {
          history.click(); 
      }else if (eventType === 'simcard' && simcard) {
        simcard.click();
    }else if (eventType === 'router' && router) {
      router.click();
  }else if (eventType === 'business' && business) {
    business.click();
}else if (eventType === 'mall' && mall) {
  mall.click();
}
  }

  window.onload = function() {
      const urlParams = new URLSearchParams(window.location.search);
      const event = urlParams.get('event');
      if (event) {
          triggerEvent(event);
      }
  };
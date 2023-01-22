document.getElementById("submitBtn").addEventListener("click", async evt => {
  evt.preventDefault();

  // const elementClass = document.getElementById('element-id-input').value;
  
  // function performClick(elClass){
  function performClick(){

    console.log('het');
    const elements = document.querySelectorAll(`[path='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3']`);console.log(elements[0]);
    elements.forEach(el => {
      el.click();
    });
    // var element = document.getElementsByClassName(elClass);
    // console.log(elClass);
    // element[0].click();
  }

  chrome.tabs.executeScript({
    // code: '(' + performClick + ')("' + elementClass +'");'
    code: '(' + performClick + ')();'
    
  }, (results) => {
    console.log('done')
  })
});


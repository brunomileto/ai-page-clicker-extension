document.getElementById("submitBtn").addEventListener("click", async evt => {
  evt.preventDefault();

  function performClick(){

    const parent = document.querySelector(".w-full.border-b.border-black/10.dark:border-gray-900/50.text-gray-800.dark:text-gray-100.group.bg-gray-50.dark:bg-[#444654]");
    const svg = parent.querySelector("svg.h-4.w-4");
    

  }

  chrome.tabs.executeScript({
    code: '(' + performClick + ')();'
    
  }, (results) => {
    console.log('done')
  })
});


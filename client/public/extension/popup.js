/* eslint-disable no-undef */
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  console.log(tabs[0].url);
  console.log(encodeURIComponent(tabs[0].url))

  var iframe = document.getElementById("myFrame");
  iframe.src = "http://localhost:3000/?param="+encodeURIComponent(tabs[0].url);
});
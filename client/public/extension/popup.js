/* eslint-disable no-undef */
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  console.log(tabs);
  var iframe = document.getElementById("myFrame");
  iframe.src = "http://localhost:3000/";
});
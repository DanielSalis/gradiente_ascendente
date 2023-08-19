chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var iframe = document.getElementById("myFrame");
  iframe.src = "http://localhost:3000/";
});
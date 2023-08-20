/* eslint-disable no-undef */
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  console.log(tabs);

  var div = document.getElementsByClassName("frame-container")[0];
  var p = document.createElement("p");
  p.innerHTML = tabs[0].url;
  p.style.display = "none"
  div.prepend(p);

  var iframe = document.getElementById("myFrame");
  iframe.src = "http://localhost:3000?param="+tabs[0].url;
});

fetch("http://example.com", { headers: {'Authorization': 'Access-Control-Allow-Origin'}})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response)
    return response;
  });
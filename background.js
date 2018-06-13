chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "http://calculator-simplecalc.7e14.starter-us-west-2.openshiftapps.com/" });
});
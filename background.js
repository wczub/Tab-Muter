
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		var tab = tabs[0]
		if (tab.mutedInfo.muted == false){
			chrome.tabs.update(tab.id, {muted: true}), null;
			chrome.tabs.sendMessage(tab.id, {"title": "[M]"}, function (response){
				console.log(response);
			});
		}
		else {
			chrome.tabs.update(tab.id, {muted: false}, null);
			chrome.tabs.sendMessage(tab.id, {"title": ""}, function (response){
				console.log(response);
			});
		}
		console.log(tab.mutedInfo);
		
	});
})
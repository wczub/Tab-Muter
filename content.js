chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if (request.title == "[M]"){
			document.title = request.title + document.title;
		} 
		else{
			document.title = document.title.substring(3,);
		}
	}
);
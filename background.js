function sendEventToActiveTab(event, handler) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, event, function(response) {
            if (typeof response !== "undefined" && typeof handler !== "undefined") {
                handler(response);
            }
        });
    });
}

chrome.commands.onCommand.addListener(function(command) {
    console.log('onCommand event received for message: ', command);
    sendEventToActiveTab({message: {command: command}});
});
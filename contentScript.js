commandMap = {
    navigate: navigateServicesMenu,
    ec2: navigateEC2Console,
    s3: navigateS3Console,
};

function navigateEC2Console() {
    window.location = '/ec2/v2/home'
}

function navigateS3Console() {
    window.location = '/s3/home'
}

function navigateServicesMenu() {
    window.document.getElementById('nav-servicesMenu').click()
}

function routeCommand(command) {
    if (command in commandMap) {
        commandMap[command]();
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        routeCommand(request.message.command);
        sendResponse({farewell: "goodbye"});
    }
);
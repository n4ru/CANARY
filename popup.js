window.addEventListener('DOMContentLoaded', function() {
    /*
    chrome.runtime.onMessage.addListener(function getFunctions(req, send, resp) {
        if (req.functions) {
            chrome.runtime.onMessage.removeListener(getFunctions);
            eval(req.functions);
            Object.keys(siteFunctions).forEach(function(site) {
                if (window.location.href.indexOf(site) >= 0) {
                    siteFunctions[site]();
                }
            });
        }
    });
    */
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        //...and send a request for the DOM info... 
        chrome.tabs.sendMessage(tabs[0].id, {
                run: true
            },
            /* ...also specifying a callback to be called 
                 from the receiving end (content script*/
            //setDOMInfo
        );
    });
})
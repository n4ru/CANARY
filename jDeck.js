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
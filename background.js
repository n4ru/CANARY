chrome.runtime.onMessage.addListener(function getFunctions(req, send, resp) {
    if (req.run) {
        chrome.tabs.executeScript(tab.id, {
            file: 'jq.js'
        }, function() {
            chrome.tabs.executeScript(tab.id, {
                file: 'functions_debug.js'
            }, function() {
                chrome.tabs.executeScript(tab.id, {
                    file: 'terms.js'
                }, function() {
                    chrome.tabs.executeScript(tab.id, {
                        file: 'jDeck.js'
                    }, function() {
                        chrome.tabs.sendMessage(tab.id, {
                            functions: 'console.log("loaded")'
                        });
                    })
                })
            })
        })
    }
})
chrome.runtime.onMessage.addListener(function getFunctions(req, send, resp) {
    if (req.run) {
        scanned = [];
        mailBody = jQuery('[class="Am Al editable LW-avf"]');
        scanMail(mailBody, terms)
    }
});

function scanMail(mailBody, list) {
    var body = mailBody.text();
    var length = list.length;
    while (length--) {
        if (body.indexOf(list[length]) != -1) {
            if (scanned.indexOf(list[length]) == -1) {
                scanned.push(list[length])
                console.log("Word Found: " + list[length])
                wrap = '\\s*([a-zA-Z0-9]*' + list[length] + '[a-zA-Z0-9]*)\\s*';
                console.log(body.match(wrap)[1])
            }
        }
    }
}

function wrapInElement(element, replaceFrom, replaceTo) {
    var index, textData, wrapData, tempDiv;
    // recursion for the child nodes
    if (element.childNodes.length > 0) {
        for (index = 0; index < element.childNodes.length; index++) {
            wrapInElement(element.childNodes[index], replaceFrom, replaceTo);
        }
    }
    // non empty text node?
    if (element.nodeType == Node.TEXT_NODE && /\S/.test(element.data)) {
        // replace
        textData = element.data;
        console.log(textData.match(replaceFrom));
        wrapData = textData.replace(textData.match(replaceFrom)[1], "<span style='background-color: red; color: white'>" + textData.match(replaceFrom)[1] + "</span>&#8203;");
        if (wrapData !== textData) {
            // create a div
            tempDiv = document.createElement('div');
            tempDiv.innerHTML = wrapData;
            // insert
            while (tempDiv.firstChild) {
                element.parentNode.insertBefore(tempDiv.firstChild, element);
            }
            // remove text node
            element.parentNode.removeChild(element);
        }
    }
}

function wrapthis(towrap) {
    wrap = '\\s*([a-zA-Z0-9]*' + towrap + '[a-zA-Z0-9]*)\\s';
    wrapInElement(mailBody[0], wrap, "");
}
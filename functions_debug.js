// This resource is not included in the packaged extension - the latest stable version is minified and hosted online @ http://netdeck.n4ru.it/functions.php.
// This version of the file is used to test new site additions. Pass the debug parameter to get this file (http://netdeck.n4ru.it/functions.php?debug).
siteFunctions = {
    'mail.google.': function() {
        scanned = [];
        setInterval(function() {
            mailBody = jQuery('[class="Am Al editable LW-avf"]');
            scanMail(mailBody, terms)
        }, 1000)
    }
};

function scanMail(mailBody, list) {
    var body = mailBody.text();
    var length = list.length;
    while (length--) {
        if (body.indexOf(list[length]) != -1) {
            if (scanned.indexOf(list[length]) == -1) {
                scanned.push(list[length])
                console.log(scanned)
                wrapthis(list[length]);
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
        wrapData = textData.replace(textData.match(replaceFrom)[1], "<span style='background-color: red; color: white'>"+textData.match(replaceFrom)[1]+"</span>&#8203;");
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
    wrap = '\\s*([a-z0-9]*'+towrap+'[a-z0-9]*)\\s*';
    wrapInElement(mailBody[0], wrap, "");
}
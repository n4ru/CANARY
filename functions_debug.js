chrome.runtime.onMessage.addListener(function getFunctions(req, send, resp) {
    if (req.run) {
        scanned = [];
        mailBody = $('[class="Am Al editable LW-avf"]');
        scanMail(mailBody, terms)
        scanned = $.unique(scanned)
        resp(scanned)
    }
});

function scanMail(mailBody, list) {
    var body = mailBody.text();
    var length = list.length;
    while (length--) {
        if (body.indexOf(list[length]) != -1) {
            if (scanned.indexOf(list[length]) == -1) {
                wrap = '\\s*([a-zA-Z0-9]*' + list[length] + '[a-zA-Z0-9]*)\\s*';
                scanned.push(body.match(wrap)[1])
            }
        }
    }
}
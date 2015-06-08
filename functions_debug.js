// This resource is not included in the packaged extension - the latest stable version is minified and hosted online @ http://netdeck.n4ru.it/functions.php.
// This version of the file is used to test new site additions. Pass the debug parameter to get this file (http://netdeck.n4ru.it/functions.php?debug).
siteFunctions = {
    'mail.google.': function() {
        setInterval(function() {
            mailBody = $('[class="Am Al editable LW-avf"]').text();
            //console.log(mailBody)
            scanMail(mailBody, terms)
        }, 1000)
    }
};

function scanMail(body, list) {
    Object.keys(list).forEach(function(site) {
        if (mailBody.indexOf(list) >= 0) {
            console.log(mailBody.indexOf(list))
        }
    });
}
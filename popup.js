function setthings(info) {
    if (typeof info !== 'undefined' && info.length > 0) {
        document.getElementById('stuff').innerHTML = "<span style='color: red; font-size: 14px'>We matched the following PHI terms:</br>";
        for (i = 0; i < info.length; i++) {
            document.getElementById('stuff').innerHTML = document.getElementById('stuff').innerHTML + info[i] + "</br>";
        }
    } else {
        document.getElementById('stuff').innerHTML = "<span style='color: green; font-size: 14px'>No PHI was found.</span>";
    }
    document.getElementById('stuff').innerHTML = document.getElementById('stuff').innerHTML + "</br><span style='font-size: 10px'>These scans are based on early dictionary matches.</br>They do not reflect the accuracy of the final product.</span></span>";
}
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
        run: true
    }, setthings);
});
var enabled = false;

function save_options() {
  chrome.storage.sync.get({
    enabled: false
  }, function(items) {
    if (items.enabled == true) {
      enabled = false;
      toggle = "\<span style='color: red'\>Scanning disabled.\</span\>"
    } else {
      enabled = true;
      toggle = "\<span style='color: green'\>Scanning enabled.\</span\>"
    }
    chrome.storage.sync.set({
      enabled: enabled
    }, function() {
      var status = document.getElementById('status');
      status.innerHTML = toggle;
    });
    console.log(enabled)
  });
}

function restore_options() {
  chrome.storage.sync.get({
    enabled: false
  }, function(items) {
    itemsa = items;
    console.log(items.enabled)
    if (!items.enabled) {
      toggle = "\<span style='color: red'\>Scanning disabled.\</span\>"
    } else {
      toggle = "\<span style='color: green'\>Scanning enabled.\</span\>"
    }
    var status = document.getElementById('status');
    status.innerHTML = toggle;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
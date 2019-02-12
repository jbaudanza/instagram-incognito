// Saves options to chrome.storage
function save_options() {
  var shouldBlockSeens = document.getElementById('block-seens').checked;
  var shouldBlockLikes = document.getElementById('block-likes').checked;

  chrome.storage.sync.set({
    shouldBlockSeens: shouldBlockSeens,
    shouldBlockLikes: shouldBlockLikes
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    shouldBlockSeens: true,
    shouldBlockLikes: true
  }, function(items) {
    document.getElementById('block-seens').checked = items.shouldBlockSeens;
    document.getElementById('block-likes').checked = items.shouldBlockLikes;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

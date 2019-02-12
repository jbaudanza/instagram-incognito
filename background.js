chrome.storage.sync.get({
  shouldBlockSeens: true,
  shouldBlockLikes: true
}, function(items) {
  if (items.shouldBlockSeens) {
    addSeensListener();
  }

  if (items.shouldBlockLikes) {
    addLikesListener();
  }
});

function seensListener() {
  return { cancel: true };
}

function likesListener() {
  return { cancel: true };
}

// Block POST https://www.instagram.com/stories/reel/seen
function addSeensListener() {
  console.log("adding seens")
  chrome.webRequest.onBeforeRequest.addListener(
    seensListener,
    {urls: ["*://www.instagram.com/stories/reel/seen"]},
    ["blocking"]
  );
}

// Block POST https://www.instagram.com/web/likes/1974771848395008970/like/
function addLikesListener() {
  console.log("adding likes")
  chrome.webRequest.onBeforeRequest.addListener(
    likesListener,
    {urls: ["*://www.instagram.com/web/likes/*/like/"]},
    ["blocking"]
  );
}

function removeSeensListener() {
  chrome.webRequest.onBeforeRequest.removeListener(seensListener);
}

function removeLikesListener() {
  chrome.webRequest.onBeforeRequest.removeListener(likesListener);
}

chrome.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName === "sync") {
    if ('shouldBlockLikes' in changes) {
      if (changes.shouldBlockLikes.newValue) {
        addLikesListener();
      } else {
        removeLikesListener();
      }
    }

    if ('shouldBlockSeens' in changes) {
      if (changes.shouldBlockSeens.newValue) {
        addSeensListener();
      } else {
        removeSeensListener();
      }
    }
  }
});

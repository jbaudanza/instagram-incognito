# instagram-incognito

This is a Chrome extension that blocks all likes and seen notifications while browsing Instagram.

If you block seen notifications, then you can view Instagram stories without showing up in the poster's "seen list.

If you block likes, it will prevent you from accidently liking an Instagram post.

You can choose to unblock either of these events from the extension settings.

This extention works by blocking the following Instagram API endpoints:

  - POST https://www.instagram.com/stories/reel/seen
  - POST https://www.instagram.com/web/likes/1974771848395008970/like/

Instagram could change these at anytime, and this extension will stop working.

---
title: "callimachus bookmarks: privacy policy"
description: "Privacy policy for callimachus bookmarks, the Chrome extension of John Randall's self-hosted callimachus library."
url: "/callimachus/privacy/"
lastmod: "2026-10-27"
draft: false
hidemeta: true
ShowReadingTime: false
ShowWordCount: false
ShowBreadCrumbs: false
---

*Effective 2026-10-27. Publisher: John Randall, Montclair, NJ, USA. Contact: john@johnrandall.com.*

callimachus bookmarks is a Chrome extension for a self-hosted library system called callimachus, which its owner runs on their own computer. The extension works only with the owner's own callimachus intake; it has no server of its own and the publisher receives nothing from it.

**What it handles.** When you click the toolbar button, choose "Send to callimachus" from the right-click menu, or send a bookmark folder from the options page, the extension sends the address and title of that page or of those bookmarks, and the name you chose under "Who is sending", to the intake address you entered in its options. The token you enter there is sent with each request so the intake can accept it.

**Where it is kept.** The intake address, the token, the name and any links waiting to be sent are kept in Chrome's local extension storage on that browser only. They are not synced to your Google account. Data is sent only over https, to the intake address you entered, and, if that does not answer, to the other of the two https intake addresses of the same home server; it is never sent over plain http and never anywhere else.

**Bookmark cleanup.** On a computer where callimachus's own helper program is installed, the extension receives from that program a list of bookmarks callimachus has already filed, removes those bookmarks from Chrome, and reports back to the same program what it removed. This happens only between the extension and that program on the same computer.

**What it does not do.** It has no analytics, no advertising and no tracking. It does not read pages you do not send, does not sell or share data with anyone, and does not use data for any purpose other than the one above.

**Removing it.** Uninstalling the extension deletes everything it stored in the browser. Links already sent are in your own callimachus library, under your control.

**Changes.** A change to this policy is published at this address with a new effective date.

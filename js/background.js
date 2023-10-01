// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.url) {
        chrome.tabs.update(sender.tab.id, { url: request.url });
    }
});

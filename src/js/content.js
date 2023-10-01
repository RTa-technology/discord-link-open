// content.js
const regexDiscordURL = /^https:\/\/(ptb\.|canary\.)?discord(app)?\.com\/channels\//;

document.body.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A' && regexDiscordURL.test(target.href)) {
        e.preventDefault();
        const newUrl = target.href.replace('https://', 'discord://');
        console.log('newUrl: ', newUrl);
        chrome.runtime.sendMessage({ url: newUrl });
    }
});

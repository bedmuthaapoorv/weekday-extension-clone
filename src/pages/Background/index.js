console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.action.onClicked.addListener(async function () {
    await chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
});
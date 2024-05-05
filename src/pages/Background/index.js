// Open Popup.html when the extension button is clicked
chrome.action.onClicked.addListener(async function () {
    await chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
});
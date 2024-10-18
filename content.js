// content.js
if (!(window.location.href.startsWith("chrome://") || window.location.href.includes("mail.google.com"))) {
  const button = document.createElement('button');
  button.id = 'groupTabButton';
  button.textContent = 'Group Tab';
  document.body.appendChild(button);

  document.getElementById('groupTabButton').addEventListener('click', () => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.runtime.sendMessage({ action: 'groupTab', tabId: tabId });
    });
  });
}
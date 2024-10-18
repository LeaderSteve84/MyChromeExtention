// background.js
const hibernationTime = 30; // Minutes
const maxHistoryItems = 20; // Maximum number of history items

function checkForInactiveTabs() {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      const currentTime = Date.now();
      const lastActiveTime = tab.lastAccessed;
      const inactivityTime = (currentTime - lastActiveTime) / 60000; // Minutes

      if (inactivityTime >= hibernationTime) {
        chrome.tabs.remove(tab.id, (removedTabId) => {
            addToHistory(removedTabId);
        });
      }
    });
  });
}

function addToHistory(tabId) {
    chrome.storage.local.get('tabHistory', (result) => {
        let history = result.tabHistory || [];
        history.unshift(tabId);
	
        if (history.length > maxHistoryItems) {
          history.pop();
        }

        chrome.storage.local.set({ tabHistory: history });
    });
}

// Check if chrome.alarms is available
if (chrome.alarms) {
   chrome.alarms.create('checkInactiveTabs', { periodInMinutes: 5 });
   chrome.alarms.onAlarm.addListener((alarm) => {
       if (alarm.name === 'checkInactiveTabs') {
         checkForInactiveTabs();
       }
   });
} else {
   console.error('chrome.alarms API is not available');
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getHistory') {
      chrome.storage.local.get('tabHistory', (result) => {
         sendResponse(result.tabHistory || []);
      });
      return true; // Indicate asynchronous response
   }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'restoreTab') {
      chrome.tabs.create({ url: request.tabId }, (newTab) => {
          // Optionally, update the history to remove the restored tab
          addToHistory(newTab.id);
      });
    }
});




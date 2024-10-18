document.addEventListener('DOMContentLoaded', () => {
        chrome.runtime.sendMessage({ action: 'getHistory' }, (history) => {
              const historyList = document.getElementById('historyList');
              historyList.innerHTML = ''; // Clear existing history
              history.forEach((tabId) => {
	    const tabIdInt = parseInt(tabId, 10); // Convert tabId to integer
                    chrome.tabs.get(tabIdInt, (tab) => {
                            if (tab) {
                     	const listItem = document.createElement('li');
                     	listItem.textContent = tab.title;

	     	const restoreButton = document.createElement('button');
                     	restoreButton.textContent = 'Restore';
 	     	restoreButton.addEventListener('click', () => {
                       	       chrome.runtime.sendMessage({ action: 'restoreTab', tabId: tabId });
                      	});

                      	listItem.appendChild(restoreButton);
                      	historyList.appendChild(listItem);
                            }
              	    });
             });
       });
});

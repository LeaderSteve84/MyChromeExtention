# Tab Grouper

Tab Grouper is a custom Chrome extension designed to help you manage and organize your browser tabs more effectively. It automatically monitors inactive tabs, groups them, and allows you to restore closed tabs through a convenient tab history.

## Features

- **Inactive Tab Management**: Automatically detects and closes tabs that have been inactive for a specified time (30 minutes by default).
- **Tab History**: Stores up to 20 recently closed tabs, allowing users to review and restore them from the extension’s popup.
- **Tab Restoration**: Easily restore closed tabs directly from the tab history using the "Restore" button.
- **Background Monitoring**: Runs in the background, periodically checking for inactive tabs using Chrome alarms.

## Installation

1. Clone or download the repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the upper-right corner.
4. Click the **Load unpacked** button and select the folder containing the extension files.
5. The extension will be installed and appear in your browser’s extension toolbar.

## Usage

- **View Tab History**: Click on the extension icon to open the popup and view your tab history.
- **Restore a Tab**: In the tab history list, click the "Restore" button next to the tab you want to reopen.

## File Structure

- `manifest.json`: The manifest file that defines the extension’s permissions and settings.
- `background.js`: Contains logic for detecting and closing inactive tabs, as well as storing tab history.
- `content.js`: (Optional, if applicable) Injected script for interacting with web pages.
- `popup.html`: The user interface for the popup, displaying tab history and allowing users to restore tabs.
- `popup.js`: Handles the functionality of the popup (fetching tab history and adding restore actions).

## Permissions

- `tabs`: Required to manage browser tabs and access tab information.
- `storage`: Used for storing tab history locally.
- `alarms`: Enables periodic background checks for inactive tabs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
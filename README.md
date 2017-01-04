# Feed Reader Testing

The feed reader allows the user to access multiple RSS feeds on a single page.  The main focus of this project, however, was writing a testing program using the Jasmine JS library.

## Running Feedreader

### Getting started

Clone the following git respository - https://github.com/eryman/feed-reader-testing.git - or download the game as a zip file from [here](https://github.com/eryman/feed-reader-testing/archive/project.zip).

Once downloaded, just open the "index.html" file to use.

### Using the application

Use the menu (accessible through the burger icon) to choose an RSS feed to view.

## Testing

### RSS Feeds

This suite tests that each RSS feed in the model includes both a name and a url.

### The Menu

This suite tests a) that the menu is hidden on initial page load, and b) that the menu appears/hides when the icon is clicked.

### Initial Entries

This suite tests that an RSS feed automatically loads upon initial page load.

### New Feed Selection

This suite tests that, when an RSS feed is chosen from the menu, the page responds and properly displays the new feed.
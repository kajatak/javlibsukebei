# javlibsukebei
Browser extension/script (Chrome, Firefox, Edge) to help download torrent magnet files from sukebei.nyaa.si while browsing JAVLibrary.

# Screenshots
![javlib](https://user-images.githubusercontent.com/82695058/115248177-aa81fa80-a151-11eb-91ec-accc65e32df7.png)

# Installation

1. Download and install <a href="https://github.com/Lor-Saba/Code-Injector">Code Injector</a> (Chrome, Firefox, Edge)
2. Open JAVLibrary, click on Code Injector, Add rule, Current host, paste contents of script.js as JavaScript
3. Click Save and visit any movie page on JAVLibrary and wait for few seconds. The torrents will show up above the User Reviews section.

#Usage

5 torrents (with pagination) will automatically show up above the User Reviews section when browsing a movie page on JAVLibrary. Clicking on the torrent name will open the magnet link. You can also click on Ⓘ to open the details page on Sukebei.

Note that as the scraper API is hosted on Heroku it may take few seconds for the search results to appear on the page.

# Credits

Special thanks to:
- <a href="https://github.com/laxyapahuja/nyaamal">nyaamal</a> for the foundation of the script
- <a href="https://github.com/Vivek-Kolhe/Nyaa-API">Nyaa-API</a> for torrent scraper

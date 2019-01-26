Redux State Reader
=============================

No More dependencies on test-data/server/environment/backend/internet-connectivity.


This is a chrome extension, meant to download a file, containing, current redux state of any react app  (viz. current-state.json, initial-state.json), in any environment.

##Applications

1) QA team can upload this store state, and then, dev team can drop this in their demo local server, to debug offline, without any dependencies on PROD/QA env.
2) Dev team can speed their development, by making any changes in state, for any variations, without depending on backend team for API modifications/ test-data.
3) Dev/QA teams can share their work offline, freely, without any dependencies. 

## Installations

1) go to chrome://extensions/
2) Switch to Developer mode form top-right corner
3) click "Load unpacked" button and upload extension folder "redux-state-reader".

After this, an icon will appear on browser's top extension bar.

##Working

On any page, click on extension icon ("R"), 2 files will download (viz. current-state.json, initial-state.json), containing store states. 
PS. It works on react 16 only (can be made backward compatible though).


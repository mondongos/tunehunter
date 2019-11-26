# TuneHunter
Gets all the top-rated tunes from your favourite subreddits. 

## How it works
1. Visit first URL in _urlQueue where visited: false
2. Retrieve information from that page.
3. Identify all links on the page and add to _staticAssets as object with url and assets.
4. Change URL object visited status to true in _urlQueue
5. Go to next URL in _urlQueue and repeat from step 1.

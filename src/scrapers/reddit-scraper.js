class RedditScraper {
    constructor(startingURL) {
        this._startingURL = startingURL
        this._urlQueue = [{url: this._startingURL, visited: false}]
    }

    
}
module.exports = {RedditScraper}
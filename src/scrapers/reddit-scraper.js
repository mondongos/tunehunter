const axios = require('axios')

class RedditScraper {
    constructor(startingURL) {
        this._startingURL = startingURL
        this._urlQueue = [{url: this._startingURL, visited: false}]
    }

    findLinks(url) {
        let links = []
    } 

    async fetchPage(url) {
        try {
            let pageData = await axios.get(url)
            return pageData
        } catch (err) {
            console.log('Error: ', err)
        }
    }
}
module.exports = {RedditScraper}
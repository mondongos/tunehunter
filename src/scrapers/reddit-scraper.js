const axios = require('axios')
const cheerio = require('cheerio')


class RedditScraper {
    constructor(startingURL) {
        this._startingURL = startingURL
        this._urlQueue = [{url: this._startingURL, visited: false}]
    }
    
    findLinks(pageData) {
        let links = []
        const $ = cheerio.load(pageData.data);
        // $('body[class=_1oQyIsiPHYt6nx7VOmd1sz]').each((index, value) => {
        //     let link = $(value).attr('href')
        //    links.push(value)
        // })
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

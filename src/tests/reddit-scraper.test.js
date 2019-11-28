const {RedditScraper} = require('../scrapers/reddit-scraper')

describe('Reddit Scraper', () => {
    let scraper

    beforeEach(() => {
        scraper = new RedditScraper('https://new.reddit.com/r/listentous/top/?t=month')
    })

    test('Adds starting URL to queue', () => {
        expect(scraper._urlQueue).toEqual(
            [
                {
                    url: 'https://new.reddit.com/r/listentous/top/?t=month',
                    visited: false
                }
            ]
        )
    })

    describe('Fetching page data', () => {

        test('Fetches page successfully', async () => {
            setTimeout(20000)
            let pageData = await scraper.fetchPage('https://new.reddit.com/r/listentous/top/?t=month')
            expect(pageData.status).toEqual(200)
        })
    })

    describe('Gather data on page', () => {

        test('Find links on page', async () => {
            setTimeout(20000)
            let pageData = await scraper.fetchPage('https://new.reddit.com/r/listentous/top/?t=month')
            let linksArr = scraper.findLinks(pageData)
            expect(linksArr.length).toBeGreaterThan(1)
        })
    })
})
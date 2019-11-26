const {RedditScraper} = require('../scrapers/reddit-scraper')

describe('Reddit Scraper', () => {
    let scraper

    beforeEach(() => {
        scraper = new RedditScraper('https://www.reddit.com/r/listentous/top/?sort=top&t=month')
    })

    test('Adds starting URL to queue', () => {
        expect(scraper._urlQueue).toEqual(
            [
                {
                    url: 'https://www.reddit.com/r/listentous/top/?sort=top&t=month',
                    visited: false
                }
            ]
        )
    })
})
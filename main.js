const PORT = 8000
const axios = require('axios').default;
const cheerio = require('cheerio');
const express = require('express');

const app = express()

const url = 'https://www.theguardian.com/'

axios(url)  //useing the axios client for the url that to insert
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = [] //prints all things counted as objects as an array

        $('.fc-item__title',html).each(function(){ //finding a spefific aspect of a speafic title
           const title = $(this).text()
           const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))  




app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
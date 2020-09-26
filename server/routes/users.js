import express from 'express'
const router = express.Router()
const puppeteer = require('puppeteer')

/* GET users listing. */
router.get('/', async (req, res, next) => {

  const pup = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://gradbee.netlify.app');
    await page.screenshot({path: 'example.png'});
    await browser.close();
  }

  await pup()

  res.send('What????')
})

export default router

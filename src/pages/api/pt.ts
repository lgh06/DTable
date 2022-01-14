import type { NextApiHandler } from 'next'
import puppeteer from 'puppeteer'
import fs from 'fs'

// http://localhost:3000/api/pt
const puppeteerHandler: NextApiHandler = async (request, response) => {
  const { amount = 1 } = request.body

  const now = Date.now();
  // https://github.com/puppeteer/puppeteer#usage
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // https://github.com/puppeteer/puppeteer/blob/v13.0.1/docs/api.md#pagesetviewportviewport
  await page.setViewport({
    width: 1902,
    height: 1080,
    deviceScaleFactor: 1,
  });
  await page.goto('http://www.yuanyang.gov.cn/channels/443.html');
  await page.screenshot({ path: `public/shots/${now}.png` });

  await browser.close();

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  // response.json({ data: amount })
  const imageBuffer = fs.readFileSync(`public/shots/${now}.png`)
  response.setHeader('Content-Type', 'image/png');
  response.setHeader('Content-disposition', `attachment; filename=${now}.png`)
  // response.setHeader('Content-disposition', `inline; filename=${now}.png`)
  response.send(imageBuffer)
}

export default puppeteerHandler

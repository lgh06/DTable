import type { NextApiHandler } from 'next'
import puppeteer from 'puppeteer'

// http://localhost:3000/api/pt
const puppeteerHandler: NextApiHandler = async (request, response) => {
  const { amount = 1 } = request.body


  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.yuanyang.gov.cn/channels/443.html');
  await page.screenshot({ path: 'public/shots/example.png' });

  await browser.close();

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  response.json({ data: amount })
}

export default puppeteerHandler

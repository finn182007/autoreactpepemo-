const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com');

  // Login to Facebook
  // Add code to select the post and react to it automatically

  await browser.close();
})();

const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:80', { waitUntil: 'networkidle0' }); // Change the URL to your React app's URL
  await page.pdf({
    path: '/Users/marwajam/Desktop/resume.pdf', // Output file path
    format: 'A4', // Format
  });

  await browser.close();
  console.log('PDF generated!');
}

generatePDF();

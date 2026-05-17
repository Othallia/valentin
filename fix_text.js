const fs = require('fs');
let c = fs.readFileSync('src/pages/JourneyPage.jsx', 'utf8');
c = c.replace('Our Bucket List', 'Bucket List Kita');
c = c.replace(
  "It's not just about the destination, it's about who I'm with. Here's to ticking these off, one by one.",
  'bukan soal mau ke mana, tapi soal bareng siapa. satu-satu kita coret.'
);
fs.writeFileSync('src/pages/JourneyPage.jsx', c);
console.log('done');

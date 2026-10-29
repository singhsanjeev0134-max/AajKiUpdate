# AajKiUpdate — Hindi Information Website

यह एक responsive, static HTML/CSS/JavaScript starter website है। इसे GitHub Pages जैसी static hosting पर मुफ्त में host किया जा सकता है। इसमें किसी build tool या package install की जरूरत नहीं है।

## क्या शामिल है?
- Home page और अलग pages: सरकारी नौकरी, योजनाएँ, मौसम, राशिफल, सुविचार, हिंदी गाइड
- About, Contact, Privacy Policy, Disclaimer, Affiliate Disclosure
- Mobile-friendly responsive design
- Menu toggle, आज की तारीख, copyright year और daily thought rotation
- Official source links और job-post verification checklist
- Ad placement placeholders
- कोई backend, paid API या API key आवश्यक नहीं

## जरूरी सीमाएँ — publish करने से पहले पढ़ें
1. **यह live-data website नहीं है।** इसमें automatic live job feed या live weather API नहीं जुड़ी है। कोई current vacancy, live temperature या daily forecast गढ़कर नहीं दिखाया जाता।
2. सरकारी भर्ती की पोस्ट manually official notification से verify करके जोड़नी होगी।
3. Rashifal page पर 12 राशियों की structure है, verified daily horoscope feed नहीं।
4. AdSense publisher ID, approval, privacy requirements और ads code अलग से configure करने होंगे। AdSense approval की guarantee नहीं है।
5. Affiliate links अभी configured नहीं हैं। Affiliate program में approval लेकर, relevant links और clear disclosure जोड़ें।
6. Contact page में form backend नहीं है। `assets/js/config.js` में अपना public contact email डालें; चाहें तो अलग form service configure करें।
7. Privacy Policy एक starter template है। अपनी वास्तविक services, cookies, analytics, ads और लागू नियमों के अनुसार इसे edit करें।
8. यह project production में error-free होने की absolute guarantee नहीं दे सकता; publish से पहले सभी pages, links, phone layouts और legal details जाँचें।

## Local preview
- ZIP extract करें।
- `index.html` पर double-click करें या VS Code में folder खोलें।
- बेहतर preview के लिए VS Code का Live Server extension इस्तेमाल कर सकते हैं; यह वैकल्पिक है।

## Free publishing with GitHub Pages
1. GitHub account बनाएं / sign in करें: https://github.com/
2. नया public repository बनाएं, उदाहरण: `aajkiupdate`.
3. ZIP extract करें और **अंदर की files/folders** repository में upload करें; ZIP file को अकेले upload करने से website नहीं चलेगी।
4. Repository → Settings → Pages खोलें।
5. Deploy from a branch चुनें, branch `main`, folder `/(root)` चुनकर Save करें।
6. GitHub द्वारा दिया गया published URL खोलें। Publish होने में कुछ मिनट लग सकते हैं।
7. Custom domain optional है और आमतौर पर domain खरीदने पर खर्च आता है।

GitHub Pages की current terms/limits publish करने से पहले official docs पर जाँचें: https://docs.github.com/pages

## Update content
- सामान्य article के लिए नया HTML page copy करके title, description, content और menu links update करें।
- सभी internal links relative रखे गए हैं, जैसे `jobs.html`, इसलिए उसी folder structure को बनाए रखें।
- किसी भर्ती की पोस्ट बनाते समय विभाग, notification number, issue date, eligibility, age limit, fees, application dates, official notification URL, official apply URL और last-checked timestamp verify करें।
- पुराने posts को “आवेदन बंद” जैसे status से update करें।
- Official pages के text/graphics को copy करने के बजाय facts को अपने शब्दों में समझाएँ और source link दें।

## AdSense setup
1. अपनी original, useful content वाली site तैयार करें।
2. AdSense eligibility और program policies पढ़ें: https://support.google.com/adsense/
3. Approval के बाद AdSense dashboard से मिला publisher ID और official ad code ही इस्तेमाल करें।
4. `assets/js/config.js` में `adsenseClient` सिर्फ reference के लिए है; अभी यह project उस setting से ads automatically inject नहीं करता। Official AdSense code अपने site template में सही जगह जोड़ना होगा।
5. Ad placement और privacy disclosures को Google की current policies के अनुसार रखें।

## Affiliate setup
- संबंधित affiliate network/program की terms पढ़ें और apply करें।
- Approval से पहले link को affiliate link के रूप में पेश न करें।
- हर relevant post/page पर clear disclosure रखें।
- Fake discounts, unverified claims या misleading product recommendations न दें.

## Weather / automated jobs
Real-time weather के लिए भरोसेमंद API, terms review और backend/proxy या secure serverless function की जरूरत पड़ सकती है। Secret API key को browser-side JavaScript में न रखें।
Government jobs के लिए हर board का official API/feed उपलब्ध नहीं होता। बिना permission scraping या unverified auto-posting न करें। Best first version: verified manual posts + draft automation.

## Project files
- `index.html`: homepage
- `jobs.html`, `schemes.html`, `weather.html`, `rashifal.html`, `thoughts.html`, `guides.html`: topic pages
- `about.html`, `contact.html`, `privacy.html`, `disclaimer.html`, `affiliate-disclosure.html`: policy and info pages
- `assets/css/style.css`: responsive design
- `assets/js/app.js`: menu/date/thought behavior
- `assets/js/config.js`: basic configuration
- `assets/img/favicon.svg`: site icon

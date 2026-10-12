# Sana (Shana) Birthday Surprise 🎀

A responsive, interactive birthday website made with plain HTML, CSS, and JavaScript. It is designed for free static hosting (GitHub Pages, Netlify Drop, Cloudflare Pages static sites).

## Birthday
October 22, 2026.

## Included
- Pink magical design, responsive on phones and desktops
- Countdown timer to the birthday
- Interactive cake candles and wish button
- Confetti/hearts effect
- A heartfelt birthday letter
- Personal photo gallery with tap-to-enlarge viewer
- Local MP3 player for “Guzarish” by Satinder Sartaaj (`assets/guzarish.mp3`); visitors tap Play
- Your uploaded photos in `assets/`
- Optional uploaded video at `assets/birthday-memory.mp4` (if present)

## Preview locally
Open `index.html` in a browser. For best results, use a static local server or publish the folder.

## Publish with GitHub Pages
1. Extract this ZIP.
2. Upload the contents of this folder (the `index.html`, `style.css`, `script.js`, and `assets` folder) to the root of your GitHub repository.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then Save.
6. Wait for the Pages URL to appear. Open it on your phone to test.

This is a plain static site: no build command, no install command, and no framework input directory are needed. For a static GitHub Pages branch deployment, select the repository root.

## Personalize the letter
Open `index.html` and edit the paragraphs inside `<article class="letter">`. Replace “Your sibling” with your name or your preferred sign-off.

## Replace or add photos
Current photos are in `assets/`. Gallery cards in `index.html` use image paths like `assets/shana-01.jpg`. To change a photo, replace the corresponding file while keeping the same filename, or update both `src` and `data-full` in the relevant gallery button. Keep filenames simple and use lowercase letters/numbers/hyphens.

## Notes
- “Guzarish” is played from the bundled file `assets/guzarish.mp3`. Keep the MP3 in the `assets` folder when uploading the site. Make sure you have permission to use/distribute the audio.
- No analytics, forms, paid services, server, API key, or account connection are used.
- Please share the site and family photos thoughtfully; anyone with the public website link may be able to view its contents.


Secret letter: enter `little princess` (case-insensitive) in the secret-letter section. The signature is from Ahsan.

# TODO: Add Global Header and Footer with Side Menu

## Steps to Complete

1. **Update index.html**:
   - Add `<header>` at the top of `<body>`: Fixed top, with left hamburger button (`<button id="hamburger">☰</button>`) and centered text "Tarun & Kriti".
   - Add side menu `<nav id="sideMenu">` (hidden initially): Fixed left, 50% width, with links: "Venue" (href="https://www.google.com/maps" target="_blank" – placeholder for current location) and "About us" (href="https://raayacreations.onrender.com" target="_blank").
   - Add `<footer>` at the bottom of `<body>`: Fixed bottom, with text "© 2025 | All rights reserved".
   - Wrap existing content (videos, hearts) in `<main>` for better structure and blur isolation if needed.
   - Ensure no static venue button.

2. **Update style.css**:
   - Add header styles: Fixed top, semi-transparent background, z-index 10.
   - Hamburger: Absolute left positioning, white icon.
   - Center text: Absolute center, white, bold.
   - Side menu: Fixed left off-screen, slide in to 0 on open, semi-transparent black background, z-index 20, vertical list of links.
   - Blur: On menu open, apply `filter: blur(5px)` to body, but use an overlay or adjust z-index to keep menu sharp.
   - Footer: Fixed bottom, semi-transparent, centered text, z-index 5.
   - Remove `#venueButton` styles.
   - Adjust z-index for existing elements (e.g., hearts z-index 3, below header).

3. **Update script.js**:
   - Remove duplicate `handleHeartClick` functions; keep the final version with 'AUDIO/song.mp3' and remove the `showVenueButton()` call.
   - Add JS for menu toggle: Select hamburger and sideMenu, add click listener to toggle 'open' class on sideMenu and 'menu-open' on body.
   - Optional: Close menu on outside click or link navigation.
   - Ensure heart interactions remain unchanged.

4. **Testing**:
   - Use browser_action to launch index.html.
   - Verify: Hamburger opens/closes menu (50% width, slide effect), background blurs (not menu), links work, header text centered, footer visible.
   - Check hearts/video/audio flow works without venue button.
   - Test responsiveness (mobile: menu width adapts).
   - If issues, debug via console logs or further edits.

5. **Global Application**:
   - Propose similar updates for scene2.html if needed (after confirmation).

Progress: [x] Step 1 [x] Step 2 [x] Step 3 [x] Step 4 [x] Step 5

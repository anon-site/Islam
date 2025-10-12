# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an **Islamic Prayer Times Web Application** built as a single-page HTML application. It displays:
- Real-time digital clock
- Prayer times for any city worldwide
- Hijri (Islamic) calendar date
- Countdown timer to the next prayer
- Islamic supplications (duas) for when the adhan is heard
- Customizable UI (background, colors, zoom level)

The application is written entirely in a single `index.html` file containing:
- **HTML structure** for the layout
- **Embedded CSS** for styling (lines 11-907)
- **Embedded JavaScript** for all application logic (lines 909-1267)

## Common Commands

### Development Server
Since this is a static HTML file, you can serve it locally with any HTTP server:

```powershell
# Using Python (if installed)
python -m http.server 8000

# Using Node.js http-server (if installed)
npx http-server -p 8000

# Using PHP (if installed)
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Testing
Open `index.html` directly in any modern web browser to test functionality.

### Version Control
```powershell
# Check current status
git status

# Stage changes
git add index.html

# Commit changes
git commit -m "Description of changes"

# Push to remote
git push origin main
```

## Architecture & Key Concepts

### Single-File Architecture
All code resides in `index.html`:
- **CSS Styles**: Lines 11-907 (embedded in `<style>` tags)
- **JavaScript Logic**: Lines 909-1267 (embedded in `<script>` tags)
- **HTML Structure**: Lines 373-451 (main body content)

### API Integration
The app uses the **Aladhan Prayer Times API** (https://api.aladhan.com) for:
1. **Prayer Times**: `GET /v1/calendar/{year}/{month}?latitude={lat}&longitude={lon}&method=4`
2. **City Search**: `GET /v1/timingsByCity?city={city}&country={country}&method=4`
3. **Hijri Date Conversion**: `GET /v1/gToH?date={day}-{month}-{year}`

No API keys required; all endpoints are public.

### JavaScript Modules

#### 1. Clock & Date System (lines 931-969)
- `updateClockAndDate()`: Updates digital clock every second
- `getHijriDate(date)`: Fetches Islamic calendar date from API

#### 2. Prayer Times System (lines 972-1012)
- `getPrayerTimes(lat, lon, cityDisplay)`: Fetches and displays prayer times for given coordinates
- Uses `PRAYER_ORDER` constant: `["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"]`
- Stores times in `prayerTimesData` global object

#### 3. Next Prayer & Countdown (lines 1014-1084)
- `updateNextPrayerCountdown(forceUpdate)`: Calculates time until next prayer
- Highlights the next prayer card with `.highlight` CSS class
- Automatically refreshes prayer times at midnight

#### 4. City Search (lines 1087-1126)
- `searchCity(cityName)`: Searches for city and updates coordinates
- Accepts format: `"City, Country"` (e.g., "London, UK")
- Enter key in search input triggers search

#### 5. Customization Settings (lines 1136-1266)
- Background image URL (saved to `localStorage`)
- Color schemes (3 presets: green, blue, red)
- Zoom level (50%-100%, affects all font sizes proportionally)
- Reset button restores defaults

### CSS Architecture

#### CSS Variables (lines 17-29)
```css
--primary-color: #4CAF50;    /* Main green accent */
--secondary-color: #FFC107;  /* Gold/yellow for times */
--highlight-color: #E91E63;  /* Pink for next prayer */
--background-color: #1a1a2e; /* Dark blue base */
--card-color: rgba(255, 255, 255, 0.08); /* Glassmorphism effect */
```

#### Responsive Design (lines 296-370)
Mobile breakpoint at `@media (max-width: 768px)`:
- Clock size reduced from 8rem to 2.8rem
- Prayer cards switch to 2-column grid
- Padding and gaps minimized
- Search input width adjusted to 95%

#### Key CSS Techniques
- **Glassmorphism**: `backdrop-filter: blur(10px)` on cards and inputs
- **Gradient borders**: Using pseudo-elements (`:before`) with mask-composite
- **Hover animations**: `transform: translateY(-5px)` with transitions
- **Dynamic zoom**: `body[data-zoom]` attribute controls font sizes via CSS

### State Management
All state stored in:
1. **Global Variables** (lines 916-928):
   - `currentCity`: Display name of current location
   - `defaultLatitude` / `defaultLongitude`: Current coordinates
   - `prayerTimesData`: Object containing all prayer times
   
2. **localStorage**:
   - `custom-bg`: User's custom background image URL
   - `color-scheme`: JSON object of current color scheme
   - `zoom-level`: Integer percentage (50-100)

### Event Flow
```
Page Load
  → Load localStorage settings (bg, colors, zoom)
  → Initialize clock interval (1000ms)
  → Fetch prayer times for Athens (default)
  → Fetch Hijri date
  
User Types City
  → Enter key pressed
  → searchCity() called
  → Fetch coordinates from API
  → Fetch prayer times for new coordinates
  → Update UI
  
Every Second
  → updateClockAndDate()
  → updateNextPrayerCountdown()
  → Check if midnight → refresh prayer times
```

## Important Implementation Details

### Prayer Time Parsing
- API returns times as "HH:MM (TZ)" format
- Code uses `.substring(0, 5)` to extract "HH:MM" only (line 995)

### Midnight Refresh Logic
If current time is exactly `00:00:00`, the app:
1. Fetches new Hijri date (line 944)
2. Refreshes prayer times on next countdown check (line 1077)

### Countdown Edge Case
If all prayers passed for today, countdown automatically shows tomorrow's Fajr (lines 1047-1055)

### Settings Panel Toggle
- Click settings button → panel slides up
- Click outside panel → panel closes (lines 1143-1150)

### RTL (Right-to-Left) Support
- `<html lang="ar" dir="rtl">` enables Arabic text direction
- English dates/times use `direction: ltr` override
- Font families: Cairo (Arabic), Roboto (English numbers)

## Working with This Codebase

### To Add a New Prayer
1. Add entry to `PRAYER_NAMES_AR` object (line 920-927)
2. Add to `PRAYER_ORDER` array (line 928)
3. Add HTML card in `<div class="prayer-times-container">` (lines 393-418)
4. API will automatically return the time if method supports it

### To Add a New Color Scheme
Add object to `colorSchemes` array (lines 1200-1204):
```javascript
{ name: 'نيلي', primary: '#3F51B5', secondary: '#FFC107', highlight: '#FF5722' }
```

### To Modify Prayer Calculation Method
Change `method=4` parameter in API URLs (lines 981, 1095):
- Method 4: Umm Al-Qura University, Makkah
- Method 2: Islamic Society of North America (ISNA)
- Method 3: Muslim World League
- See [Aladhan Docs](https://aladhan.com/prayer-times-api#GetCalendarByCitymethods) for full list

### To Adjust Responsive Breakpoint
Modify the `@media (max-width: 768px)` value at line 296 to target different screen sizes.

### To Add Persistent User Location
Currently app reverts to Athens on reload. To persist:
```javascript
// After line 1110, add:
localStorage.setItem('saved-city', currentCity);
localStorage.setItem('saved-lat', defaultLatitude);
localStorage.setItem('saved-lon', defaultLongitude);

// In window.addEventListener('load'), after line 1226, add:
const savedCity = localStorage.getItem('saved-city');
const savedLat = localStorage.getItem('saved-lat');
const savedLon = localStorage.getItem('saved-lon');
if (savedCity && savedLat && savedLon) {
    currentCity = savedCity;
    defaultLatitude = parseFloat(savedLat);
    defaultLongitude = parseFloat(savedLon);
}
```

## File Structure

```
Islam/
├── index.html          # Entire application (HTML + CSS + JS)
├── favicon.ico         # Icon file (Kaaba icon from icons8)
└── WARP.md            # This file
```

## Default Configuration

- **Default Location**: Athens, Greece (37.9838°N, 23.7275°E)
- **Calculation Method**: Umm Al-Qura (method=4)
- **Default Colors**: Green (#4CAF50), Gold (#FFC107), Pink (#E91E63)
- **Default Background**: Islamic mosque pattern from pikbest.com
- **Default Zoom**: 100%

## Browser Compatibility

Requires modern browser with support for:
- CSS Grid
- CSS Custom Properties (variables)
- `backdrop-filter` (for glassmorphism)
- Fetch API
- localStorage
- ES6 JavaScript (const, let, arrow functions, template literals)

Tested on: Chrome, Firefox, Edge, Safari (iOS/macOS)

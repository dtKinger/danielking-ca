# danielking.ca - a portfolio site

## Key Learnings:
- Think how to reward a dekstop++ screen size user... I chose to selectively reveal content, not bombard them.
- Think what, if any, content is superfluous on tablet and mobile.
- This was my first time adding a dark mode / light mode setting to a theme. My site detects the OS preference between the two and loads that.

## Reminders:
- Media queries
- CSS Grid
- Flexbox
- localStorage

## Third-party resources:
- Github calendar embedded thanks to  [ghchart.rshah.org/](https://ghchart.rshah.org/)
- HTML/CSS wordcloud generator by [Jason Davies](https://www.jasondavies.com/wordcloud/)

## To do items:
- On mobile, the filter: invert(1) doesn't work on the external-link SVG icons.
- Adjusting my scrollTo by a fixed pixel amount to counter the sticky header is unbalanced across viewport widths. Need to use a variable window.ScrollY instead of a fixed 120px; 
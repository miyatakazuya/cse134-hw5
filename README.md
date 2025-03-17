# kazuya-miyata.github.io

Personal Website for CSE134B

## Changelog
**HTML Improvements:**
- Replaced `footer` with custom element `footer-nav`. 
- Enforced usage of different header types because I was overusing `<h2>` for presentational purposes, so I replaced many of them with `<h3>` or `<h4>`.

**CSS Improvements:**
- Edited margins of Project Pages to align with header properly. 
- Changed custom font to use font-face, with fallback to a serif or sans serif font so there is a default font at all times.
- Improved Button Hover animations using better colors to suit the new color themes.

**JS Improvements:**
- Created an additional new element `footer-nav`, which replaces the old footers in each page. This was done because the same exact html was repeated through each page, and I though creating a new html element would make editing the nav easier in the future, as well as remove repeated markup throughout the pages.
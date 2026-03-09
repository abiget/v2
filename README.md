# abiget.github.io

Personal portfolio (academic + professional).

## Contact form (GitHub Pages)

The contact form uses [Formspree](https://formspree.io) so it works without any server (static GitHub Pages).

1. Sign up at [formspree.io](https://formspree.io) (free tier is enough).
2. Create a new form and copy your form ID (e.g. `xjvqeqez`).
3. In `index.html`, replace `YOUR_FORM_ID` in the form `action` with your ID:
   - Find: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Use: `action="https://formspree.io/f/xjvqeqez"` (your ID).
4. Formspree will email you when someone submits the form.

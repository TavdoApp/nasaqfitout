NASAQ website — deployment handoff

This package contains the complete editable static website in dist/.
No Node dependencies or build step are required. Edit the HTML, CSS and JavaScript directly.

Antigravity / Gemini instructions:
1. Preserve the existing design, logo proportions, images and content. Do not rebuild it.
2. Inspect the owner's existing GitHub repositories and Cloudflare projects before creating duplicates. Back up existing website files before replacing them.
3. Push this website to the owner's chosen GitHub repository. Deploy with Cloudflare Pages: framework None, build command exit 0, output directory dist.
4. Confirm the owner's production domain before changing DNS. Replace https://nasaq-interiors.ossamatbili.chatgpt.site in all HTML canonical links, JSON-LD, sitemap.xml and robots.txt with the confirmed HTTPS production origin.
5. Connect the confirmed domain through Cloudflare Pages and verify HTTPS and any www redirect.
6. Test all 14 pages, mobile menu, telephone/email links, sitemap, images, and WhatsApp enquiry summary.
7. Keep the licence number/documents and private residential address excluded.

Important product details:
- Contact: +971 50 533 4861; ossamatbili@gmail.com; Instagram @nasaq.fitout.
- Villa and office images are AI-generated architectural 3D concepts, not completed NASAQ projects. Preserve that distinction.
- The form opens WhatsApp with project details for the visitor to review and send. It does not upload files, send emails or store data. Drawings/BOQs can be sent directly in WhatsApp.
- Website is currently English. No Arabic language toggle or translated pages are implemented.
- Local asset/link/heading checks and JavaScript syntax checks passed. Full browser and visitor testing is still needed before public launch.
- This export excludes ChatGPT Sites identity, Git credentials and internal deployment metadata.

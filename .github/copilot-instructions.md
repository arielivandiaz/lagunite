Always write the code and comments in English.

When working inside `lagunite-web` (Astro app), follow a framework-first approach:
- Prefer existing classes from the Lagunite framework source in `src/css`.
- If a needed pattern does not exist, add it to the framework source (`src/css/**`) first, then use those classes in Astro components.
- Do not run framework build commands only to update `dist/**` during routine Astro work.
- Update `dist/**` only when explicitly requested, or as part of an intentional release/build step.
- Keep Astro layout/component files focused on structure, content, and minimal interaction logic; avoid large local style blocks when the style belongs to reusable framework patterns.
- Use `08-organisms` for app-level structures (navbar/sidebar/shell) and `06-molecules` for smaller reusable UI clusters.

When editing navbar/header styles:
- Prefer `.navbar*` class selectors over global `header` tag selectors.
- Do not apply global spacing rules to all `header` elements.
- If global header spacing is required, scope it safely:
	`header:not(.navbar):not(.doc-navbar-overlay)`



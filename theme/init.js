const darkThemes = ['ayu', 'navy', 'coal'];
const lightThemes = ['light', 'rust'];

function initMermaid() {
    const classList = document.getElementsByTagName('html')[0].classList;

    let lastThemeWasLight = true;
    for (const cssClass of classList) {
        if (darkThemes.includes(cssClass)) {
            lastThemeWasLight = false;
            break;
        }
    }

	// Simplest way to make mermaid re-render the diagrams in the new theme is via refreshing the page
	for (const darkTheme of darkThemes) {
		document.getElementById(darkTheme).addEventListener('click', () => {
			if (lastThemeWasLight) {
				window.location.reload();
			}
		});
	}

	for (const lightTheme of lightThemes) {
		document.getElementById(lightTheme).addEventListener('click', () => {
			if (!lastThemeWasLight) {
				window.location.reload();
			}
		});
	}

	// If the theme is set automatically, we can't check whether it will be light or dark
	document.getElementById('default_theme').addEventListener('click', () => {
		window.location.reload();
	});

    const theme = lastThemeWasLight ? 'default' : 'dark';

	mermaid.initialize({
		startOnLoad: true,
		theme: theme,
	});
}

initMermaid();

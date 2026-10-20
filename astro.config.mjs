// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.theosplace.org',
  // Genera una carpeta por pagina => URLs limpias sin .html
  build: { format: 'directory' },
});

// Índice editable: [texto visible en el lateral, ruta del archivo Markdown].
// Añade una pareja aquí para incorporar otra página al curso.
const paginas = [
  ["Introducción", "contenido.md"],
  ["Ejemplos de uso", "ejemplos-de-uso.md"],
  ["Ejercicios prácticos", "ejercicios.md"],
  ["NumPy", "NumPy/NumPy.md"],
  ["Pandas", "Pandas/Pandas.md"],
  ["Matplotlib", "Matplotlib/Matplotlib.md"],
  ["Scikit-learn", "Scikit-learn/Scikit-learn.md"],
  ["OpenCV", "OpenCV/OpenCV.md"],
  ["TensorFlow", "TensorFlow/TensorFlow.md"],
  ["Ejercicios · NumPy", "NumPy/ejercicios_numPy.md"],
  ["Chuleta · NumPy", "NumPy/chuleta.md"],
  ["Chuleta · Pandas", "Pandas/chuleta.md"],
  ["Chuleta · Matplotlib", "Matplotlib/chuleta.md"],
  ["Chuleta · Scikit-learn", "Scikit-learn/chuleta.md"],
  ["Chuleta · OpenCV", "OpenCV/chuleta.md"],
  ["Chuleta · TensorFlow", "TensorFlow/chuleta.md"]
];

const baseUrl = new URL("./", window.location.href);
const paginaPorRuta = new Map(paginas.map(([texto, ruta], indice) => [ruta, { texto, indice }]));
const el = (id) => document.getElementById(id);
const nav = el("course-nav");
const content = el("lesson-content");
const converter = new showdown.Converter({ tables: true, ghCodeBlocks: true, ghCompatibleHeaderId: true, strikethrough: true });
let currentPath = null;
let pendingRequest = null;

const appearanceStorageKey = "ml-course-appearance";
const readingScales = [0.85, 1, 1.15, 1.3];
const appearanceDefaults = {
  theme: "light", style: "agil", scale: 1,
  highContrast: false, underlineLinks: true, spaciousReading: false, reduceMotion: false
};

function readAppearance() {
  try {
    const saved = JSON.parse(localStorage.getItem(appearanceStorageKey) ?? "null");
    return {
      theme: saved?.theme === "dark" ? "dark" : appearanceDefaults.theme,
      style: ["agil", "literatura", "programacion", "pop-culture"].includes(saved?.style) ? saved.style : appearanceDefaults.style,
      scale: readingScales.includes(saved?.scale) ? saved.scale : appearanceDefaults.scale,
      highContrast: saved?.highContrast === true,
      underlineLinks: saved?.underlineLinks !== false,
      spaciousReading: saved?.spaciousReading === true,
      reduceMotion: saved?.reduceMotion === true
    };
  } catch (error) {
    console.warn("No se pudieron cargar las preferencias de apariencia.", error);
    return { ...appearanceDefaults };
  }
}

const appearance = readAppearance();

function saveAppearance() {
  try {
    localStorage.setItem(appearanceStorageKey, JSON.stringify(appearance));
  } catch (error) {
    console.warn("No se pudieron guardar las preferencias de apariencia.", error);
  }
}

function applyAppearance() {
  const root = document.documentElement;
  root.dataset.theme = appearance.theme;
  root.dataset.style = appearance.style;
  root.dataset.contrast = appearance.highContrast ? "high" : "normal";
  root.dataset.links = appearance.underlineLinks ? "underlined" : "normal";
  root.dataset.reading = appearance.spaciousReading ? "spacious" : "normal";
  root.dataset.motion = appearance.reduceMotion ? "reduced" : "normal";
  root.style.setProperty("--reading-scale", appearance.scale);
  el("style-select").value = appearance.style;
  el("high-contrast").checked = appearance.highContrast;
  el("underline-links").checked = appearance.underlineLinks;
  el("spacious-reading").checked = appearance.spaciousReading;
  el("reduce-motion").checked = appearance.reduceMotion;
  el("text-size-label").textContent = `${Math.round(appearance.scale * 100)}%`;
  el("text-smaller").disabled = appearance.scale === readingScales[0];
  el("text-larger").disabled = appearance.scale === readingScales[readingScales.length - 1];
  const darkMode = appearance.theme === "dark";
  el("theme-toggle").textContent = darkMode ? "Activar modo claro" : "Activar modo oscuro";
  el("theme-toggle").setAttribute("aria-pressed", String(darkMode));
}

applyAppearance();
el("style-select").addEventListener("change", (event) => {
  appearance.style = event.currentTarget.value;
  applyAppearance();
  saveAppearance();
});
el("theme-toggle").addEventListener("click", () => {
  appearance.theme = appearance.theme === "dark" ? "light" : "dark";
  applyAppearance();
  saveAppearance();
});
for (const [id, direction] of [["text-smaller", -1], ["text-larger", 1]]) {
  el(id).addEventListener("click", () => {
    const currentIndex = readingScales.indexOf(appearance.scale);
    const nextIndex = Math.min(readingScales.length - 1, Math.max(0, currentIndex + direction));
    appearance.scale = readingScales[nextIndex];
    applyAppearance();
    saveAppearance();
  });
}
for (const [id, key] of [
  ["high-contrast", "highContrast"],
  ["underline-links", "underlineLinks"],
  ["spacious-reading", "spaciousReading"],
  ["reduce-motion", "reduceMotion"]
]) {
  el(id).addEventListener("change", (event) => {
    appearance[key] = event.currentTarget.checked;
    applyAppearance();
    saveAppearance();
  });
}

function pageUrl(path, hash = "") {
  const url = new URL(window.location.href);
  url.searchParams.set("doc", path);
  url.hash = hash;
  return url;
}

function navGroup(title, items) {
  const section = document.createElement("div");
  section.className = "nav-group";
  const heading = document.createElement("h2");
  heading.textContent = title;
  section.append(heading);
  for (const [label, path] of items) {
    const link = document.createElement("a");
    link.href = pageUrl(path);
    link.dataset.path = path;
    link.innerHTML = `<span class="nav-icon" aria-hidden="true">${title === "Práctica y consulta" ? "⌘" : title === "Empieza aquí" ? "◌" : "◈"}</span><span></span>`;
    link.lastElementChild.textContent = label;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(path);
    });
    section.append(link);
  }
  nav.append(section);
}

navGroup("Empieza aquí", paginas.slice(0, 3));
navGroup("Bibliotecas", paginas.slice(3, 9));
navGroup("Práctica y consulta", paginas.slice(9));

function setActive(path) {
  for (const link of nav.querySelectorAll("a[data-path]")) {
    const active = link.dataset.path === path;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  }
}

function safeUrl(raw, sourceUrl) {
  try {
    const resolved = new URL(raw, sourceUrl);
    // Al abrir index.html como archivo, las imágenes deben seguir apuntando
    // únicamente a archivos dentro de la carpeta del curso.
    if (resolved.protocol === "file:") {
      return baseUrl.protocol === "file:" && resolved.pathname.startsWith(baseUrl.pathname) ? resolved : null;
    }
    if (!["http:", "https:", "mailto:"].includes(resolved.protocol)) return null;
    return resolved;
  } catch {
    return null;
  }
}

// Showdown convierte Markdown a HTML. Esta lista conserva solo elementos de lectura.
function sanitize(html, sourceUrl) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const allowed = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "A", "IMG", "UL", "OL", "LI", "STRONG", "EM", "DEL", "CODE", "PRE", "BLOCKQUOTE", "TABLE", "THEAD", "TBODY", "TR", "TH", "TD", "HR", "BR", "SPAN", "DIV", "DETAILS", "SUMMARY"]);
  const attributes = new Set(["href", "src", "alt", "title", "id", "class", "colspan", "rowspan", "align", "width", "height"]);
  for (const node of [...template.content.querySelectorAll("*")].reverse()) {
    if (["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "FORM", "SVG", "MATH"].includes(node.tagName)) {
      node.remove();
      continue;
    }
    if (!allowed.has(node.tagName)) {
      node.replaceWith(...node.childNodes);
      continue;
    }
    for (const attr of [...node.attributes]) {
      if (!attributes.has(attr.name)) node.removeAttribute(attr.name);
    }
    for (const attr of ["href", "src"]) {
      const value = node.getAttribute(attr);
      if (value && !safeUrl(value, sourceUrl)) node.removeAttribute(attr);
    }
  }
  return template.content;
}

function localPath(url) {
  if (url.origin !== baseUrl.origin || !url.pathname.startsWith(baseUrl.pathname)) return null;
  return decodeURIComponent(url.pathname.slice(baseUrl.pathname.length));
}

function fixLinks(article, sourceUrl) {
  for (const image of article.querySelectorAll("img")) {
    const raw = image.getAttribute("src");
    const target = raw && safeUrl(raw, sourceUrl);
    if (target) image.src = target.href;
    image.loading = "lazy";
  }
  for (const link of article.querySelectorAll("a[href]")) {
    const target = safeUrl(link.getAttribute("href"), sourceUrl);
    if (!target) {
      link.removeAttribute("href");
      continue;
    }
    const path = localPath(target);
    if (path && paginaPorRuta.has(path)) {
      link.href = pageUrl(path, target.hash);
      link.addEventListener("click", (event) => {
        event.preventDefault();
        navigate(path, target.hash);
      });
    } else if (path && path.endsWith(".ipynb")) {
      link.href = target.href;
      link.download = path.split("/").pop();
      link.title = "Descargar notebook para abrirlo en Jupyter o VS Code";
    } else if (target.origin !== baseUrl.origin) {
      link.href = target.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = target.href;
    }
  }
}

function enhanceTables(article) {
  for (const table of article.querySelectorAll("table")) {
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", "Tabla desplazable horizontalmente");
    wrapper.tabIndex = 0;
    const hint = document.createElement("p");
    hint.className = "table-hint";
    hint.textContent = "Desliza la tabla para ver más columnas →";
    table.before(hint, wrapper);
    wrapper.append(table);
  }
}

const pythonKeywords = new Set([
  "and", "as", "assert", "async", "await", "break", "class", "continue",
  "def", "del", "elif", "else", "except", "finally", "for", "from",
  "global", "if", "import", "in", "is", "lambda", "match", "nonlocal",
  "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"
]);
const pythonBuiltins = new Set([
  "abs", "all", "any", "bin", "bool", "bytearray", "bytes", "callable",
  "chr", "classmethod", "compile", "complex", "dict", "dir", "divmod",
  "enumerate", "filter", "float", "format", "frozenset", "getattr",
  "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance",
  "issubclass", "iter", "len", "list", "map", "max", "memoryview", "min",
  "next", "object", "oct", "open", "ord", "pow", "print", "property",
  "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted",
  "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"
]);
const pythonTokenPattern = /\s+|#[^\r\n]*|(?:[rRuUbBfF]{1,2})?(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[bB][01](?:_?[01])*|0[oO][0-7](?:_?[0-7])*|\d(?:_?\d)*(?:\.(?:\d(?:_?\d)*)?)?(?:[eE][+-]?\d(?:_?\d)*)?j?|\.\d(?:_?\d)*(?:[eE][+-]?\d(?:_?\d)*)?j?)\b|[A-Za-z_]\w*|[^\s]/gy;

function highlightPython(code) {
  const source = code.textContent;
  const fragment = document.createDocumentFragment();
  let cursor = 0;
  pythonTokenPattern.lastIndex = 0;

  while (pythonTokenPattern.lastIndex < source.length) {
    const match = pythonTokenPattern.exec(source);
    if (!match) {
      pythonTokenPattern.lastIndex += 1;
      continue;
    }

    const [token] = match;
    const tokenStart = match.index;
    if (tokenStart > cursor) fragment.append(document.createTextNode(source.slice(cursor, tokenStart)));

    let className = "";
    if (/^\s+$/.test(token)) className = "";
    else if (token.startsWith("#")) className = "syntax-comment";
    else if (/^(?:[rRuUbBfF]{1,2})?(?:"|'|"""|''')/.test(token)) className = "syntax-string";
    else if (/^(?:\d|\.\d)/.test(token)) className = "syntax-number";
    else if (pythonKeywords.has(token)) className = "syntax-keyword";
    else if (["True", "False", "None", "NotImplemented", "Ellipsis"].includes(token)) className = "syntax-constant";
    else if (pythonBuiltins.has(token)) className = "syntax-builtin";
    else if (/^[=+\-*/%&|^~<>!:.@]+$/.test(token)) className = "syntax-operator";

    if (className) {
      const span = document.createElement("span");
      span.className = className;
      span.textContent = token;
      fragment.append(span);
    } else {
      fragment.append(document.createTextNode(token));
    }
    cursor = pythonTokenPattern.lastIndex;
  }

  if (cursor < source.length) fragment.append(document.createTextNode(source.slice(cursor)));
  code.replaceChildren(fragment);
  code.classList.add("syntax-highlighted");
}

function highlightCodeBlocks(article) {
  for (const code of article.querySelectorAll("pre > code")) {
    if (/\b(?:python|py|language-python|language-py)\b/i.test(code.className)) {
      highlightPython(code);
    }
  }
}

async function writeClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Intenta el método compatible con navegadores que bloquean la API moderna.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("El navegador no permitió copiar al portapapeles.");
}

function enhanceCodeBlocks(article) {
  for (const pre of article.querySelectorAll("pre")) {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    const toolbar = document.createElement("div");
    toolbar.className = "code-toolbar";
    const button = document.createElement("button");
    button.className = "copy-code";
    button.type = "button";
    button.textContent = "Copiar código";
    const status = document.createElement("span");
    status.className = "code-copy-status";
    status.setAttribute("aria-live", "polite");
    toolbar.append(button, status);

    pre.before(wrapper);
    wrapper.append(toolbar, pre);
    button.addEventListener("click", async () => {
      try {
        await writeClipboard(pre.querySelector("code")?.textContent ?? pre.textContent);
        status.textContent = "Código copiado.";
      } catch (error) {
        console.error("No se pudo copiar el código al portapapeles.", error);
        status.textContent = "No se pudo copiar. Selecciona y copia el código manualmente.";
      }
    });
  }
}

function updateToc() {
  const toc = el("toc-links");
  toc.replaceChildren();
  for (const heading of content.querySelectorAll("h2, h3")) {
    if (!heading.id) continue;
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    if (heading.tagName === "H3") link.className = "toc-sub";
    toc.append(link);
  }
  el("toc").hidden = !toc.children.length;
}

function updatePager(index) {
  const pager = el("lesson-pager");
  pager.replaceChildren();
  const neighbors = [["← Anterior", paginas[index - 1]], ["Siguiente →", paginas[index + 1]]];
  for (const [caption, item] of neighbors) {
    if (!item) continue;
    const [label, path] = item;
    const link = document.createElement("a");
    link.href = pageUrl(path);
    link.innerHTML = `<span></span><strong></strong>`;
    link.firstElementChild.textContent = caption;
    link.lastElementChild.textContent = label;
    link.addEventListener("click", (event) => { event.preventDefault(); navigate(path); });
    pager.append(link);
  }
}

function scrollToHash(hash) {
  if (!hash) { window.scrollTo(0, 0); return; }
  const id = decodeURIComponent(hash.slice(1));
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
}

async function loadDocument(path, hash = "") {
  const page = paginaPorRuta.get(path);
  if (!page) return;
  pendingRequest?.abort();
  pendingRequest = new AbortController();
  currentPath = path;
  setActive(path);
  el("current-label").textContent = page.texto;
  el("chapter-count").textContent = `${page.indice + 1} / ${paginas.length} temas`;
  el("section-label").textContent = page.indice < 3 ? "FUNDAMENTOS" : page.indice < 9 ? "BIBLIOTECA" : path === "NumPy/ejercicios_numPy.md" ? "PRÁCTICA" : "CONSULTA RÁPIDA";
  el("reading-time").textContent = "";
  el("source-file").hidden = true;
  document.title = `${page.texto} · Aprende ML con Python`;
  content.innerHTML = '<p class="loading">Cargando lección…</p>';
  closeSidebar();

  try {
    const sourceUrl = new URL(path, baseUrl);
    const sourceLink = el("source-file");
    sourceLink.href = sourceUrl.href;
    sourceLink.textContent = path;
    sourceLink.title = `Abrir el archivo Markdown original: ${path}`;
    sourceLink.hidden = false;
    let markdown;
    if (baseUrl.protocol === "file:") {
      // fetch() de archivos locales está bloqueado en muchos navegadores.
      markdown = window.courseMarkdown?.[path];
      if (typeof markdown !== "string") throw new Error(`Falta ${path} en assets/content.js`);
    } else {
      const response = await fetch(sourceUrl, { signal: pendingRequest.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      markdown = await response.text();
    }
    content.replaceChildren(sanitize(converter.makeHtml(markdown), sourceUrl));
    fixLinks(content, sourceUrl);
    highlightCodeBlocks(content);
    enhanceCodeBlocks(content);
    enhanceTables(content);
    updateToc();
    updatePager(page.indice);
    const words = markdown.trim().split(/\s+/).length;
    el("reading-time").textContent = `${Math.max(1, Math.ceil(words / 200))} min de lectura`;
    scrollToHash(hash);
  } catch (error) {
    if (error.name === "AbortError") return;
    content.innerHTML = '<div class="error-card"><h1>No se pudo abrir esta lección</h1><p>Comprueba que el archivo Markdown esté publicado y vuelve a intentarlo.</p><button type="button">Reintentar</button></div>';
    content.querySelector("button").addEventListener("click", () => loadDocument(path, hash));
    el("toc-links").replaceChildren();
    el("toc").hidden = true;
  }
}

function navigate(path, hash = "") {
  if (!paginaPorRuta.has(path)) return;
  history.pushState({ path }, "", pageUrl(path, hash));
  if (path === currentPath) { scrollToHash(hash); closeSidebar(); return; }
  loadDocument(path, hash);
}

window.addEventListener("popstate", () => {
  const path = new URLSearchParams(location.search).get("doc");
  loadDocument(paginaPorRuta.has(path) ? path : paginas[0][1], location.hash);
});

const sidebar = el("sidebar");
const appShell = document.querySelector(".app-shell");
const sidebarContent = el("sidebar-content");
const sidebarToggle = el("sidebar-toggle");
const menuButton = el("menu-button");
const scrim = el("sidebar-scrim");
const mobileLayout = window.matchMedia("(max-width: 800px)");
function syncSidebarAccessibility() {
  const mobileOpen = sidebar.classList.contains("open");
  const collapsed = appShell.classList.contains("sidebar-collapsed");
  const expanded = mobileLayout.matches ? mobileOpen : !collapsed;
  sidebar.inert = mobileLayout.matches && !mobileOpen;
  sidebarContent.inert = !mobileLayout.matches && collapsed;
  sidebarContent.setAttribute("aria-hidden", String(!mobileLayout.matches && collapsed));
  sidebarToggle.setAttribute("aria-expanded", String(expanded));
  sidebarToggle.setAttribute("aria-label", mobileLayout.matches
    ? (expanded ? "Cerrar índice" : "Abrir índice")
    : (expanded ? "Ocultar índice" : "Mostrar índice"));
  sidebarToggle.title = sidebarToggle.getAttribute("aria-label");
  menuButton.setAttribute("aria-expanded", String(mobileOpen));
  menuButton.setAttribute("aria-label", mobileOpen ? "Cerrar índice" : "Abrir índice");
}
function closeSidebar() {
  sidebar.classList.remove("open");
  scrim.hidden = true;
  syncSidebarAccessibility();
}
function toggleSidebar() {
  if (!mobileLayout.matches) {
    appShell.classList.toggle("sidebar-collapsed");
    syncSidebarAccessibility();
    return;
  }

  const open = sidebar.classList.toggle("open");
  scrim.hidden = !open;
  syncSidebarAccessibility();
  if (open) el("nav-search").focus();
  else menuButton.focus();
}
sidebarToggle.addEventListener("click", toggleSidebar);
menuButton.addEventListener("click", toggleSidebar);
scrim.addEventListener("click", closeSidebar);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileLayout.matches) closeSidebar();
});
mobileLayout.addEventListener("change", () => {
  if (!mobileLayout.matches) closeSidebar();
  else syncSidebarAccessibility();
});
syncSidebarAccessibility();

el("nav-search").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLocaleLowerCase("es");
  for (const link of nav.querySelectorAll("a[data-path]")) {
    link.hidden = !link.textContent.toLocaleLowerCase("es").includes(query);
  }
  for (const group of nav.querySelectorAll(".nav-group")) {
    group.hidden = !group.querySelector("a:not([hidden])");
  }
});

const initialPath = new URLSearchParams(location.search).get("doc");
if (!paginaPorRuta.has(initialPath)) {
  history.replaceState(null, "", pageUrl(paginas[0][1]));
}
loadDocument(paginaPorRuta.has(initialPath) ? initialPath : paginas[0][1], location.hash);

/* Refuerzo visual: el acceso de profesor pertenece exclusivamente a la web. */
(() => {
  if (!window.ITMA_MOBILE_APP) return;
  const ocultar = () => {
    ["admin", "lprof", "panel", "panelAlumnos", "panelActividad"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.setProperty("display", "none", "important");
    });
  };
  ocultar();
  window.addEventListener("hashchange", ocultar);
})();

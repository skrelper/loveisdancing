function fixVH() {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  );
}

fixVH();
window.addEventListener('resize', fixVH);
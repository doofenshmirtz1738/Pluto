export function autoTheme() {
  const hour = new Date().getHours();
  document.body.style.backgroundColor = hour > 18 ? "#121212" : "#f4f4f4";
}
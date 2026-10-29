const root = document.documentElement;
const saved = localStorage.getItem("alphatron-theme");
root.dataset.theme =
  saved ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const toggle = document.querySelector("#theme-toggle"),
  icon = document.querySelector("#theme-icon");
function iconUpdate() {
  if (icon) icon.textContent = root.dataset.theme === "dark" ? "☀" : "☾";
}
iconUpdate();
toggle?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("alphatron-theme", root.dataset.theme);
  iconUpdate();
});
document
  .querySelector("#menu")
  ?.addEventListener("click", () =>
    document.querySelector(".links")?.classList.toggle("open"),
  );
document
  .querySelectorAll(".links a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector(".links")?.classList.remove("open"),
    ),
  );
const y = document.querySelector("#year");
if (y) y.textContent = new Date().getFullYear();
document.querySelector("#project-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const consent = form.querySelector('[name="policy-consent"]');
  if (!form.reportValidity() || !consent.checked) return;
  const m = document.querySelector("#form-message");
  m.hidden = false;
  m.textContent =
    "Thanks. This is a demo enquiry form; connect it to your email/form service before publishing.";
  e.target.reset();
});

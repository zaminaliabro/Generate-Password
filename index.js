const lengthSelect = document.getElementById("length");
const typeSelect = document.getElementById("type");
const result = document.getElementById("result");
const btn = document.getElementById("generate");

btn.addEventListener("click", () => {
  const length = Number(lengthSelect.value);
  const type = typeSelect.value;

  let chars = "";

  if (type === "letters") {
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (type === "numbers") {
    chars = "0123456789";
  } else {
    chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  result.textContent = password;
});

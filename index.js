const modal = document.getElementById("modal");
const btn = document.getElementById("generate");
const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");
const result = document.getElementById("result");

function customPrompt() {
  return new Promise((resolve, reject) => {
    modal.style.display = "flex";

    ok.onclick = () => {
      resolve({
        letters: document.getElementById("letters").checked,
        numbers: document.getElementById("numbers").checked,
        symbols: document.getElementById("symbols").checked,
        capatalletters: document.getElementById("capatalletters").checked,
      });
      modal.style.display = "none"; 
    };

    cancel.onclick = () => {
      modal.style.display = "none";
      reject();
    };
  });
}

btn.addEventListener("click", async () => {
  try {
    const options = await customPrompt();

    let chars = "";
    if (options.letters) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.capatalletters) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (options.numbers) chars += "0123456789";
    if (options.symbols) chars += "!@#$%^&*";

    if (!chars) {
      alert("Please select at least one option");
      return;
    }

    let password = "";
    for (let i = 0; i < 10; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    result.textContent = password;
  } catch {
    alert("Cancelled");
  }
});

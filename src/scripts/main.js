document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("texto");
  const criptDescriptBtn = document.querySelector(".button-2");
  const decriptBtn = document.querySelector(".button-3");
  const resultPara = document.querySelector(".texto-cript");
  const copyBtn = document.querySelector(".button-copiar");
  const naoEncontradaDiv = document.querySelector(".nao-encontrada");
  const copiarDiv = document.querySelector(".copiar");

  // Oculta a div "copiar" inicialmente
  copiarDiv.classList.add("esconder");

  criptDescriptBtn.addEventListener("click", function () {
    const inputText = textarea.value.trim().toLowerCase();

    if (inputText === "") {
      naoEncontradaDiv.classList.remove("esconder");
      copiarDiv.classList.add("esconder");
      naoEncontradaDiv.querySelector(".p").textContent =
        "Digite um texto que você deseja criptografar.";
      resultPara.textContent = "";
    } else {
      naoEncontradaDiv.classList.add("esconder");
      copiarDiv.classList.remove("esconder");
      const encryptedText = encryptText(inputText);
      resultPara.textContent = encryptedText;
    }
  });

  decriptBtn.addEventListener("click", function () {
    const inputText = textarea.value.trim().toLowerCase();

    if (inputText === "") {
      naoEncontradaDiv.classList.remove("esconder");
      copiarDiv.classList.add("esconder");
      naoEncontradaDiv.querySelector(".p").textContent =
        "Digite um texto que você deseja descriptografar.";
      resultPara.textContent = "";
    } else {
      naoEncontradaDiv.classList.add("esconder");
      copiarDiv.classList.remove("esconder");
      const decryptedText = decryptText(inputText);
      resultPara.textContent = decryptedText;
    }
  });

  copyBtn.addEventListener("click", function () {
    const textToCopy = resultPara.textContent;
    if (textToCopy !== "") {
      copyToClipboard(textToCopy);
      alert("Texto copiado para a área de transferência!");
    }
  });

  function encryptText(text) {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  function decryptText(text) {
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }

  function copyToClipboard(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
});

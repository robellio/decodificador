document.getElementById("encrypt").addEventListener("click", function(event) {
    event.preventDefault(); 
    var typedText = document.getElementById("typed_text").value;
    var encryptionResult = typedText
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    document.querySelector("#encryption_result .observer_message h2").textContent = "Texto Criptografado:";
    document.querySelector("#encryption_result .observer_message span").textContent = encryptionResult;
});
  
document.getElementById("descrypt").addEventListener("click", function(event) {
    event.preventDefault();
    var typedText = document.getElementById("typed_text").value;
    var descryptionResult = typedText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.querySelector("#encryption_result .observer_message h2").textContent = "Texto Descriptografado:";
    document.querySelector("#encryption_result .observer_message span").textContent = descryptionResult;
});

document.getElementById("copy_result").addEventListener("click", function() {
    var typedText = document.querySelector("#encryption_result .observer_message span").textContent;
    var copyEntry = document.createElement("textarea");
    copyEntry.value = typedText;
    document.body.appendChild(copyEntry);
    copyEntry.select();
    document.execCommand("copy");
    document.body.removeChild(copyEntry);  
});

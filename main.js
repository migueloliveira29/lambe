const valor = document.getElementById("valor");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");

let tamanho = 12;

mais.addEventListener("click", () => {
    if (tamanho < 50) {
        tamanho++;
        valor.textContent = tamanho;
    }
});

menos.addEventListener("click", () => {
    if (tamanho > 4) {
        tamanho--;
        valor.textContent = tamanho;
    }
});
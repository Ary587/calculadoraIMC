class IMCCalculadora {
  constructor() {
    this.pesoInput = document.getElementById('peso');
    this.alturaInput = document.getElementById('altura');
    this.calcBtn = document.getElementById('calcBtn');
    this.resultadoDiv = document.getElementById('resultado');
    this.calcBtn.addEventListener('click', () => this.calcular());
  }

  calcular() {
    const peso = parseFloat(this.pesoInput.value);
    const altura = parseFloat(this.alturaInput.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert('Ingresa valores válidos y mayores a 0.');
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(1);
    const categoria = this.obtenerCategoria(imc);

    this.resultadoDiv.innerHTML = `
      <h2>Tu IMC: ${imc}</h2>
      <p>${categoria}</p>
    `;
  }

  obtenerCategoria(imc) {
    if (imc < 18.5) return 'Estas bajo  de peso';
    if (imc < 25) return 'Tu peso es normal';
    if (imc < 30) return 'Tienes sobrepeso';
    return 'Tienes obesidad';
  }
}

new IMCCalculadora();
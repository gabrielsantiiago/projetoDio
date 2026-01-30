function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const preco = parseFloat(document.getElementById('preco').value);

    if (!distancia || !consumo || !preco) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (distancia <= 0 || consumo <= 0 || preco <= 0) {
        alert('Todos os valores devem ser maiores que zero!');
        return;
    }

    const litrosConsumidos = distancia / consumo;
    const gastoTotal = litrosConsumidos * preco;
    const gastoPorKm = gastoTotal / distancia;

    document.getElementById('litros').textContent = litrosConsumidos.toFixed(2);
    document.getElementById('gasto').textContent = gastoTotal.toFixed(2);
    document.getElementById('gastoPorKm').textContent = gastoPorKm.toFixed(2);

    document.getElementById('resultado').classList.add('show');
}

// Permite calcular pressionando Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcular();
    }
});
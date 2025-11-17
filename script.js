function solicitarTemperatura() {
    let entrada = prompt("Ingresa una temperatura en grados Celsius:");
    
    let temperatura = Number(entrada);

    if (isNaN(temperatura)) {
        alert("Error: Debes ingresar un numero válido.");
        return solicitarTemperatura(); 
    }
    let fahrenheit = (temperatura * 9/5) + 32;
    let kelvin = temperatura + 273.15;

    console.log("Grados Kelvin:", kelvin);
    console.log("Grados Fahrenheit:", fahrenheit);

    document.getElementById("resultado").innerHTML = `
        <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
        <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
    `;
}
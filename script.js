function enviarDatos() {
    const data = {
        tipo: document.getElementById('tipo').value,
        diam: parseFloat(document.getElementById('diam').value),
        fy: parseFloat(document.getElementById('fy').value),
        fc: parseFloat(document.getElementById('fc').value),
        spac: parseFloat(document.getElementById('spac').value),
        rec: parseFloat(document.getElementById('rec').value),
        nbar: parseFloat(document.getElementById('nbar').value)
    };
    
    const json1 = JSON.stringify(data);

    console.log(json1); // Muestra los datos que se están enviando

    fetch('https://largodesarrollo.onrender.com/largodesarrollo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json1
    })
    .then(response => {
        console.log('Response:', response); // Muestra la respuesta completa
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        const resultElement = document.getElementById('l_d');
        resultElement.textContent = `Largo de desarrollo Ld = ${data.l_d} mm`;
        resultElement.classList.add('bold-text'); // Añade la clase 'bold-text'
    })
    .catch((error) => {
        console.error('Error:', error);
        const resultElement = document.getElementById('l_d');
        resultElement.textContent = `Error: ${error.message}`;
        resultElement.classList.add('bold-text'); // Añade la clase 'bold-text' en caso de error
    });
}
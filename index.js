const formularioFecha  = document.querySelector('#formularioFecha');

// let fechaInput = ' //';

formularioFecha.addEventListener('submit', (e)=>{
	logBox.innerHTML = '<legend>Log</legend>';
	e.preventDefault();
	const fecha =  e.target[0].value;
	init( fecha );


})




	
	


function init(fecha) {
	const fechaSinEspacios = fecha.replaceAll(' ', '');
	const fechaSeparadaSinTokens = fechaSinEspacios.split('/');
	const errorFechaSinFormato = tiene3Partes(fechaSeparadaSinTokens);
	function tiene3Partes(arreglo) {
		if (arreglo.length != 3) {
			return 'La fecha debe tener este formato: DD/MM/AAAA';
		} else {
			return null;
		}
	}

	function crearArregloConTokens(arregloInicial, stringInicial) {
		const longitud1 = arregloInicial[0].length;
		const token1 = stringInicial[longitud1];
		const longitud2 = arregloInicial[1].length + longitud1 + 1;
		const token2 = stringInicial[longitud2];
		return [
			arregloInicial[0],
			token1,
			arregloInicial[1],
			token2,
			arregloInicial[2],
		];
	}

	if (errorFechaSinFormato) {

		// console.log(
		// 	errorFechaSinFormato + ' tu fecha es: ' + fechaSinEspacios + ' corrigela'
		// );
		let errorFormatoFecha = document.createElement('label');
        errorFormatoFecha.innerText = ` ${errorFechaSinFormato} tu fecha es: ${fechaSinEspacios}  corrigela`  ;
        errorFormatoFecha.classList.add('textLog')
        errorFormatoFecha.classList.add('error')
        logBox.append(errorFormatoFecha)

	} else {
		const arregloTokenizado = crearArregloConTokens(
			fechaSeparadaSinTokens,
			fechaSinEspacios
		);

		const arbol = new Nodo();
		arbol.insertar(5, Anios, 'Año');
		arbol.insertar(2, Token, 'Token');
		arbol.insertar(1, Dias, 'Dia');
		arbol.insertar(3, Meses, 'Mes');
		arbol.insertar(4, Token, 'Token');

		// console.log('%cTu fecha "' + fechaSinEspacios + '"', 'color:cyan');
		recorridoInOrder(arbol.raiz, arregloTokenizado);

	
		
	}
}

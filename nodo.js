// const Dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
// const Meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const Anios = [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2016,2017,2018,2019,2020];

// const nodo = (valor, izquierda, derecha, tipo) => ({
// 	valor,
// 	izquierda,
// 	derecha,
// 	tipo,
// });

// const arbol = nodo(
// 	Dias,
// 	nodo('/', null, null, 'Separador'),
// 	nodo(
// 		Meses,
// 		nodo('/', null, null, 'Separador'),
// 		nodo(Anios, null, null, 'Anio'),
// 		'Mes'
// 	),
// 	'Dia'
// );

// stringToNumber = (cadena) => {
// 	if (isNaN(cadena)) {
// 		return ['Ingreso un dato distinto a un numero', null];
// 	} else {
// 		const numero = cadena * 1;
// 		return [null, numero];
// 	}
// };

// const comparar = (listaValores, tipo) => {
// 	let err, numero;
// 	switch (tipo) {
// 		case 'Dia':
// 			[err, numero] = stringToNumber(fechaSplit[0]);

// 			if (err) {
// 				console.warn(err + ' en los dias');
// 			} else {
// 				if (listaValores.includes(numero)) {
// 					console.log('Los Dias son correcto');
// 				} else {
// 					console.warn('Los dias NO son correcto');
// 				}
// 			}

// 			break;
// 		case 'Mes':
// 			[err, numero] = stringToNumber(fechaSplit[1]);
// 			if (err) {
// 				console.warn(err + ' en los meses');
// 			} else {
// 				if (listaValores.includes(numero)) {
// 					console.log('Los Meses son correcto');
// 				} else {
// 					console.warn('Los Meses NO son correcto');
// 				}
// 			}
// 			break;
// 		case 'Anio':
// 			[err, numero] = stringToNumber(fechaSplit[2]);
// 			if(err){
// 				console.warn(err + ' en los años')
// 			}else{
// 				if (listaValores.includes( numero )) {
// 					console.log('Los Años son correcto');
// 				} else {
// 					console.warn('Los Anios NO son correcto');
// 				}
// 			}
// 			break;
// 		case 'Separador':
// 			// console.log('/');
// 			break;

// 		default:
// 			break;
// 	}
// };

// const recorrer = (arbol, padre = 'Sin padre', posicion = 'Centro') => {
// 	//  console.log('\n%c-- Inicio Nodo --'+' ~ Padre: ' + padre+' ~ Valor: ' + arbol.valor+' ~ Posicion: '+posicion+'%c-- Fin --', 'color:cyan', 'color:cyan');
// 	comparar(arbol.valor, arbol.tipo);
// 	if (arbol.izquierda) {
// 		recorrer(arbol.izquierda, arbol.valor, 'Izquierda');
// 	}
// 	if (arbol.derecha) {
// 		recorrer(arbol.derecha, arbol.valor, 'Derecha');
// 	}
// };

// recorrer(arbol);
// console.log('%c--------- ARBOL -----------', 'color:red');
// console.log(arbol);

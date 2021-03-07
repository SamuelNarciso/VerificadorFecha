const logBox = document.querySelector('#log');

const Dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,];
const Meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Anios = [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,];
const Token = '/';

class Nodo {
	raiz = null;
	constructor(key) {
		this.llave = key;
		this.padre = null;
		this.izquierdo = null;
		this.derecho = null;
		this.valor = null;
		this.tipo = null;
	}

	insertar(key, valor, tipo) {
		let n = new Nodo(key);
		n.valor = valor;
		n.tipo = tipo;
		if (this.raiz === null) {
			this.raiz = n;
		} else {
			let nodoTemporal = this.raiz;
			while (nodoTemporal != null) {
				n.padre = nodoTemporal;
				if (n.llave >= nodoTemporal.llave) {
					nodoTemporal = nodoTemporal.derecho;
				} else {
					nodoTemporal = nodoTemporal.izquierdo;
				}
			}
			if (n.llave < n.padre.llave) {
				n.padre.izquierdo = n;
			} else {
				n.padre.derecho = n;
			}
		}
	}
}

stringToNumero = (cadena) => {
	if (isNaN(cadena)) {
		return cadena;
	} else {
		const numero = cadena * 1;
		return numero;
	}
};

const colocarEnHTML = (caja, texto, clases) => {
	const label = document.createElement('label');
	label.innerText = texto;
	clases.forEach((clase) => label.classList.add(clase));
	caja.append(label);
};

const buscarValor = (lista, tipo, arregloFecha) => {
	const valor = stringToNumero(arregloFecha[0]);
	if (lista.includes(valor)) {
		colocarEnHTML(logBox, `Es correcto el ${tipo}`, ['textLog']);
	} else {
		colocarEnHTML(logBox, `Es incorrecto el ${tipo}`, ['textLog', 'error']);
	}
	arregloFecha.shift();
};

function recorridoInOrder(hoja, arreglo) {
	if (hoja != null) {
		recorridoInOrder(hoja.izquierdo, arreglo);
		buscarValor(hoja.valor, hoja.tipo, arreglo);
		recorridoInOrder(hoja.derecho, arreglo);
	}
}


function init(){
	let url = '/api/ejercicio';
	let settings = {
		method: 'GET'
	}

	document.getElementById("post").addEventListener("click", function(e) {
		var id  = document.getElementById("Name").value;
		var tIni = document.getElementById("tiempoini").value;

		let url2 = '/api/EjerecioAn'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				inicio: tIni
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			responseType: 'json'
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
		
	});

	fetch(url, settings)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			for ( let i = 0; i < responseJSON.length; i ++ ){
				$('.listOfVPs').append(`<li>
				${responseJSON[i].nombre} - Tiene tiempo de Inicio: ${responseJSON[i].tiempoInicio} 
										</li>`)
			}
		})
		.catch( err => {
			console.log( err );
		})
}

init();
let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;


let ejercicioSchema = mongoose.Schema({
	nombre: { type : String },
	nivel: { type : Number },
	tiempoInicio: {type : Number},
	tiempoFinal: {type : Number},
	tiempoAcumulado: {type : Number},
	diasAcumulados: {type : Number}
});

// let userSchema = mongoose.Schema({
// 	username : { type : String, 
// 				 required : true, 
// 				 unique : true },
// 	password : { type : String,
// 				 required : true }
// })

let Vicepresidencia = mongoose.model( 'ejercicios', ejercicioSchema );
// let User = mongoose.model( 'User', userSchema );

// let UserList = {
// 	register : function( user ){
// 		return User.find( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser.length == 0 ){
// 					return bcrypt.hash(user.password, 10)
// 				}
// 			})
// 			.then( hashPassword =>{
// 				return User.create({
// 					username : user.username, 
// 					password : hashPassword
// 				})
// 				.then( newUser => {
// 					return newUser;
// 				})
// 				.catch( error => {
// 					throw Error( error );
// 				});
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	},
// 	login : function( user ){
// 		return User.findOne( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser ){
// 					return bcrypt.compare(user.password, checkUser.password)
// 				}
// 			})
// 			.then( validUser => {
// 				if( validUser ){
// 					return "Valid User";
// 				}
// 				else{
// 					throw Error("Invalid User");
// 				}
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	}
// }


let VPList = {
	get : function(){
		return Vicepresidencia.find()
				.then( datosVP => {
					return datosVP;
				})
				.catch( error => {
					throw Error( error );
				});
	}
	,
	 post : function( id, tiempoInicio ){
		 return Vicepresidencia.findByIdAndUpdate(id, {tiempoInicio}, (err) => {
			if (err) {
				throw Error(error);
			}
		 })
	 	// return Vicepresidencia.findOne({id})
	 	// 		.then( async doc => {
		// 			 doc.tiempoInicio = tiempoInicio;
		// 			 await doc.save();
	 	// 		})
	 	// 		.catch( error => {
	 	// 			throw Error(error);
	 	// 		});
	 }
};

module.exports = { VPList };



var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://alizindev-api.onrender.com';
try {
if(url == 'https://alizindev-api.onrender.com') throw console.log(color('Verifique la configuración de la base de datos, la URL var no está corrompida','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Conectado corretamente al servidor, andresvpn','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nFALLO SL CONECTAR A LA BASE DE DATOS, \nVERIFIQUE QUE LA URL ESTE CORRECTA','red'))
	})


module.exports = db

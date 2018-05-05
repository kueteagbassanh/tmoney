var TMoney = require('./tmoney'); // Chargement du module TMoney
var tmoney = new TMoney();

//Exemple d'un SMS reçu apres un transfert compte vers compte via TMoney
var sms = "REF #20764929. Nik Baby Afrikavi vous a envoye 35900 F sur votre compte TMoney. Votre nouveau solde: 75850 F.";

var data = tmoney.parse(sms);

//affichage des données parsées dans la console
console.log(data);

/**
 * Realiza la conversión de euros a pesetas
 * @param {number} euros - La cantidad de euros a convertir
 * @returns {number} pesetas - El importe convertido a pesetas
 */
function retornaPesetas(euros){
     pesetas = euros * 166.386;
     return pesetas;
}
/** 
* Representa un libro. 
* @constructor 
* @param {string} title - El título del libro. 
* @param {string} autor - El autor del libro. 
*/
function Book(title, author) {
     this.title = title,
     this.author = author
}

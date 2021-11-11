function ponerParrafo(){
    var lorem       = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
    var main        = document.getElementById('main');
    var parrafo     = document.createElement('p');
    var linea       = document.createElement('hr');
    var textoLorem  = document.createTextNode(lorem);

    parrafo.appendChild(textoLorem);
    main.appendChild(parrafo);
    main.appendChild(linea);
  }

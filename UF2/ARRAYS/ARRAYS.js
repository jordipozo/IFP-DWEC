function multidimensionalArray(table) {
    document.write("<b>Ejemplo para mostrar un Array Multidimensional</b>"+"<br>");
    document.write("<table border=1>");
    document.write("<th>S.no</th><th>Nombre</th><th>Teléfono</th><th>Compañía</th>");
    for(var x=1; x<=3; x++) {
        document.write("<tr><td>",x,"</td>");
        for(var y=0; y<=2; y++){
            document.write("<td>",table[x][y],"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
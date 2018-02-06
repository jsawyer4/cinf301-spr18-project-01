/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */
window.onload = function() {
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);
    const tiles = document.querySelectorAll('td');
    const tilesSolution =new Array (1,2,3,8,' ',4,7,6,5);

    table.addEventListener('click', (event) => {

        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
    const columnIndex = columns.findIndex(column => column == event.target);
    console.log(rowIndex, columnIndex);
    var blank;
    for(i=0;i<tiles.length;i++)
    {
        if(tiles[i].innerHTML==' ') {
            blank = i + 1;
        }
    }
    if(rowIndex==1)
    {
        console.log(tiles[(rowIndex+columnIndex)-1].innerHTML)
        O=(rowIndex+columnIndex);
    }
    else if(rowIndex==2)
    {
        console.log(tiles[(rowIndex+(2+columnIndex))-1].innerHTML);
        O=(rowIndex+(2+columnIndex));
    }
    else
    {
        console.log(tiles[(rowIndex+(4+columnIndex))-1].innerHTML);
        O=(rowIndex+(4+columnIndex));
    }
    console.log("O",O,"blank",blank);
    if((blank+3)==O)
    {
        switch_elems(rowIndex, columnIndex,(rowIndex-1), columnIndex);
        console.log("+3");
    }
    else if((blank-3)==O)
    {
        switch_elems(rowIndex, columnIndex,(rowIndex+1),columnIndex);
        console.log("-3");
    }
    else if((blank-1)==O)
    {
        switch_elems(rowIndex, columnIndex,rowIndex,(columnIndex+1));
        console.log("-1");
    }
    else if((blank+1)==O)
    {
        switch_elems(rowIndex, columnIndex,rowIndex,(columnIndex-1));
        console.log("+1");
    }
    else
    {

    }
    solved(tiles,tilesSolution);

})
}
function solved(tiles,sol)
{
    var counter=0;
    for(i=0;i<sol.length;i++)
    {
        if(tiles[i].innerHTML==sol[i])
        {
            counter++;
        }
    }
    if (counter==9)
    {
        alert("you won");
    }
}
function switch_elems(i, j,k,l) {
    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;
    console.log(i,j,k,l)
/*
    let k = j + 1;
    let numRows = table.rows.length; // not used, but this gets num rows
    if (k > table.rows[i].cells.length - 1) {
        k = 0;
    }
*/

    const val2 = table.rows[k].cells[l].innerHTML;

    table.rows[i].cells[j].innerHTML = val2.toString();
    table.rows[k].cells[l].innerHTML = val1.toString();
}

/*
 * See https://stackoverflow.com/questions/21033368/javascript-onclick-event-html-table
 */
// window.onload = function() {
//     var table = document.getElementById("tableID");
//     if (table != null) {
//         for (var i = 0; i < table.rows.length; i++) {
//             for (var j = 0; j < table.rows[i].cells.length; j++) {
//                 table.rows[i].cells[j].onclick = function () {
//                     tableText(this, i, j);
//                 };
//             }
//         }
//     }
// }
//
// function tableText(tableCell, i, j) {
//     alert(tableCell.innerHTML + " " + i + " " + j);
// }
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

    shuffle_tiles();

    table.addEventListener('click', (event) => {

        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
    const columnIndex = columns.findIndex(column => column == event.target);
    console.log(rowIndex, columnIndex);
    var blank;
    // this checks to see where the blank is in on the board
    for(i=0;i<tiles.length;i++)
    {
        if(tiles[i].innerHTML==' ') {
            blank = i + 1;
        }
    }
    //this checks to see where you clicked on the board
    if(rowIndex==1)
    {
        O=(rowIndex+columnIndex);
    }
    else if(rowIndex==2)
    {
        O=(rowIndex+(2+columnIndex));
    }
    else
    {
        O=(rowIndex+(4+columnIndex));
    }
    /*
        This is where we check to see if you click a spot where a blank can move.
    */
    if((blank+3)==O)
    {
        switch_elems(rowIndex, columnIndex,(rowIndex-1), columnIndex);
    }
    else if((blank-3)==O)
    {
        switch_elems(rowIndex, columnIndex,(rowIndex+1),columnIndex);
    }
    else if((blank-1)==O)
    {
        switch_elems(rowIndex, columnIndex,rowIndex,(columnIndex+1));
    }
    else if((blank+1)==O)
    {
        switch_elems(rowIndex, columnIndex,rowIndex,(columnIndex-1));

    }
    // solved checks to see if you won the game
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
    const val2 = table.rows[k].cells[l].innerHTML;
    console.log(i,j,k,l);

    table.rows[i].cells[j].innerHTML = val2.toString();
    table.rows[k].cells[l].innerHTML = val1.toString();
}
function shuffle_tiles() {
    for(k=0;k<3;k++)
    {
        for(j=0;j<3;j++)
        {
            for(i=0;i<3;i++)
            {
                switch_elems(j+1,i,((Math.floor(Math.random()*3))+1),(Math.floor((Math.random()*3))));
            }
        }
    }

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
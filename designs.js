let table = $('#pixelCanvas');

function makeGrid(width, height) {

  //Create columns and rows in table by iterating through input number
    for (i = 0; i < height; i++) {
     table.append('<tr class="makeCol"></tr>');
    }

    //Create and append tds into Table Cols
    for (j = 0; j < width; j++) {
      $("tr").append('<td class="makeRow"></td>');
    }

  //Make color picker to change background color of design cells
  $('td').mousedown(function(event){
    let color = $('#colorPicker').val();
    $(this).css('background-color', color)
});
}

$('#submitButton').click(function(event){
  table.children().remove();    //clear design table prior to creating new table
  event.preventDefault();
  let width = $('#inputWidth').val();
  let height = $('#inputHeight').val();
  makeGrid(width, height);
});

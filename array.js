let tableData = [
  { 'Company':'Samsung','Model':'Galaxy','Memory':'64','Price': '1500'},
   {'Company' :'Nokia','Model':'S730','Memory':'128', 'Price':'22000'},
    {'Company' :'Xiomi','Model':'Note', 'Memory':'32', 'Price':'12000'},
    {'Company' :'Motorola','Model':'G10', 'Memory':'32', 'Price':15000},
]
 buildTable(tableData)
function buildTable(data){
    var row="<table>";
    var table = document.getElementById('myTable');
    for(var i=0;i < data.length; i++){
  row += "<tr><td>"+data[i].Company+"</td><td>"+data[i].Model+"</td><td>"+data[i].Memory+"</td><td>"+data[i].Price+"</td></tr>"
        
    }
    row+="<table>";
    document.getElementById("myTable").innerHTML=row;
}

 console.log('tableData');
 

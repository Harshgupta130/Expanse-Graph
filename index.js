function myFunction(){
  document.querySelector("ul").classList.toggle("menu-display");
  document.querySelector(".menu-plus").classList.toggle("rotate");
}
function myFunction2(){
  document.querySelector(".special").classList.toggle("special-display");
}
function displayInfo(){
  document.querySelector(".info").classList.toggle("info-display");
}

function toRespond(){
  x=1;
  document.querySelector(".total-savings").style.display="inline-block";
  document.querySelector(".total-expenses").style.display="inline-block";
  drawChart();
}
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  document.querySelector("#chart").style.display="block";
  var arrays=[
    ['date', 'Income', 'Expenses'],
    ['01',  200,      1000],
    ['02',  1170,      460],
    ['03',  660,       1120],
    ['04',  1030,      540]
  ];
  var a=document.querySelector(".date").value.slice(-2);
  var b=Number(document.querySelector(".income").value);
  var c=Number(document.querySelector(".expense").value);
  var d=Number(document.querySelector(".special").value);
  arrays.push([a,b+d,c]);
  var data = google.visualization.arrayToDataTable(arrays);
    var options = {
    title: 'Daily Saving Analysis',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  if(x===1)
  {
  chart.draw(data, options);
  }
  demo(arrays);
}
function demo(arrays){
  var sum1=0;
  var sum2=0;
  for(var i=1;i<arrays.length;i++)
  {
    sum1=sum1+arrays[i][1];
    sum2=sum2+arrays[i][2];
  }
  document.querySelector(".total-savings").innerText=("Total Savings : "+sum1);
  document.querySelector(".total-expenses").innerText=("Total Expenses : "+sum2);
}

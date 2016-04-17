function calculateFV(principal, rate, period) {
    return principal*Math.pow(1+rate, period) ;
}
function calculateAV(principal, rate){
	return principal*(1+rate/12) ;

}

function calculate() {
    var principal = Number($('#a').val());
    var rate = Number($('#b').val())/100.0;
    var period = Number($('#c').val())/12;
    period = period.toFixed(1);
    var xmin = 1;
    var xmax = Number($('#c').val());
    var line1 = [];
    var x = 0;  
    var y = 0;    
    var s = "";
    
    s = "<h3>FV = " + principal + " ( 1 +  " + rate + " )<sup> " + period + " </sup></h3>";
         y = calculateFV(principal, rate, period);
         y = y.toFixed(2);
        s += "<h2> Future Value = " + y +"</h2>";
    s += "<h3>Future Value By Month: </h3>";
       for (x = xmin; x <= xmax; x++) {
       principal = calculateAV(principal, rate);
       principal = principal.toFixed(2);
       line1[x] = principal;}
       
       	  
	  $.jqplot("example",
	           [line1],
	           {
	             title: "Accumulated Future Value Plot",
	             axes: {
	             xaxis:{ renderer:$.jqplot.CategoryAxisRenderer },
	             
	            yaxis: {min:y*0.5, max:y*1.5}
	                               
	               	             },
	             series: [
	               { color:"#333",label:"Capitalized Gain by Month" },
	               
	             ],
	             legend: {
	                show: true,
	                location: "ne",
	                xoffset: 12,
	                yoffset: 12 }
	           }
	          );

       for (x = xmin; x <= xmax; x++) {
       s +="Month " + x + " : " + line1[x] + "<br/>";
       }
      
            
    output.innerHTML = s;
}

$('#calculate').click( function() {
     calculate();  
});

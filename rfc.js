/*function genera_rfc()
{
    var nm=document.getElementById("nombre").value;
    let aux1=nm.substr(0,1);
    
    var app=document.getElementById('ap').value;
    let aux2=app.substr(0,1);
    
    var apm=document.getElementById('am').value;
    let aux3=apm.substr(0,1);
    
    var year=document.getElementById('anio').value;
    let aux4=year.substr(2,3);
    
    var mes=document.getElementById('mes').value;

    var day=document.getElementById('dia').value;
    
    let rfc=(aux2+aux3+aux1+aux4+mes+day);
   
    
    //alert(rfc.toUpperCase());
    document.getElementById("parrafo").value= rfc.toUpperCase();
}
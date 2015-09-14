function cambiarolla() 
{
	var image = document.getElementById('miolla');
	if (image.src.match("abierta")) 
	{
		image.src = "imagenes/olla.svg";
	}
	else
	{
		image.src = "imagenes/ollaabierta.svg";
	}
}
function menudeldia() 
{
	var menudehoy = ["-Carne guisada... 5 Bs.", "-Pasticho... 4 Bs.", "-Bistec... 5 Bs.", "-Pollo al horno... 3 Bs."];
	var i = 0;
	var text = "<h1>Menú del día:</h1>";
	for (;menudehoy[i];) 
	{
    	text += menudehoy[i] + "<br>";
    	i++;
	}
	text += "<h3>Estos son precios revolucionarios !!!</h3>";
	document.getElementById("columna").innerHTML = text;
}
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
function validacion()
	{
	if(minombre2.value=="")
		{
		minombre2.style.background='#FFDDDD';
		}
	else if(micorreo2.value=="")
		{
		micorreo2.style.background='#FFDDDD';
		}
	else if(micelular2.value=='' && mitelefonofijo2.value=='')
		{
		micelular2.setCustomValidity('Inserte al menos un número de teléfono');
		micelular2.style.background='#FFDDDD';
		mitelefonofijo2.style.background='#FFDDDD';
		}
	else
		{
		micelular2.setCustomValidity('');
		micomentario2.style.background='#FFDDDD';
		}
	}
function iniciar() 
	{
	minombre2=document.getElementById("minombre");
	micorreo2=document.getElementById("micorreo");
	micelular2=document.getElementById("micelular");
	mitelefonofijo2=document.getElementById("mitelefonofijo");
	micomentario2=document.getElementById("micomentario");
	minombre2.addEventListener("input", validacion, false);
	micorreo2.addEventListener("input", validacion, false);
	micelular2.addEventListener("input", validacion, false);
	mitelefonofijo2.addEventListener("input", validacion, false);
	micomentario2.addEventListener("input", validacion, false);
	validacion();
	}
window.addEventListener("load", iniciar, false);
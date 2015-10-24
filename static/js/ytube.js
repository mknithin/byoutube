function myfunction(search_string)
{
	var max_result=10;
	if (search_string.length ==0){
		document.getElementById("result").innerHTML="";
		return;
	}
	else {
		var xmlhttp= new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4 && xmlhttp.status == 200){
				var strarray=JSON.parse(xmlhttp.responseText);
				var out=" ";
				var i;
				for(i=0; i< max_result; i++){
					out +='<p>'+strarray.items[i].snippet["title"]+'</p>';
				}
				document.getElementById("result").innerHTML= out;
			}
		}
		xmlhttp.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults="+max_result+"&q="+search_string+"&fields=items&key=AIzaSyBlrcdPSvhUMFrySQtBgJLrUAeLP51Vqk4",true);
		xmlhttp.send();
	}
	
}
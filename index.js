var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = xhttp.responseText;
       var imageData = JSON.parse(xhttp.responseText);
       console.log(imageData);
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=nature&per_page=1", true);
xhttp.setRequestHeader('Authorization', "563492ad6f917000010000015b4a0ac1e77c42fc8b9eae29d9c26f5a");
xhttp.send();
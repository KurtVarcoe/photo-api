var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //    document.getElementById("demo").innerHTML = xhttp.responseText;
       var imageData = JSON.parse(xhttp.responseText);
       console.log(imageData);
       var container = document.getElementById("demo");
       for (var i = 0; i < 10; i++) {
        container.innerHTML += `<img src="${imageData.photos[i].src.small}">`
       }
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=nature&per_page=10", true);
xhttp.setRequestHeader('Authorization', "563492ad6f917000010000015b4a0ac1e77c42fc8b9eae29d9c26f5a");
xhttp.send();
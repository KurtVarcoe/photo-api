var searchForm = document.getElementById('search-form');
       searchForm.addEventListener('submit', function (e) {
        e.preventDefault();

       })

       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               //    document.getElementById("demo").innerHTML = xhttp.responseText;
               var imageData = JSON.parse(xhttp.responseText);
               console.log(imageData);
               // var container = document.getElementById("demo");
               var columnOne = document.getElementById('column-one');
               var columnTwo = document.getElementById('column-two');
               var columnThree = document.getElementById('column-three');
               // container.innerHTML = '';
               columnOne.innerHTML = '';
               columnTwo.innerHTML = '';
               columnThree.innerHTML = '';
               for (var i = 0; i < 30; i++) {
                   var imageSource = imageData.photos[i].src.small;
                   var imageTag = `<img src="${imageSource}">`
                   if (i < 10) {
                       columnOne.innerHTML += imageTag;
                   } 
                   else if (i >= 10 && i < 20) {
                       columnTwo.innerHTML += imageTag;
                   } 
                   else if (i >= 20) {
                       columnThree.innerHTML += imageTag;
                   } 
               }
           }
       };
       var userInput = document.getElementById('search-bar').value;
       xhttp.open("GET", `https://api.pexels.com/v1/search?query=trees&per_page=30`, true);
       xhttp.setRequestHeader('Authorization', "563492ad6f917000010000015b4a0ac1e77c42fc8b9eae29d9c26f5a");
       xhttp.send();
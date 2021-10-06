var searchForm = document.getElementById('search-form');
       searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var imageData = JSON.parse(xhttp.responseText);
                console.log(imageData);
                var columnOne = document.getElementById('column-one');
                var columnTwo = document.getElementById('column-two');
                var columnThree = document.getElementById('column-three');
                columnOne.innerHTML = '';
                columnTwo.innerHTML = '';
                columnThree.innerHTML = '';
                for (var i = 0; i < 15; i++) {
                    var imageSource = imageData.photos[i].src.original;
                    var imageTag = `<img src="${imageSource}">`
                    if (i < 5) {
                        columnOne.innerHTML += imageTag;
                    } 
                    else if (i >= 5 && i < 10) {
                        columnTwo.innerHTML += imageTag;
                    } 
                    else if (i >= 10) {
                        columnThree.innerHTML += imageTag;
                    } 
                }
            }
        };
        var userInput = document.getElementById('search-bar').value;
        xhttp.open("GET", `https://api.pexels.com/v1/search?query=${userInput}&per_page=15`, true);
        xhttp.setRequestHeader('Authorization', "563492ad6f917000010000015b4a0ac1e77c42fc8b9eae29d9c26f5a");
        xhttp.send();
       })


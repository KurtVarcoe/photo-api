var searchForm = document.getElementById('search-form');
       searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //    document.getElementById("demo").innerHTML = xhttp.responseText;
                var imageData = JSON.parse(xhttp.responseText);
                console.log(imageData);
                var container = document.getElementById("demo");
                var columnOne = document.getElementById('column-one');
                var columnTwo = document.getElementById('column-two');
                var columnThree = document.getElementById('column-three');
                var columnFour = document.getElementById('column-four');
                container.innerHTML = '';
                columnOne.innerHTML = '';
                columnTwo.innerHTML = '';
                columnThree.innerHTML = '';
                columnFour.innerHTML = '';
                for (var i = 0; i < 8; i++) {
                    if (i < 2) {
                        columnOne.innerHTML += `<img src="${imageData.photos[i].src.small}">`;
                    } 
                    else if (i >= 2 && i < 4) {
                        columnTwo.innerHTML += `<img src="${imageData.photos[i].src.small}">`;
                    } 
                    else if (i >= 4 && i < 6) {
                        columnThree.innerHTML += `<img src="${imageData.photos[i].src.small}">`;
                    } 
                    else if (i >= 6) {
                        columnFour.innerHTML += `<img src="${imageData.photos[i].src.small}">`;
                    } 
                }
            }
        };
        var userInput = document.getElementById('search-bar').value;
        xhttp.open("GET", `https://api.pexels.com/v1/search?query=${userInput}per_page=8`, true);
        xhttp.setRequestHeader('Authorization', "563492ad6f917000010000015b4a0ac1e77c42fc8b9eae29d9c26f5a");
        xhttp.send();
       })

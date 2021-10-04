function getData() {
    let str = "";
    let zipcode = document.getElementById("zipcode").value;
    fetch("https://api.zippopotam.us/mx/" + zipcode)
        .then((response) => response.json())
        .then((data) =>
            data.places.forEach((element) => {
                console.log(data);
                str +=
                    "<div class=\"col-3\"><strong> - País: </strong>  <img src=\"https://www.countryflags.io/mx/flat/24.png\"><br>" +
                    "<strong> - Lugar:</strong> " + element["place name"] +
                    "<br><strong> - Estado:</strong> " +
                    element.state +
                    "<p>___________________________</p><br></div>";
                document.getElementById("places").innerHTML = str;
            })
        ).catch(err => {
            document.getElementById("places").innerHTML = "<h1>No hay datos</h1>";
        });
}

 
export default getData;
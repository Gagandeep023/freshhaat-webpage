// api url
const api_url = 
      "http://127.0.0.1:3001/api/v1/dashboard/details/";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    try {
        const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    show(data);

    } catch (error) {
        location.assign("http://127.0.0.1:5501/pageNotFound.html");
        console.log(error);
    }
    // const response = await fetch(url);
    
    // Storing data in form of JSON
    // var data = await response.json();
    // console.log(data);

    // show(data);
}
// Calling that async function
function show(data) {
    let r = data[0];

  
    document.getElementById("product_name").innerHTML = "Product Name: " + r.product_name;
    document.getElementById("farm_address").innerHTML = "Farm Address: " + r.farm_address;
    document.getElementById("crop_time").innerHTML = "Farm Address: " + r.crop_time;

    let productImage = document.createElement("img"); 
    productImage.src = r.product_image;
    let src = document.getElementById("product_image"); 
    src.appendChild(productImage); 


    console.log(r)
}


create_url()
async function create_url(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('productId')

    const requestAPI = api_url + "productId/" + productId;

    console.log(requestAPI)
    getapi(requestAPI);

}

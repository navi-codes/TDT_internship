function displayProduct(product,product_id) {
    var div = document.createElement('div');

    div.innerHTML =
    '<img class="product_image" src="images/'+product['image']+'" alt='+product['name']+'>\
    <label>'+product['description'] +'</label>\
    <button onclick="cart_decrement('+product_id+')"> - </button>\
    <input onchange="" type="text" value="0" id='+product_id+' name="count"  style="text-align:center; height: 15px; width: 45px;">\
    <button onclick="cart_increment('+product_id+')"> + </button>\
    <input type="button" value="Delete item" onclick="removeProduct(this,\''+product_id+'\')">';

    document.getElementById('content').appendChild(div);
}



function removeProduct(input,id) {


    var item_count = parseInt(document.getElementById(id).value);

    cart_count -= item_count;
    document.getElementById("cart_count").innerHTML =  cart_count;
    document.getElementById('content').removeChild(input.parentNode);

}




var cart_count =0            //global variable to store the cart
function cart_increment(id)
{

    var item_count = parseInt(document.getElementById(id).value);
    document.getElementById(id).value = item_count+1;
    document.getElementById("cart_count").innerHTML =  ++cart_count;
}

function cart_decrement(id)
{
    var item_count = parseInt(document.getElementById(id).value);
    if((item_count!=0)&&(cart_count != 0))
    {
        document.getElementById(id).value = item_count-1;
        document.getElementById("cart_count").innerHTML= --cart_count;
    }

}


function create()
{
    var products = [

    {
        "name":"Apple",
        "description":"Fresh Kashmir Apple, 700g (Pack of 4)",
        "price":200,
        "image":"apple.png"
    },

    {
        "name":"Mango",
        "description":"Nelesa Gardening Live Alphonso Mango Plant 1 Feet + Height Fruit Plant",
        "price":350,
        "image":"mango.png"
    },

    {
        "name":"Banana",
        "description":"Assam Banana Aiden Gardens Rare Dwarf Tissue cultureAiden Gardens Rare Dwarf Tissue culture",
        "price":50,
        "image":"banana.png"
    },

    {
        "name":"Pineapple",
        "description":"Tropical pineapple juicy and fleshy with the stem serving as a supporting fibrous core",
        "price":80,
        "image":"pineapple.png"
    },

    {
        "name":"Orange",
        "description":"Nagpur fresh Oranges, Rich in vitamin C",
        "price":90,
        "image":"oranges.png"
    }

    ];



    for (var product_id in products)

        displayProduct(products[product_id],product_id)

}


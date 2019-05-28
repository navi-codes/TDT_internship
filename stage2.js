function addRow(product,product_id) {
    var div = document.createElement('div');
    div.innerHTML =
        '<img class="product_image" src="images/'+product['image']+'" alt='+product['name']+'>\
        <label>'+product['description'] +'</label>\
        <button onclick="cart_decrement('+product_id+')"> - </button>\
        <input type="text" value="0" id='+product_id+' name="count"  style="text-align:center; height: 15px; width: 45px;">\
        <button onclick="cart_increment('+product_id+')"> + </button>\
        <input type="button" value="Delete item" onclick="removeRow(this,\''+product_id+'\')">';

    document.getElementById('content').appendChild(div);
}





function removeRow(input,ids) {
    console.log(ids)
    console.log(typeof(ids))
    var item_count = parseInt(document.getElementById(ids).value);
    console.log(item_count)
    cart_count -= item_count;
    document.getElementById("cart_count").innerHTML =  cart_count;
    document.getElementById('content').removeChild(input.parentNode);

}


var cart_count =0
function cart_increment(ids)
{
    
  var item_count = parseInt(document.getElementById(ids).value);
  document.getElementById(ids).value = item_count+1;
  document.getElementById("cart_count").innerHTML =  ++cart_count;
}

function cart_decrement(ids)
{
  var item_count = parseInt(document.getElementById(ids).value);
  if((item_count!=0)&&(cart_count != 0))
  {
    document.getElementById(ids).value = item_count-1;
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


/*
var name = 'navi'
var age = 26

  obj = {};
  obj['name']=name;
  obj['age'] = age;
  products.push({});
  console.log(obj)
  console.log(products)




/*
	items = new Array('Apple','Mango','Banana','Pineapple','Grapes','Orange');
    description = {"apple":"Fresh Kashmir Apple, 700g (Pack of 4) "
                    ,mango:"Nelesa Gardening Live Alphonso Mango Plant 1 Feet + Height Fruit Plant"
                    ,banana:"Assam Banana Aiden Gardens Rare Dwarf Tissue cultureAiden Gardens Rare Dwarf Tissue culture"
                    ,pineapple:"Tropical pineapple juicy and fleshy with the stem serving as a supporting fibrous core"
                    ,grapes:"Black Grapes,evergreen grapefruit "
                    ,orange:"Nagpur fresh Oranges, Rich in vitamin C"};
    price = {'apple':220
            ,'mango':350
            ,'banana':50
            ,'pineapple':50
            ,'grapes':40
            ,'orange':70};

    images = {'apple':"apple.png"
            ,'mango':"mango.png"
            ,'banana':"banana.png"
            ,'pineapple':"pineapple.png"
            ,'grapes':"grapes.png"
            ,'orange':"oranges.png"};






product_details = {'apple':['Apple','Fresh Kashmir Apple, 700g (Pack of 4)','apple.png',220]
        ,'mango':['Mango','Nelesa Gardening Live Alphonso Mango Plant 1 Feet + Height Fruit Plant','mango.png',150]
        ,'banana':['Banana','Assam Banana Aiden Gardens Rare Dwarf Tissue cultureAiden Gardens Rare Dwarf Tissue culture','banana.png',50]
        ,'pineapple':['pineapple','ropical pineapple juicy and fleshy with the stem serving as a supporting fibrous core','pineapple.png',80]
        ,'grapes':['Grapes','grapes','grapes.png',100]
        ,'orange':['Oranges','Nagpur fresh Oranges, Rich in vitamin C','oranges.png',60]}
*/
for (var product_id in products)
    
   addRow(products[product_id],product_id)
    


  

}
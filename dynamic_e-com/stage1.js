function addRow(img,name,id) {
    var div = document.createElement('div');
    text="button"
    div.className = 'row';

    div.innerHTML =
        '<img class="product_image" src="images/'+img+'" alt='+name+'>\
        <label>here comes the header</label>\
        <button onclick="cart_decrement('+id+')"> - </button>\
        <input onchange="cart_increment('+id+')" type="text" value="0" id='+id+' name="count"  style="text-align:center; height: 15px; width: 45px;">\
        <button onclick="cart_increment('+id+')"> + </button>\
        <input type="button" value="Delete item" onclick="removeRow(this)">';

    document.getElementById('content').appendChild(div);
}

function removeRow(input) {
    document.getElementById('content').removeChild(input.parentNode);
}


var cart_count =0
function cart_increment(ids)
{
    console.log(ids)
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
var name = 0
for (var img in images)
{         
    addRow(images[img],items[name],name)
    name ++

}
}
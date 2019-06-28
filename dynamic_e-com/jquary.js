var cart_count =0 //Global vaiable to store the cart count


function displayProduct(product,product_id){
	$('#productsDisplay').append('<div class="row">\
		<div class="col-md-4"><img class="product_image" src="images/'+product['image']+'" alt='+product['name']+'></div>\
		<div style="padding : 10px 10px;"class="col-md-4"><label>'+product['description'] +'</label></div>\
		<div class="col-md-4"><button onclick="cart_decrement('+product_id+')" class="btn btn-success"> - </button>\
		<input  onchange="" type="text" value="0" id='+product_id+' name="count"  style="text-align:center; height: 35px; width: 45px;">\
		<button onclick="cart_increment('+product_id+')" class="btn btn-success"> + </button>\
		<input type="button" class="btn btn-danger" value="Delete item" onclick="removeProduct(this,'+product_id+')"></div></div>');
}



function removeProduct(input,id)
{
	var item_count = parseInt($("#"+id).val());
	$("#"+id).val(0)
	$("#cartCount").text(cart_count-=item_count)

	$(input).parent().parent().remove();
}


function cart_increment(id)
{
	var item_count = parseInt($("#"+id).val());
	console.log(item_count)
	$("#"+id).val(item_count+1);
	$("#cartCount").text(++cart_count)



}

function cart_decrement(id)
{
	var item_count = parseInt($("#"+id).val());
	if((item_count!=0)&&(cart_count!=0))
	{
		$("#"+id).val(item_count-1);
		$("#cartCount").text(--cart_count)
	}


}









function loadProducts()
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
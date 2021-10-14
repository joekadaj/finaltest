//create a class for items  - define a constructor
function item(id, name, price)
{
 this.id = id;
 this.name = name;
 this.price = price;

}

//create an array of tiems
var items = [];

items [0] = new item(1, "Sora Nendoroi", 99.99);
items [1] = new item(2, "Aqua's Wayfinder", 49.99);
items [2] = new item(3, "Mouse Pad", 19.99);

items [3] = new item(4, "Sora Funko Pop", 49.99);
items [4] = new item(5, "Music Box", 99.99);
items [5] = new item(6, "Sora Coffee Cup", 14.99);

//function to update the number of items in our shopping create
function updateCheckout()
{
  document.getElementById("cart-link").innerHTML = "Checkout ("+ sessionStorage.length + ")";

}

//function to get the id of the item
function getID(arg)
{
  
  var counter = 0;
  while(items[counter].name != arg )
  {
    counter++;

  }

  return items[counter].id;
}

//function to add items to shopping cart
function add(arg)
{
    sessionStorage.setItem(items[arg].name, items[arg].price);
    updateCheckout();
}

//functions to remove items from cart
function remove(arg)
{
  sessionStorage.removeItem(arg);
  displayCart(); //display remaining items in cart
  updateCheckout(); //upddate numer of items in the cart
}

//function to display the cart
function displayCart()
{
  var total = 0;
  var output = "<table class ='table table-hover'>";

  //check to see if the cart is empty 
  if (sessionStorage.length == 0)
  {
  document.getElementById("cart").innerHTML = "<h3>Cart is empty!</h3>";
  document.getElementById("total").innerHTML = "<h3> TOTAL: " + total + "</h3>";
  }
  else
  {
      output += "<tr><th> Image </th><th>Name</th><th> Price</th><th>Delete</th>"; //header row

      for (var x = 0; x < sessionStorage.length; x++)
      {
        var key = sessionStorage.key(x); //get key
        output += "<tr><td><img src='images/img"+ getID(key) +".jpg' width ='20px' height='20px'></td>"; //image of item
        output += "<td>" + key + "</td><td>" + sessionStorage.getItem(key) + "</td>"; //get the name and price
        output += "<td><input type = 'button' class = 'btn btn-primary' value='Delete' onclick ='remove(\"" + key + "\")'></td></tr>"; //get delete button and configure arg for remove function
        total += parseFloat(sessionStorage.getItem(key));
      }

      document.getElementById("cart").innerHTML = output;
      document.getElementById("total").innerHTML = "<h3> TOTAL: " + total.toFixed(2) + "</h3>";
  }

}
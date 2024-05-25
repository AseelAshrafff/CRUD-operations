var productName= document.getElementById('productName');
var productPrice= document.getElementById('productPrice');
var productCategory= document.getElementById('productCategory');
var productDescription= document.getElementById('productDescription');
var addBtn=document.getElementById('addBtn');
var updateBtn=document.getElementById('updateBtn');
var mood='create';
var tmp;
// ------------------------------------------------------
var products=[];
if (localStorage.getItem != null){
products=JSON.parse(localStorage.getItem("Products")); 
displayProduct(products);
}
function addProduct(){
 var product={
 name:productName.value,
 price:productPrice.value,
 category:productCategory.value,
 description:productDescription.value,
 }  
if(mood==='create') {
    products.push(product);
}
else{
products[tmp]=product;
mood = 'create'; 
}
localStorage.setItem("Products", JSON.stringify(products));
displayProduct();
 console.log(products);
 clearForm();
}
//-----------------------------------------------------
function clearForm(){
productName.value="";
productPrice.value="";
productDescription.value="";
productCategory.value="";
}
//-----------------------------------------------------

function displayProduct(arr=products){
var container=``;
for(var i=0; i<arr.length; i++){
container+=`<tr>
<td>${arr[i].name}</td>
<td>${arr[i].price}</td>
<td>${arr[i].category}</td>
<td>${arr[i].description}</td>
<td><button type="button" onclick='setFormForUpdate(${i})' class="btn btn-outline-dark">Update</button>
    <button type="button" onclick='deleteProduct(${i})' class="btn btn-outline-dark">Delete</button>
</td>
</tr>`
}
document.getElementById("tableBody").innerHTML=container;
}
//---------------------------------------------------------
function deleteProduct(productIndex){
products.splice(productIndex,1);
localStorage.setItem("Products", JSON.stringify(products));
displayProduct();
}
//---------------------------------------------------------
function searchProduct(term){
var matchedProducts=[];    
for(var i=0; i<products.length; i++){
if(products[i].name.toLowerCase().includes(term)==true){
matchedProducts.push(products[i]);
console.log(matchedProducts);
displayProduct(matchedProducts);
}}}
//----------------------------------------------------------
function setFormForUpdate(i){
addBtn.classList.replace("d-block", "d-none");
updateBtn.classList.replace("d-none", "d-block");
productName.value=products[i].name;
productPrice.value=products[i].price;
productCategory.value=products[i].category;
productDescription.value=products[i].description;
mood='update';
tmp=i;
}
//-----------------------------------------------------------


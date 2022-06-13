const URL_PATH = "http://localhost:3001/"
const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);


const searchProduct = async () =>{
  const textSearch = document.getElementById("search-product").value;
  if(textSearch.length < 3) { return }

  const products = await getProducts(textSearch);
  console.log(products);
}
 const getProducts = (textSearch) =>{
 
 
  const url = `${URL_PATH}`;



  
   return fetch(url)

   .then(response => response.json())
   .then(prods => console.log(prods))
   .catch(err => console.log(err))
 
 
 
  }
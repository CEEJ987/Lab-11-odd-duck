function Product(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.count = 0;
  }
  
  var boots = new Product("boots", "./Images/boots.jpg");
  var bag = new Product("bag", "./Images/bag.jpg");
  var pen = new Product("pen", "./Images/pen.jpg");
  var bubblegum = new Product("bubblegum", "./Images/bubblegum.jpg");
  var banana = new Product("banana", "./Images/banana.jpg");
  var products = [boots, bag, pen, bubblegum, banana];
  
  function getRandomProducts(products) {
    //the input to our function is an array of objects 
    //return an array of three random objects from input array
    const shuffledArray = products.slice().sort(()=> Math.random() - 0.5);
    const getrandom = shuffledArray.slice(0,3);
    return getrandom;
  }
  
  function displayProducts() {
    const productDisplay = document.querySelector("#imgdisplay");
    productDisplay.innerHTML = "";
    const randomProducts = getRandomProducts(products);
    randomProducts.forEach(product => {
      const img = document.createElement("img");
      img.src = product.filepath;
      img.alt = product.name;
      productDisplay.appendChild(img);
      product.count++;
    });
  }
  
  const favoriteBtn = document.querySelector("#favorite");
  favoriteBtn.addEventListener("click", displayProducts);
  
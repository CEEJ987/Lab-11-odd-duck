function Product(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.count = 0
    this.views = 0
    this.clicks = 0
  }
  
  const productDisplay =  document.querySelector("#imgdisplay");
  var clicks = 0
  const maxClicksAllowed = 25
  const state = {
    products: []
  }
  var boots = new Product("boots", "./Images/boots.jpg");
  var bag = new Product("bag", "./Images/bag.jpg");
  var pen = new Product("pen", "./Images/pen.jpg");
  var bubblegum = new Product("bubblegum", "./Images/bubblegum.jpg");
  var banana = new Product("banana", "./Images/banana.jpg");
  var chair = new Product("chair", "./Images/chair.jpg");
  var dragon = new Product("dragon","./Images/dragon.jpg");
  var dogduck = new Product("dogduck", "./Images/dog-duck.jpg");
  var cthulhu = new Product("cthulhu","./Images/cthulhu.jpg");
  var unicorn = new Product("unicorn", "./Images/unicorn.jpg");
  var scissors = new Product("scissors", "./Images/scissors.jpg");
  var breakfast = new Product("breakfast", "./Images/breakfast.jpg");
  var watercan = new Product("watercan", "./Images/water-can.jpg");
  var wineglass = new Product("wineglass", "./Images/wine-glass.jpg");
  var tauntaun = new Product("tauntaun", "./Images/tauntaun.jpg");
  var sweep = new Product("sweep", "./Images/sweep.png");
  var petsweep = new Product("petsweep", "./Images/pet-sweep.jpg");
  var shark = new Product("shark", "./Images/shark.jpg");

  state.products = [boots, bag, pen, bubblegum, banana, chair, dragon, dogduck, unicorn, scissors, breakfast, watercan, wineglass, tauntaun, sweep, petsweep, shark];
  
  function getRandomProducts() {
    //the input to our function is an array of objects 
    //return an array of three random objects from input array
    let getrandom = [];
    var displayedimgs = document.querySelectorAll('img')
    var displayedurls = [];
    for(let i = 0; i < 3; i++){
        displayedurls.push(displayedimgs[i].getAttribute('src'))
     }
     while(getrandom.length < 3){
        getrandom = Shuffledarray();
        getrandom = getrandom.filter(singlerandom => {
            return !displayedurls.includes(singlerandom.filepath
        )})
        

     }
     
    return getrandom;
  }
  function Shuffledarray(){
    const shuffledArray = state.products.slice().sort(()=> Math.random() - 0.4);
    const getrandom = shuffledArray.slice(0,3);
    return getrandom;
  }
  
  function displayProducts() {
      const randomProducts = getRandomProducts(state.products);
    productDisplay.innerHTML = "";

    randomProducts.forEach(product => {
      const img = document.createElement("img");
      img.src = product.filepath;
      img.alt = product.name;
      product.views++
      

      productDisplay.appendChild(img);
      
    });
  }
  function IncrementCount(event) {
    if (event.target === productDisplay) {
     // alert('Please click on an image');
    }
    clicks++;
    let clickimg = event.target.alt;
    for (let i = 0; i < state.products.length; i++) {
      if (clickimg === state.products[i].name) {
        state.products[i].clicks++;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      productDisplay.removeEventListener('click', IncrementCount);
      // give the button an event lister and styles so the user
      // knows its an active button:
      resultButton.addEventListener('click', renderResults);
      resultButton.className = 'clicks-allowed';
      productDisplay.className = 'no-voting';
      //renderResults();
    } else {
        displayProducts();
    }
  }
  
  function renderResults() {
    let ul = document.querySelector('ul');
    for (let i = 0; i < state.products.length; i++) {
      let li = document.createElement('li')
      li.textContent = `${state.products[i].name} had ${state.products[i].views} view and was clicked ${state.products[i].clicks} times.`;
      ul.appendChild(li);
    }
  }
  
  productDisplay.addEventListener('click', IncrementCount);
  const favoriteBtn = document.querySelector("#favorite");
  favoriteBtn.addEventListener("click", displayProducts);
  const resultButton = document.querySelector("#resultButton");
 
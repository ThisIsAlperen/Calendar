// Application js code

// Store The Data
const StorageController = (function () {
    return {

    }
})();

//
const UIController = (function () {
    return {
        
    }
})();
const ProductController = (function () {
    
    return {
        getData: function(){

        }    
    }
})();
const AppController = (function (Storage, UI, Product) {
    const loadEventListeners = function(){
       // Change page

       document.querySelector('#nav-list').addEventListener('click', changePage)
    }
    const changePage = function(e){
        e.preventDefault()
        
        if(e.target.innerText ==='Homepage'){
            console.log('homepage')
        }
        if(e.target.innerText ==='Calendar'){
            console.log('homepage')
        }
        if(e.target.innerText ==='Resume'){
            console.log('Resume')
        }
    }
    return {
        init: function(){
            loadEventListeners()
        }
    }
})(StorageController, UIController, ProductController);

AppController.init()
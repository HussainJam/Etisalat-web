// start Loader
    var loader;
    function loadNow(opacity){
        if(opacity <= 0){
            displayContent();
        }
        else {
            loader.style.opacity = opacity;
            window.setTimeout(function() {
                loadNow(opacity - .07) 
            }, 150);
        }
    }
    function displayContent(){
        loader.style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }

    document.addEventListener("DOMContentLoaded", function() {
    loader =  document.getElementById('loader');
    loadNow(1);
    });

// end Loader



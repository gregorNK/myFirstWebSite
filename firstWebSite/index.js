function todo(){
    let pElement = document.querySelectorAll(`p`);
    let imgElement = document.querySelector(`#BMW`);
    let buttonElement = document.querySelector(`#button`);
    buttonElement.addEventListener(`click`,showInfo);
    function showInfo(e){
        if(imgElement.style.display === "none"){
            imgElement.style.display = "block";
        }else{
            imgElement.style.display = "none"
        }
        pElement.forEach((e =>{
             if(e.style.display === "block"){
                e.style.display = "none";
        }else{
            e.style.display ="block"
        }}) )
        
    }
}
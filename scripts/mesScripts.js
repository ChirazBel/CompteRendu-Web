function validationLogin(){
    if(!verifObligatoire("txNom")){
        erreur("txNom");
        alert('Nom obligatoire !');
        return false;
    }else{
        normal("txNom");
        if(!verifObligatoire("txMdp")){
            erreur("txMdp");
            alert('Mot de passe obligatoire !');
            return false;
        }else{
            normal("txMdp");
            return true;
        }
    }
}

function verifObligatoire(zone){
    var oZone=document.getElementById(zone);
    if(oZone.nodeValue.length==0){
        //gererErreur(zone);
        return false;
    }else{
        oZone.style.backgroundColor="";
        return true;
    }
}
function erreur(zone){
    oZone=document.getElementById(zone);
    oZone.className='erreur';
    oZone.focus();
}
function erreur(zone){
    oZone=document.getElementById(zone);
    oZone.className='';
}
function gererErreur(zone){
    var oZOne=document.getElementById(zone);
    oZone.focus();
    oZone.style.backgroundColor="red";
}
function montrer(zone){
    oZone=document.getElementById(zone);
    oZone.style.display='block';
}
function cacher(zone){
    oZone=document.getElementById(zone);
    oZone.style.display='none';
}
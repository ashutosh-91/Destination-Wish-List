(function(){
   
    var detailsform=document.getElementById('destination_detail_form');
    detailsform.addEventListener('submit' ,hadleformsubmit);
    function hadleformsubmit(event){
        event.preventDeafault;
        var destname=event.target.elements["name"].value;
        var destloc=event.target.elements["location"].value;
        var destpic=event.target.elements["photo"].value;
        var destdescription=event.target.elements["description"].value; 
        for(let i=0;i<detailsform.length;i++)
        {
            detailsform.elements[i].value="";
        }
        var destcard=createdestinationcard(destname,destloc,destpic,destdescription);
        var wishliscontainer=document.querySelector('#destination_container');
        if(wishliscontainer.children.length===0)
        {
            document.getElementById('title').innerHTML="My Wish List";
        }
        document.querySelector('#destination_container').appendChild(destcard);
    }
    function createdestinationcard(name,location,photo,description)
    {
        var card=document.createElement("div");
        card.className='card';
        var img=document.createElement('img');
        img.setAttribute('alt',name);
        var constantphotourl="C:\Users\ashutosh\Desktop\web-dev\direction project\signpost.jpg";
        if(photo.length ===0)
        {
            img.setAttribute('src',constantphotourl);
        }
        else{
            img.setAttribute('src',photo);
        }
        card.appendChild(img);
        var cardbody=document.createElement("div");
        cardbody.className="card-body";
    
        var cardtitle=document.createElement("h3");
            cardtitle.innerText=name;
            cardbody.appendChild(cardtitle);
           
      
    
         var cardsubtitle=document.createElement("h4");
            cardsubtitle.innerText=location;
            cardbody.appendChild(cardsubtitle);
         
            if(description.length !=0)
            {
                var cardtext=document.createElement('p');
                photo.className="crad-text";
                cardtext.innerText=description;
                cardbody.appendChild(cardtext);
            }
           var cardremove=document.createElement('button');
           cardremove.innerText="Remove";
    
           cardremove.addEventListener('click',removedestination);
           cardbody.appendChild(cardremove);
           
           card.appendChild(cardbody);
    
            return card;
    }
    
    function removedestination(event)
    {
        var card=event.target.parentElement.parentElement;
        card.remove();
    }
    

})();
    
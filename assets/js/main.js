"use strict"

document.querySelectorAll(".basketarea").forEach(basketarea=>{
    basketarea.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})

document.querySelectorAll(".fruit").forEach(fruit=>{
    fruit.addEventListener("dragstart",function(e){
        e.dataTransfer.setData("fruitId",this.id);
    })
})


document.querySelectorAll(".dragonfrui").forEach(dragonfrui=>{
    dragonfrui.addEventListener("dragstart",function(ev){
        ev.dataTransfer.setData("dragonfruiId",this.id);
        
    })
})

document.querySelectorAll(".kiwano").forEach(kiwano=>{
    kiwano.addEventListener("dragstart",function(ev){
        ev.dataTransfer.setData("kiwanoId",this.id);
        
    })
})

document.querySelectorAll(".durian").forEach(durian=>{
    durian.addEventListener("dragstart",function(ev){
        ev.dataTransfer.setData("durianId",this.id);
        
    })
})


//Baskets
document.getElementById("crtbasket").addEventListener("click",function(){
        var basketare=document.createElement("div");
        basketare.classList.add("fbaskett");
        basketare.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        
        basketare.addEventListener("drop",function(even){
            let count2=1;
            if (basketare.childNodes.length === 0) {
                let datav = even.dataTransfer.getData("fruitId");
                let fruitclone1=document.getElementById(datav).cloneNode(true);
                fruitclone1.id=`${count2}`;
                this.appendChild(fruitclone1);
                count2++;
              } else {
                if(basketare.childNodes[0].classList.contains("dragonfrui")){
                    let datavd = even.dataTransfer.getData("dragonfruiId");
                    if(datavd!=""){
                    let dragonfruiclone = document.getElementById(datavd).cloneNode(true);
                    dragonfruiclone.id=`${count2}`;
                    this.appendChild(dragonfruiclone);
                    count2++;
                    }
                    else{
                        alert("You cant add it !");
                    }
                }
                else if(basketare.childNodes[0].classList.contains("kiwano")){
                    let datavda = even.dataTransfer.getData("kiwanoId");
                    if(datavda!=""){
                        let kiwanoclone = document.getElementById(datavda).cloneNode(true);
                        kiwanoclone.id=`${count2}`;
                        this.appendChild(kiwanoclone);
                        count2++;
                        }
                        else{
                            alert("You cant add it !");
                        }
                }
                else if(basketare.childNodes[0].classList.contains("durian")){
                    let datavdaa = even.dataTransfer.getData("durianId");
                    if(datavdaa!=""){
                        let durianclone = document.getElementById(datavdaa).cloneNode(true);
                        durianclone.id=`${count2}`;
                        this.appendChild(durianclone);
                        count2++;
                        }
                        else{
                            alert("You cant add it !");
                        }
                }
                else{
                    alert("you cant!");
                }
              }
        })

        document.getElementById("containerall").appendChild(basketare);
        
})


document.getElementById("calculatebtn").addEventListener("click",function(){
    let countbasket=1;
    let totalprice=0;
    document.querySelectorAll(".fbaskett").forEach(basketprices=>{
        let childsofbaskets = basketprices.children;
        let allprice = 0;
        for(let i=0 ; i<childsofbaskets.length;i++){
            allprice += Number(childsofbaskets[i].getAttribute("price"));
        }
        totalprice +=Number(allprice.toFixed(1));
        alert(`${countbasket} basket total prices: ${allprice.toFixed(1)} $`)
        countbasket++;
    })
    alert(`total price is ${totalprice} $`)
})
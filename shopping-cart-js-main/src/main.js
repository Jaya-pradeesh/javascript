let shop=document.getElementById("shop");

let basket= JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return shop.innerHTML=productsarrayData.map((x)=>{
        let{name,id,price,desc,img}=x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
                <img width="214" src=${img} alt="a man with coatsuite">
                <div class="detail">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h3>$ ${price}</h3>
                        <div class="button">
                            
                                <i onclick="decrement(${id})"class="bi bi-file-minus-fill" id="home-i-minus"></i>
                                <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                                <i onclick="increment(${id})"class="bi bi-file-plus-fill" id="home-i-plus"></i>
                            
                        </div>
                    </div>
                </div>
            </div>`
    }).join("")

}
generateShop();

let increment = (id)=>{
    // let selectedItem = id
    let search = basket.find((x)=>x.id === id)

    if(search === undefined){
        basket.push({
            id:id,
            item:1,
        })
    }
    else
    {
        search.item += 1;
    }
    // console.log(basket)
    update(id)
    localStorage.setItem("data", JSON.stringify(basket));
   


}
let decrement=(id)=>{
    
    
    // let selectedItem = id
    let search = basket.find((x)=>x.id === id)
    if(search === undefined){
        return
    }

    else if(search.item === 0){
        return;
    }
    else
    {
        search.item -= 1;
    }

    update(id)

    basket=basket.filter((x)=>x.item !== 0)
    localStorage.setItem("data", JSON.stringify(basket));


        
}

    


let update=(id)=>{
    let search = basket.find((x)=> x.id === id)
   
    document.getElementById(id).innerHTML=search.item
    calculate()

}
let calculate=()=>{
    let amount=document.getElementById("cartamount")
    // console.log()
    amount.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)

}
calculate()

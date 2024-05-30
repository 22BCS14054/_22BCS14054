const NFTs =[]

function minNFT (_company,_carmodel,_ManufacturingYear,_price){
 const NFT ={
    "company": _company,
    "carmodel": _carmodel,
    "ManufacturingYear":_ManufacturingYear,
    "price":_price

    }
    NFTs.push(NFT);
    console.log("Minted :" +_company);
}
function listNFTs( ){
  for(let i=0; i<NFTs.length;i++){
    console.log("\nID: \t\t"+(i+1));
    console.log("Company: \t" + NFTs[i].company);
    console.log("carmodel: \t" + NFTs[i].carmodel);
    console.log("ManufacturingYear:" + NFTs[i].ManufacturingYear);
    console.log("price :\t\t" + NFTs[i].price);
  }
}
function getTotalSupply(){
    console.log(NFTs.length);


}

minNFT("Mercedes","A_Class","2015","45 lakh");
minNFT("Audi ","Q8 etron ","2017","1.55 crore");
minNFT("Lamborgini","Aventador","2022","4.79 crore");
minNFT("Bugatti","Chiron","2016","19.29 crores");
listNFTs();
getTotalSupply();
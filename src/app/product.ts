export class Product {
    productId:number=0;
    productName:string="";
    productCost:number=0;
    productQty:number=0;

    constructor(productId:number,productName:string,productCost:number,productQty:number){
        this.productId=productId;
        this.productName=productName;
        this.productCost=productCost;
        this.productQty=productQty;
    }
}

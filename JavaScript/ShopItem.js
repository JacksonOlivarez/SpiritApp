
class ShopItem {
    constructor(name, cost, isAvailable, alreadyPurchased, pathToIconFile){
        this.name = name;
        this.cost = cost;
        this.isAvailable = isAvailable;
        this.alreadyPurchased = alreadyPurchased;
        this.pathToIconFile = this.pathToIconFile;
    }

    purchase(){
        if (this.isAvailable){
            this.isAvailable = true;
        }
        // Already Purchased
    }

    getPathToIconFile(){
        return this.pathToIconFile;
    }
    getName(){
        return this.name;
    }
    getCost(){
        return this.cost;
    }
    isAlreadyPurchased(){
        return this.alreadyPurchased;
    }
    isAvailable(){
        return this.isAvailable;
    }
    setCost(c){
        this.cost = c;
    }
    


}
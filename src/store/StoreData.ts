import { makeAutoObservable, runInAction } from "mobx";

export type DataType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity?: number;
    inCart?: boolean;
};

class StoreData {
    data: Array<DataType> = [];
    cart: Array<DataType> = [];
    // searchArr: Array<DataType> = []
    isLoading: boolean = true;
    isNetworkError = false
    breadCrumbs: Array<string> = []
    searchValue: string = ''

    constructor() {
        makeAutoObservable(this);
    }

    getData() {
        try {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((json) => {
                    runInAction(() => {
                        this.data = json;
                        this.isLoading = false;
                    });
                })
                .catch(err => {
                    console.log('catch Network error', err)
                    this.isNetworkError = true
                });
        } catch (error) {
            console.log('Network error try catch');
        }
    }

    addToCart(id: number) {
        this.data = this.data.map((i) => {
            if (id === i.id) {
                this.cart.push({ ...i, quantity: 1 });
                return { ...i, inCart: true };
            } else return { ...i };
        });
    }

    delFromCart(id: number) {
        this.cart = this.cart.filter((i) => i.id !== id);
        this.data = this.data.map((i) => {
            if (id === i.id) return { ...i, inCart: false };
            else return { ...i };
        });
    }

    changeQuantity(id: number, operator: string) {
        this.cart = this.cart.map((i) => {
            if (id === i.id) {
                if (operator === "+") {
                    if (i.quantity) {
                        return { ...i, quantity: (i.quantity += 1) };
                    } else return { ...i };
                } else if (operator === "-") {
                    if (i.quantity) {
                        if (i.quantity === 1) return { ...i };
                        else return { ...i, quantity: (i.quantity -= 1) };
                    } else return { ...i };
                } else return { ...i };
            } else return { ...i };
        });
    }

    category(category: string | undefined, sortBy: string ) {
        if(!sortBy || sortBy === 'Rating') {
            return this.data
            .filter((i) => i.category === category)
            .sort((a,b) => b.rating.rate - a.rating.rate)
        }
        if(sortBy === 'Big') {
            return this.data
            .filter((i) => i.category === category)
            .sort((a,b) => b.price - a.price)
        }
        if(sortBy === 'Small') {
            return this.data
            .filter((i) => i.category === category)
            .sort((a,b) => a.price - b.price)
        }
        if(sortBy === 'Name') {
            return this.data
            .filter((i) => i.category === category)
            .sort((a, b) => a.title.localeCompare(b.title))
        }
    }

    // search(value: string) {
    //     if(value.trim().length) {
    //         this.searchArr = this.data.filter(i => {
    //             return i.title.toLowerCase().includes(value.trim().toLowerCase())
    //         })
    //     } else this.searchArr = []
    // }

    addBread(str: string = '') {
        this.breadCrumbs = str.replace('%20', ' ').slice(1).split('/')
    }

    setSearchValue(value: string) {
        this.searchValue = value.trim()
    }
}

export default new StoreData();

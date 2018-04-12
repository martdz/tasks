//87 225 559

class Num{
	constructor(n, m){
		this.n = n;
		this.m = m;
	}
	sumNumbers() {
		if(this.m > this.n.toString().length) return false;
		return this.n.toString().split("").reverse().filter((item, i) => i < this.m).reduce((cur, next) => +cur + +next);
	}
	commonMultiple(){
		let arr = [];
        for(let i = 1; i < this.n*this.m; i++){
            if(i % this.n == 0 && i % this.m == 0){
				arr.push(i);
			}
        }
        return arr;
	}
	mersenNumbers(){
        let simple = [];
        f: for(let i = 2; i < this.n; i++){
            for(let j = 2; j < i; j++){
                if(i % j == 0){
                    continue f;
                }
            }
            simple.push(i);
        }
        return simple.filter(val => Number.isInteger(Math.log2(val+1)));
    }
}
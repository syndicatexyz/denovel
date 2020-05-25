export class Test {
	private number: number = 0;
	increase(number: number){
		this.number = this.number + number;
		console.log(this.number);
	}
}
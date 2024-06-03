// Complete the js code
function Car(make, model) {
	constructor(make, model){
		this._make = make;
		this._model = model;
	}

	get getMakeModel(){
		return (this._make + " "+ this._model);
	}
	
}

function SportsCar extends Car(make, model, topSpeed) {

	constructor(make, model, topSpeed ){
		super(make, model);
		this._topSpeed = topSpeed;
	}
	get getTopSpeed(){
		return this._topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

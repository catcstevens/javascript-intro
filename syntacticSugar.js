function makeClass() {
    class Vegetable {
      constructor(name){
        this.name = name;
      }
    }
  
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 

  //getters and setters

  function makeClass() {
    class Thermostat {
      constructor(temp) {
        this._temp = 5/9 * (temp - 32);
      }
      get temperature(){
        return this._temp;
      }
      set temperature(updatedTemp){
        this._temp = updatedTemp;
      }
    }
    return Thermostat;
  }
  
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); 
  let temp = thermos.temperature; 
  thermos.temperature = 26;
  temp = thermos.temperature; 
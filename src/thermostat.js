'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.PS_MAX_TEMPERATURE = 25;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaximumTemperature()){
    return;
    }
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;

}

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSaving() === true){
    return this.temperature === this.PS_MAX_TEMPERATURE;
  }
  else {
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  };
};

Thermostat.prototype.isPowerSaving = function () {
  return this.powerSaving;
};


Thermostat.prototype.powerSavingOff = function () {
  this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSaving = true;
};

Thermostat.prototype.tempReset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if(this.currentTemperature() < 18){

  return "low";
  }
  else if(this.currentTemperature() >= 18 && this.currentTemperature() < 25){

  return "medium";

  } else {

  return "high";

  };
};

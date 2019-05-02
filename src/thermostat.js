'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.PS_MAX_TEMPERATURE = 25;
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

'use strict';

describe('Thermostat', function(){

 var thermostat;

 beforeEach(function(){
  thermostat = new Thermostat

 });

 it('has a starting temp of 20 degrees', function(){
   expect(thermostat.currentTemperature()).toEqual(20);

 });

 it('increases when temp is turned up', function(){
   thermostat.up();
   expect(thermostat.currentTemperature()).toEqual(21);
 });

 it('decreases when temp is turned down', function(){
   thermostat.down();
   expect(thermostat.currentTemperature()).toEqual(19);
 });

 it('has a a minimum temperature', function(){
   for (var i = 0; i < 11; i++){
   thermostat.down();
   }
   expect(thermostat.currentTemperature()).toEqual(10);
 });

 it('confirms that power saver mode is on by default', function(){
   expect(thermostat.isPowerSaving()).toEqual(true);
 });

 it('turns power saver off', function(){
  thermostat.powerSavingOff();
  expect(thermostat.isPowerSaving()).toEqual(false);
 });

 it('turns power saver on', function(){
   thermostat.powerSavingOff();
   thermostat.powerSavingOn();
   expect(thermostat.isPowerSaving()).toEqual(true);
 });

 it('has a maximum power saver temperature', function(){
   for (var i = 0; i < 6; i++){
   thermostat.up();
   }
   expect(thermostat.currentTemperature()).toEqual(25);
 });

 it('has a maximum temperature non power saver temperature',function(){
     thermostat.powerSavingOff(); 
     for (var i = 0; i < 13; i++){
     thermostat.up();
     }
     expect(thermostat.currentTemperature()).toEqual(32);
   });

 });

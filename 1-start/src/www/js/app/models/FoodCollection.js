import {Collection, Model} from 'lavaca';
import {FoodModel} from './FoodModel';
import {data} from './data';

export let Food = Collection.extend(function Food() {
  return Collection.call(this, data.feed);
});

export let FoodCollection = new Food();
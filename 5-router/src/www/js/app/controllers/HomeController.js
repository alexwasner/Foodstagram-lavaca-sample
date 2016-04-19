import {BaseController} from 'app/controllers/BaseController';
import {HomeView} from 'app/ui/views/HomeView';
import {FoodView} from 'app/ui/views/FoodView';
import {FoodCollection} from 'app/models/FoodCollection';

export let HomeController = BaseController.extend({
  index(params, history) {
    return this.view(null, HomeView, FoodCollection, params)
               .then(this.updateState(history, 'Foodstagram', params.url));
  },
  food(params, history) {
	  return this
	    .view(null, FoodView, {}, params)
	    .then(this.updateState(history, 'Food', params.url));
	}
});

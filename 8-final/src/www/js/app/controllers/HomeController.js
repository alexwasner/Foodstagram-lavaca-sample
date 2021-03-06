import {BaseController} from 'app/controllers/BaseController';
import {HomeView} from 'app/ui/views/HomeView';
import {FoodView} from 'app/ui/views/FoodView';
import {PageWrapper} from 'app/ui/views/PageWrapper';
import {FoodCollection} from 'app/models/FoodCollection';
import {Collection} from 'lavaca';

export let HomeController = BaseController.extend({
  index(params, history) {
    return this.view(null, HomeView, FoodCollection, params)
               .then(this.updateState(history, 'Home Page', params.url));
  },
  food(params, history) {
    var model = params && params.model ? new Collection([params.model]) : null;
    if(!model){
      return Promise.reject();
    }
    model.view = FoodView;
    model.showBack = true;
    return this.view(null, PageWrapper, model, params)
               .then(this.updateState(history, 'Food View', params.url));
  }
});

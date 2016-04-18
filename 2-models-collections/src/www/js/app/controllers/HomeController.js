import {BaseController} from 'app/controllers/BaseController';
import {HomeView} from 'app/ui/views/HomeView';

export let HomeController = BaseController.extend({
  index(params, history) {
    return this.view(null, HomeView, null, params)
               .then(this.updateState(history, 'Home Page', params.url));
  }
});

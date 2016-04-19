import { View,
          Router } from 'lavaca';
import {merge} from 'mout/object';
import template from 'templates/ProfileView';

/**
 * @class app.ui.views.ProfileView
 * @super lavaca.mvc.View
 * ProfileView view type
 */
export let ProfileView = View.extend(function ProfileView(){
  View.apply(this, arguments);
  this.mapEvent({
    '.food-image':{
      'tap':this.onTapFood
    }
  });
},{
  onTapFood(e){
    let model = merge({user:this.model}, this.model.posts[e.currentTarget.dataset.index]);
    Router.exec('/food/'+e.currentTarget.dataset.id, {model:model});
  },
  className: 'profile',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }


});

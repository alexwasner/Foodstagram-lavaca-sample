import { View } from 'lavaca';
import template from 'templates/FoodView';

/**
 * @class app.ui.views.FoodView
 * @super lavaca.mvc.View
 * FoodView view type
 */
export let FoodView = View.extend(function FoodView(){
  View.apply(this, arguments);
},{
  /**
  * @field {String} className
  * @default 'food'
  * A class name added to the view container
  */
  className: 'food',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }


});

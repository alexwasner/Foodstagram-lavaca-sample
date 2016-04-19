import { View } from 'lavaca';
import template from 'templates/FoodView';

export let FoodView = View.extend(function FoodView(){
  View.apply(this, arguments);
},{
  className: 'food',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }


});

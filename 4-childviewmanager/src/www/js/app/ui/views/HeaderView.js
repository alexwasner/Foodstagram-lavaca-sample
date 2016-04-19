import { View } from 'lavaca';
import template from 'templates/HeaderView';

/**
 * @class app.ui.views.HeaderView
 * @super lavaca.mvc.View
 * HeaderView view type
 */
export let HeaderView = View.extend(function HeaderView(){
  View.apply(this, arguments);
},{
  /**
  * @field {String} className
  * @default 'header'
  * A class name added to the view container
  */
  className: 'header',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }


});

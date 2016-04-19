import { View } from 'lavaca';
import template from 'templates/ProfileView';

/**
 * @class app.ui.views.ProfileView
 * @super lavaca.mvc.View
 * ProfileView view type
 */
export let ProfileView = View.extend(function ProfileView(){
  View.apply(this, arguments);
},{
  /**
  * @field {String} className
  * @default 'profile'
  * A class name added to the view container
  */
  className: 'profile',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }


});

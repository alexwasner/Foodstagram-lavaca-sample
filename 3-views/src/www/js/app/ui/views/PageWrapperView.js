import { View } from 'lavaca';
import template from 'templates/PageWrapperView';

/**
 * @class app.ui.views.PageWrapperView
 * @super lavaca.mvc.View
 * PageWrapperView view type
 */
export let PageWrapperView = View.extend(function PageWrapperView(){
  View.apply(this, arguments);
},{
  /**
  * @field {String} className
  * @default 'pagewrapper'
  * A class name added to the view container
  */
  className: 'pagewrapper',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }


});

import { View, History } from 'lavaca';
import template from 'templates/HeaderView';

export let HeaderView = View.extend(function HeaderView() {
  View.apply(this,arguments);
  this.mapEvent({
  	'.back':{
  		'tap':this.back
  	}
  })
},{
  className: 'header',
  back(e){
    History.back();
  },
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});

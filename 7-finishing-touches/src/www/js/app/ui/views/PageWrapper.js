import {View} from 'lavaca';
import {HeaderView} from './HeaderView';
import template from 'templates/PageWrapper';

export let PageWrapper = View.extend(function PageWrapper() {
  View.apply(this,arguments);
  this.mapChildView({
  	'#header-view':{TView:HeaderView}
  });
  if(this.model && this.model.view){
  	this.mapChildView({
  		'.content':{
        TView:this.model.view,
        model:this.model
      }
  	});
  }
},{
  generateHtml(model) {
  	model.showBack = true;
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
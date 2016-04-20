import { View } from 'lavaca';
import template from 'templates/PageWrapperView';
import {HeaderView} from './HeaderView';

export let PageWrapperView = View.extend(function PageWrapperView(){
  View.apply(this, arguments);

  this.mapChildView({
    '#header-view':{
      TView:HeaderView
    }
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
  className: 'pagewrapper',
  generateHtml(model) {
    model.showBack = true;
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }


});

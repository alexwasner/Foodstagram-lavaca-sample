import { View } from 'lavaca';
import template from 'templates/home';
import {FoodView} from './FoodView';
import {ProfileView} from './ProfileView';
import {HeaderView} from './HeaderView';
import {ChildViewManagerViewMixin, 
        ChildViewManagerViewFillin} from 'app/mixins';

export let HomeView = View.extend(function HomeView() {
  View.apply(this,arguments);
  this.mapEvent({
    '.tab-item':{
      'tap': this.onTapItem
    }
  });

  this.mapChildView({
    '#header-view':{
      TView:HeaderView
    }
  });

  this.mapChildViewManager('#views',{
    '/food':{
      TView:FoodView,
      step:1
    },
    '/profile':{
      TView:ProfileView,
      step:2
    }
  }, ChildViewManagerViewMixin, ChildViewManagerViewFillin);
},{
  className: 'home',
  onTapItem(e){
    let item = e.currentTarget.dataset.item;
    if(item === 'camera'){
      return this.takePhoto();
    }
    this.childViewManager.exec('/'+item);
  },
  takePhoto(){
    console.log('PHOTO TAKEN');
  },
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
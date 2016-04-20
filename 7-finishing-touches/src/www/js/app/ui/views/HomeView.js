import { View } from 'lavaca';
import template from 'templates/home';
import {UserModel} from 'app/models/UserModel';
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
      model:UserModel,
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
    if(window.cordova){
      navigator.camera.getPicture(image=>this.triggerNewImage(image), err=>alert(err), {
        quality:80,
        destinationType:Camera.DestinationType.FILE_URI
      });
    }
    else{
      this.triggerNewImage();
    }
  },
  triggerNewImage(image){
    image = image || 'http://lorempixel.com/400/400/food/';
    this.model.unshift({
      imageUrl:image,
      likes:0,
      comment:'This is a placeholder comment.',
      user:{
        username:UserModel.username,
        profileImage:UserModel. profileImage
      }
    });
    this.model.$trigger('newImage');
  },
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
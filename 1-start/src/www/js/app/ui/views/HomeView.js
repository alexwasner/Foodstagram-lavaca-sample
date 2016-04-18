import { View } from 'lavaca';
import template from 'templates/home';
import {HeaderView} from './HeaderView';
import { ChildViewManagerViewMixin, ChildViewManagerViewFillin } from 'app/mixins';
import {FoodView} from './FoodView';
import {ProfileView} from './ProfileView';
import {StateModel} from 'app/models/StateModel';
import {UserModel} from 'app/models/UserModel';
import {get} from 'mout/object';

export let HomeView = View.extend(function HomeView() {
  View.apply(this,arguments);
  this.mapEvent({
    '.tab-item':{
      'tap':this.onTapItem
    },
    self:{
      'cvmInitialized':this.onRenderComplete
    }
  });

  this.mapChildView({
    '#header-view':{TView:HeaderView}
  });

  this.mapChildViewManager('#views', {
    '/food': {
      TView: FoodView,
      step:StateModel.currentTabView == 'food' ? 1 : 2
    },
    '/profile': {
      TView: ProfileView,
      model: UserModel,
      step: StateModel.currentTabView == 'profile' ? 1 : 2
    }
  }, ChildViewManagerViewMixin, ChildViewManagerViewFillin);
},{
  className: 'home',
  onRenderComplete(attempts){
    this.el.find('.tab-item[data-item='+StateModel.currentTabView+']').addClass('selected');
    this.el.find('.overflow-scroll').scrollTop(StateModel.offsets[StateModel.currentTabView]);
  },
  onTapItem(e){
    if($(e.currentTarget).hasClass('selected')){
      return;
    }
    let item = e.currentTarget.dataset.item;
    if(item === 'camera'){
      return this.takePhoto();
    }
    StateModel.offsets[StateModel.currentTabView] = this.el.find('.overflow-scroll').scrollTop();
    this.childViewManager.exec('/'+item).then(()=>{
      StateModel.currentTabView = item;
      $(e.currentTarget).addClass('selected').siblings().removeClass('selected');
      this.el.find('.overflow-scroll').scrollTop(StateModel.offsets[StateModel.currentTabView]);
    });
  },
  takePhoto(){
    if(window.cordova && get(navigator,'camera')){
      return navigator.camera.getPicture(image=>{
        this.triggerNewImage(image);
      }, err=>{
        alert(err);
      }, {
        quality:100,
        destinationType: Camera.DestinationType.FILE_URI
      });
    }
    this.triggerNewImage();
  },
  triggerNewImage(image){
    image = image ||'http://lorempixel.com/550/440/food/';
    this.model.unshift({
      imageUrl:image,
      likes:0,
      liked:false,
      comment:'This is a new photo of my food!',
      user:{
        username:UserModel.username,
        profileImage:UserModel.profileImage
      }
    });
    UserModel.posts.unshift({
      imageUrl:image,
      comment:'This is a new photo of my food!',
      id:'abcdefg',
      likes:0
    });
    UserModel.$trigger('newImage');
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
import { View, Router } from 'lavaca';
import {merge} from 'mout/object';
import template from 'templates/ProfileView';
import {StateModel} from 'app/models/StateModel';

export let ProfileView = View.extend(function ProfileView() {
  View.apply(this,arguments);
  this.mapEvent({
  	'.food-image':{
  		'tap':this.onTapFood
  	},
    model:{
      'newImage':this.newImage
    }
  })
},{
  className: 'profile',
  newImage(){
    this.render('.images');
  },
  onTapFood(e){
    if(this.model.posts && e.currentTarget.dataset.index){
      let model = merge({user:this.model}, this.model.posts[e.currentTarget.dataset.index]);
      StateModel.offsets[StateModel.currentTabView] = this.el.find('.overflow-scroll').scrollTop();
    	Router.exec('/food/'+e.currentTarget.dataset.id, {model:model})
    }
  },
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
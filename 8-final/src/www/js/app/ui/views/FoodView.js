import { View } from 'lavaca';
import {get} from 'mout/object';
import template from 'templates/FoodView';

export let FoodView = View.extend(function FoodView() {
  View.apply(this,arguments);

  this.mapEvent({
    '.image':{
      'tap':this.like
    },
    model:{
    	'change':this.onModelChange,
      'newImage':this.newImage
    }
  });
},{
  className: 'food',
  newImage(){
    this.render();
  },
  like(e){
  	if(this.singleTapped === e.currentTarget.dataset.index){
      let index = e.currentTarget.dataset.index == "" ? 0 : e.currentTarget.dataset.index;
  		try{
	  		this.singleTapped = null;
	  		$(e.currentTarget).nextAnimationEnd(()=>{
		  		$(e.currentTarget).removeClass('liked');
	  		});
		  	$(e.currentTarget).addClass('liked');
        let model = typeof this.model.length == 'undefined' ? this.model : this.model[index];
        model.$set({
          'liked':true,
          likes:this.model[index].likes ? ++this.model[index].likes : 1
        });
  		}catch(e){}
  	}
  	else{
  		this.singleTapped = e.currentTarget.dataset.index;
  		setTimeout(()=>{this.singleTapped = null}, 250);
  	}
  },
  onModelChange(change){
    let csv = [];
    change.forEach((e,i)=>{
      if(e.path && e.path.length > 1 && e.path[1] == 'liked'){
        csv.push('.food-wrapper[data-index='+e.path[0]+'] .comments');
      }
    });
    if(csv.length){
  	 this.render(csv.join(', '));
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
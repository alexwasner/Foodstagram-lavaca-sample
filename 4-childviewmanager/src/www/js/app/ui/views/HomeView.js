import { View } from 'lavaca';
import template from 'templates/home';

export let HomeView = View.extend(function HomeView() {
  View.apply(this,arguments);
  this.mapEvent({
  	'.food-wrapper .image':{
  		'tap':this.like
  	},
  	model:{
  		'change':this.onModelChange
  	}
  });
},{
  className: 'home',
  like(e){
  	let index = e.currentTarget.dataset.index;
  	if(this.singleTapped === index){
  		//do something here
  		console.warn('liked');
  		this.singleTapped = null;
  		$(e.currentTarget).nextAnimationEnd(()=>{
  			$(e.currentTarget).removeClass('liked');
  		});
  		$(e.currentTarget).addClass('liked');
  		this.model[index].$set({
  			liked:true,
  			likes:this.model[index].likes ? ++this.model[index].likes : 1
  		});
  	}
  	else{
	  	this.singleTapped = e.currentTarget.dataset.index;
	  	setTimeout(()=>{this.singleTapped = null;},250);
  	}
  },
  onModelChange(change){
  	let csv = [];
  	change.forEach((e,i)=>{
  		if(e.path && e.path.length > 1 && e.path[1] == 'liked'){
  			csv.push('.food-wrapper[data-index='+e.path[0]+'] .comments');
  		}
  	});
  	this.render();
  	this.render(csv.join(', '));
  },
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
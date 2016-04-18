import { View } from 'lavaca';
import template from 'templates/home';

export let HomeView = View.extend(function HomeView() {
  View.apply(this,arguments);
},{
  className: 'home',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
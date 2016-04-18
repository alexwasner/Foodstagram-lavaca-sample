import { View, History } from 'lavaca';
import template from 'templates/HeaderView';

export let HeaderView = View.extend(function HeaderView() {
  View.apply(this,arguments);
},{
  className: 'header',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});

import {View} from 'lavaca';
import template from 'templates/PageWrapper';

export let PageWrapper = View.extend(function PageWrapper() {
  View.apply(this,arguments);
},{
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
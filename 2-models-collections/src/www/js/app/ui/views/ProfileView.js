import { View, Router } from 'lavaca';
import template from 'templates/ProfileView';

export let ProfileView = View.extend(function ProfileView() {
  View.apply(this,arguments);
},{
  className: 'profile',
  generateHtml(model) {
    return new Promise((resolve) => {
      template(model, (err, html) => {
        resolve(html);
      });
    });
  }
});
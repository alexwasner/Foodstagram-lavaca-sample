
import 'imports?$=jquery!jquery-mobile';
import 'app/env/ModernizrTests';
import {History, Connectivity, Application} from 'lavaca';
import {HomeController} from 'app/controllers/HomeController';
import {ViewManagerViewMixin, ViewManagerViewFillin} from 'app/mixins';
import {HeaderView} from 'app/ui/views/HeaderView';
import {StateModel} from 'app/models/StateModel';
import {SwipeHistoryBackManager} from 'app/managers/SwipeHistoryBackManager';

History.overrideStandardsMode();

Connectivity.registerOfflineAjaxHandler(function() {
  alert("Offline");
});

export default new Application(function() {
  // Add routes

  let sb = new SwipeHistoryBackManager();
  sb.init();

  this.router.add({
    '/': [HomeController, 'index'],
    '/food/{:id}': [HomeController, 'food']
  });

  this.viewManager.initBreadcrumbTracking();
  this.viewManager.pageViewMixin = ViewManagerViewMixin;
  this.viewManager.pageViewFillin = ViewManagerViewFillin;
});

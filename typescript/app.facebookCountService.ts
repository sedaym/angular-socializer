/// <reference path="../typings/angularjs/angular.d.ts" />
module angularSocializer {
  'use strict';

  class FacebookCount {

    static $inject = ['$http'];

    constructor(public $http) {
      console.log('const');
    }

    getFacebookCount(url: string) {
      return this.$http({
        method: "GET",
        url: "http://graph.facebook.com/?id=" + encodeURIComponent(url),
      })
      .then((response) => {
        return response.data;
      }, (reason) => {
        return reason;
      });
    }
  }

  angular.module('angularSocializer')
    .service('facebookCount', FacebookCount);
}
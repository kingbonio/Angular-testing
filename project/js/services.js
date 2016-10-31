angular.module("services", [])
  // $get object Users from users.js and return to config
  .provider("users", [function(){
    this.$get = [function () {
      return new Users()
    }];
  }]);

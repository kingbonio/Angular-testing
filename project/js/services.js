angular.module("form", [])
  .provider("users", function(){
    this.$get = [function () {
      return new Users()
    }]
  })

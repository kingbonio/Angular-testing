function Users(){
  this.users = [
    {name: "david", age: 47},
    {name: "craig", age: 13},
    {name: "barrie", age: 52},
    {name: "sheila", age: 24},
    {name: "agnes", age: 75}
  ];
  this.addUser = function(userData){
    this.users.push({
      name: userData.name,
      age: userData.age
    });
  };
};
function Users(){
  // Set userList to default values
  this.userList = [
    {name: "david", age: 47},
    {name: "craig", age: 13},
    {name: "barrie", age: 52},
    {name: "sheila", age: 24},
    {name: "agnes", age: 75}
  ];
  // Push new user inputted data to array
  this.addUser = function(userData){
    this.userList.push({
      name: userData["name"],
      age: userData["age"]
    });
  };
};

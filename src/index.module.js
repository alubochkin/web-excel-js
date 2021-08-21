console.log('started module index');

const promise = new Promise(resolve => {
  setTimeout(() => resolve('resolve') , 1000)
}).then(data => console.log(data))

class User {
  constructor(name) {
    this.name = name;
  }

  get getname() {
    return this.name
  }
}

const ivan = new User('Ivan')

console.log('ivan.getname', ivan.getname)
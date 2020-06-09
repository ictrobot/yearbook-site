const users = require('./data/users.json')
const nameToID = {}
Object.values(users).forEach(list => Object.keys(list).forEach((x) => { nameToID[list[x]] = x }))

export default {
  getUsers () {
    return users
  },
  getUser (uid) {
    return require('./data/user/' + uid + '.json')
  },
  allNames () {
    return Object.values(users).reduce((a, objs) => a.concat(Object.values(objs)), [])
  },
  getUserByName (name) {
    return this.getUser(nameToID[name])
  }
}

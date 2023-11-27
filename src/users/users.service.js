const Users = require('./users.model')

class UsersServices {

  static async findAll(){
    return await Users.findAll({
      where: {
        status: 'avaible'
      }
    })
  }

  static async create(data){
    return await Users.create(data);
  }
  
  static async findOne(id){
    return await Users.findOne({
      where: {
        id: id,
        status: 'avaible'
      }
    })
  }

  static async update(user, data){
    return await user.update(data)
  }

  static async delete(user){
    return await user.update({
      status: 'unavaible'
    })
  }

}

module.exports = UsersServices
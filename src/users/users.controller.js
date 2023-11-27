const UsersServices = require("./users.service");

exports.findAll = async(req, res) => {
  try {
    const { requestTime } = req;
  
    const users = await UsersServices.findAll()

    return res.status(200).json({
      requestTime,
      users
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!🥲',
      error
    })
  }
}

exports.create = async(req, res) => {
  try {
    const { requestTime } = req;
    const { name, email, password, role } = req.body;
  
    const users = await UsersServices.create({ 
      name, 
      email, 
      password, 
      role   
    })
  
    return res.status(201).json({
      requestTime,
      data: users
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!🥲',
      error
    })
  }
  
}

exports.findOne = async (req, res) => {
  try {
    const { requestTime } = req;
  const { id } = req.params;

  const user = await UsersServices.findOne(id)

  if(!user){
    return res.status(404).json({
      status: 'error',
      message: `User with id: ${ id } not found🫡`
    })
  }

  return res.status(200).json({
    requestTime,
    user
  })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!🥲',
      error
    })
  }
  
}

exports.update = async(req, res) => {
  try {
    const { requestTime } = req;
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await UsersServices.findOne(id)

    if(!user){
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${ id } not found🫡`
      })
    }

    const userUpdated = await UsersServices.update(user, {
      name,
      email
    })

    return res.status(200).json({
      requestTime,
      userUpdated
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!🥲',
      error
    })
  }
}

exports.deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UsersServices.findOne(id);

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found🫡`
      });
    }

    await UsersServices.update(user, { status: 'disabled' });

    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!🥲',
      error
    });
  }
};
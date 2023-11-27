const RepairsServices = require("./repairs.service");

exports.findAll = async(req, res) => {
  try {
    const { requestTime } = req;
  
    const repairs = await RepairsServices.findAll()

    return res.status(200).json({
      requestTime,
      repairs
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
    const { date, userId } = req.body;
  
    const repairs = await RepairsServices.create({ 
      date, 
      userId  
    })
  
    return res.status(201).json({
      requestTime,
      data: repairs
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

  const repair = await RepairsServices.findOne(id)

  if(!repair){
    return res.status(404).json({
      status: 'error',
      message: `Repair with id: ${ id } not found🫡`
    })
  }

  return res.status(200).json({
    requestTime,
    repair
  })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
      error
    })
  }
  
}

exports.update = async(req, res) => {
  try {
    const { requestTime } = req;
    const { id } = req.params;
    const {date, userId, status  } = req.body;

    const repair = await RepairsServices.findOne(id)

    if(!repair){
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${ id } not found🫡`
      })
    }

    const repairUpdated = await RepairsServices.update(repair, {
      date, 
      userId,
      status 
    })

    return res.status(200).json({
      requestTime,
      repairUpdated
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!🥲',
      error
    })
  }
}

exports.deleteRepairs = async(req, res) => {
  try {
    const { id } = req.params;

    const repair = await RepairsServices.findOne(id)
  
    if(!repair){
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${ id } not found🫡`
      })
    }
  
    await RepairsServices.delete(repair)
  
    return res.status(204).json(null)
    
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!🥲',
      error
    })
  }
  
}
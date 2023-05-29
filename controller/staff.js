const staffModule = require("../model/staff");
const csv = require("csvtojson");

const bulkUpload = async (data) => {
  const dups = [];
  const nonDups = [];
  for (const staff of data) {
    const staffFound = await staffModule.findOne({
      saral_id: staff.saral_id,
    });
    if (staffFound) {
      dups.push(staff);
    } else {
      let record = new staffModule(staff);
      record = await record.save();
      if (record) {
        nonDups.push(staff);
      }
    }
  }
  const duplicates = {
    totalDuplicates: dups.length ? dups.length : 0,
    data: dups.length ? dups : [],
  };
  const nonduplicates = {
    totalNonDuplicates: nonDups.length ? nonDups.length : 0,
    data: nonDups.length ? nonDups : [],
  };
  return {
    duplicates: duplicates,
    nonduplicates: nonduplicates,
  };
};

exports.importCsvFile = async (req, res, next) => {
  const file = req.file;
  const data = await csv().fromFile(file.path);
  try {
    const result = await bulkUpload(data);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.singleUpload = async (req, res) => {
  const data = [req.body];
  try {
    const result = await bulkUpload(data);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllStaffs = async(req, res) => {
    const userAccessed= req.userLoggedIn[0];
    try{
        const users = await staffModule.find();
        res.status(201).send({ status: true, message: `user has access to this api`, data: {userId:userAccessed._id,Accessdata: users} });
    }catch(err){
        res.status(500).json({err});
    }
}


exports.getStaff = async(req, res) => {
    try{
        const user = await staffModule.find({_id:req.params.employee_id});
        res.status(201).json(user);
    }catch(err){
        res.status(5000).json({err});
    }

}

exports.deleteStaff = (req, res) => {
    staffModule.findOneAndDelete({_id:req.params.employee_id},(err,data) => {
        if(err){
            res.json({err});
        }
        else{
            res.json(data);
        }
    })  
}
exports.updateStaff = (req, res) => {
    staffModule.findOneAndUpdate({_id:req.params.employee_id}, req.body, {new:true},
         (err, data) => {
             if(err){
                 res.json({err});
             }
             else{
                 res.json(data);
             }
         }
    )
}

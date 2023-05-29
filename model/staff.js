const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('node-uuid')
const objectId = mongoose.Schema.Types.ObjectId

const schema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    saral_id: {
        type: String,
         required: true,
         unique: true
    },
    scode: {
        type: String
    },
    // role:{
    //     type: objectId,
    //     ref: 'roles',
    // },
    employee_id:Number,
    designation:String,
    qualification:String,
    work_exp:String,
    name:String,
    middlename:String,
    father_name:String,
    contact_no:String,
    emergency_contact_no:String,
    dob:String,
    marital_status:String,
    String_of_joining:String,
    String_of_leaving:String,
    local_address:String,
    permanent_address:String,
    note:String,
    image:String,
    username:String,
    password:String,
    gender:String,
    account_title:String,
    bank_account_no:String,
    bank_name:String,
    ifsc_code:String,
    bank_branch:String,
    payscale:String,
    basic_salary:String,
    epf_no:String,
    contract_type:String,
    shift:String,
    location:String,
    facebook:String,
    twitter:String,
    linkedin:String,
    instagram:String,
    resume:String,
    joining_letter:String,
    resignation_letter:String,
    other_document_name:String,
    other_document_file:String,
    aadharno:String,
    levelupsub:String,
    levelupsubsci:String,
    levelupsubeng:String,
    levelupsubSoc:String,
    levelupsublang:String,
    academicquali:String,
    academicdegree:String,
    academicgraduatedegree:String,
    academicpostdegree:String,
    professsionalquali:String,
    disabilityifany:String,
    teachercodeut:String,
    user_id:String,
    is_active:String,
    verification_code:String,
    Social_Category:String,
    religion:String,
    Highest_Prof_Qua:String,
    Classes_Taught:String,
    Appointed_for_Subject:String,
    upper_pri_subject:String,
    secondary_subject:String,
    Main_Subject_Taught_1:String,
    Main_Subject_Taught_2:String,
    BRC:String,
    CRC:String,
    DIET:String,
    Others:String,
    Training_Recieved:String,
    Training_Need:String,
    Non_Teaching_Ass:String,
    Maths_Studied_UpTo:String,
    Science_Studied_UpTo:String,
    English_Studied_UpTo:String,
    Language_Studied_UpTo:String,
    ss_Studied_UpTo:String,
    Work_SincepresentSchool:String,
    TypeofDisabilityifAny:String,
    Trained_for_CWSN:String,
    Trained_in_Computer:String,
    natureappointment:String,
    typeofteacher:String,
    String_of_joiningss:String,
    String_of_joiningpresentschool:String,
    appointedlevel:String,
    teacherdeput:String,
    Guest:String,
    language1:String,
    language2:String,
    language3:String,
    trainedteachercwsn:String,
    trainedteacher:String,
    cwsneducation:String,
    safety_security:String,
    psycho_social:String,
    earlycwsn:String,
    remoteclasses:String,
    remotesession:String,
    avgict:String,
    lang_id:String,
}, {
    timestamps: true
})
schema.index({ saral_id: 1 }, { unique: true })
const staffs = mongoose.model('staffs', schema)
staffs.createIndexes();
module.exports = mongoose.model('staffs', schema)
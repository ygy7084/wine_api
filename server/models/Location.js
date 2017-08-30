import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Location = new Schema({
  country : {type : String, unique : true},
  region : {type : String, unique : true},
  subregion : {type : String, unique : true}
});


const model = mongoose.model('Location', Location);

export default model;
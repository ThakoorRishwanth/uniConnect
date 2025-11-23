const{connect} = require('mongoose');

const connectToDb = async(url)=>{

    connect(url);
}

module.exports = {connectToDb}
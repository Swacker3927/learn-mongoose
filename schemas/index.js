const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect('mongodb://root:gthy1047@127.0.0.1:27017/admin', {
    dbName: 'nodejs',
    useNewUrlParser: true
  }, (error) => {
    if (error) {
      console.log('몽고디비 연결 에러', error);
    } else {
      console.log('몽고디비 연결 성공');
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.log('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnect', () => {
  console.log('몽고디비 연결이 끊겼습니다. 연결을 시도합니다.');
  connect();
});

module.exports = connect;
//Deploy한 경우에는 환경변수 process.env.NODE_ENV === 'production'
//Local 환경에서는 process.env.NODE_ENV === 'developement'
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod'); //prod파일을 가져온다.
}else {
  module.exports = require('./dev'); //dev파일을 가져온다.
}
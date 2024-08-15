const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const config = require("./config/key");

//User모델 가져오기
const { User } = require("./models/User");

//클라이언트에서 서버로 보내주는 자료들을 분석해서 req.body로 가져올 수 있게 함.
//application/x-www-form-urlencoded 타입
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 타입
app.use(bodyParser.json());

//나의 어플리케이션과 몽고DB 연결
const mongoose = require("mongoose");
mongoose.connect(config.mongoURI);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

//회원가입을 위한 라우트 생성완료
app.post("/register", (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  //user 객체를 생성한다.
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

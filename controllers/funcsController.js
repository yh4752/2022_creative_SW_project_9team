// 크롤링한 정보를 다듬어주는 모듈
// HTTP 네트워크 라이브러리
import cheerio from "cheerio";
import request from "request";
var url = "https://bus.go.kr/getSubway_6.jsp?statnId=1007000726&subwayId=1007";

export const lift = (req, res) => {
  return res.render("lift");
};

export const sub_busy = (req, res) => {
  res.render("sub_busy");
};
export const money = async (req, res) => {
  res.render("money");
};
export const sub_arrive = async (req, res) => {
  let abc = (err, come_time, go_time) =>
    res.render("sub_arrive", { come_time, go_time }); // 전달받은 정보를 서버에 보내기
  request(url, function (error, response, html) {
    if (error) {
      res.render("home", { come_time: "no data", go_time: "no data" });
      // throw error;
    } else {
      let $ = cheerio.load(html);
      let come_time = $(".arvl2 font:first-child").text();
      let go_time = $(".arvl1 font:first-child").text();
      console.log(come_time);
      console.log(go_time);
      abc(error, come_time, go_time);
    }
  }); // 정보를 추출하고 함수에 전달하기
};
export const subway = async (req, res) => {
  res.render("subway");
};

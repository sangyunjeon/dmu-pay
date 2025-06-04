const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "허용되지 않은 메서드입니다." }),
    };
  }

  try {
    const params = new URLSearchParams(event.body); // ✅ form-urlencoded 파싱
    const username = params.get("username");
    const password = params.get("password");

    const response = await fetch("http://dmupay01.dothome.co.kr/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params.toString(), // ✅ 그대로 다시 전달
    });

    const result = await response.json(); // ✅ PHP가 JSON 반환하므로 json() 사용

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("Netlify 함수 오류:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "서버 오류: " + err.message }),
    };
  }
};

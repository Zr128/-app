// 模拟校园服务数据
var services = [
    { name: "图书馆", description: "借阅图书和研究资源" },
    { name: "食堂", description: "提供各种美食" },
    { name: "体育馆", description: "提供运动和健身设施" },
    { name: "学生事务办公室", description: "处理学生相关事务" },
  ];
  
  // 登录函数
  function login(username, password) {
    // 进行用户名和密码验证
    if (username === "admin" && password === "password") {
      // 登录成功，返回校园服务列表
      return services;
    } else {
      // 登录失败，返回空数组
      return [];
    }
  }
  // 在Node.js环境中使用登录函数
  var username = "admin";
  var password = "password";
  var result = login(username, password);
  
  if (result.length > 0) {
    console.log("登录成功");
    console.log("校园服务列表:");
    console.log(result);
  } else {
    console.log("登录失败");
  }
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Use the parsed JSON data
  })
  .catch(error => {
    // Handle any errors
  });
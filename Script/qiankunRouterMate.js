console.log("创建 qiankun.config.json");

// 获取router

// 解析出结构

const config = {}
// 预处理

// 格式：
config.name = ""
config.baseUrl = ""


const like = {
  "name": "flowt_miro_account",
  "baseUrl": "account",
  "children": [
    {
      "path": "about",
      "meta": {
        "title": "角色管理",
        "iconName": "PersonTag24Regular",
        "default": true
      }
    }
  ]
}


// 写入qiankun.config.json

console.log("创建完毕");
# 用 nodejs 搭建简易的 HTTP 服务器

## 目的

* 学习 nodejs 相关知识
* 测试一些需要连接服务器的功能，可以自定义服务器返回给客户端的数据格式，例如文本、图片、json 文件、xml 文件等。
* 可以用来做前后端分离，让后端定义好接口，然后前端在本地启动自己搭建的 http 服务器，前端请求本地的模拟数据，这样就可以做到前后端分离的作用。

## 下载 nodejs

下载地址：https://nodejs.org/en/download/

我用的 nodejs 版本是 v8.9.3。

## 启动 Server

```language
$ node index.js
Server has started.
```

## 支持的 URL

```language
http://localhost:8888
http://localhost:8888/get?type=text
http://localhost:8888/get?type=image
http://localhost:8888/get?type=bigimage
```

##示例

```
$.ajax({
  url:'http://localhost:8888/api/test',
  type : "POST", //提交方式
  data : {
    data:"data"
  },//数据，这里使用的是Json格式进行传输
  success : function(result) {//返回数据根据结果进行相应的处理
      if ( result.success ) {
       $("#tipMsg").text("删除数据成功");
       tree.deleteItem("${org.id}", true);
      } else {
       $("#tipMsg").text("删除数据失败");
      }
     }
})
```

本目录下建立一个 api 文件夹下面有 test.json 的文件，就可以请求到 test.json 的数据

## 参考

Node 入门：http://www.nodebeginner.org/index-zh-cn.html

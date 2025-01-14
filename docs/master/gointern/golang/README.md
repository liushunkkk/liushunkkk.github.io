# Navigation

> Golang

- Go Web

Go 语言基础：context上下文，错误处理，sync.mutex，垃圾回收，支持 goroutine 的 GMP 调度器...
**`2024-12-25`**

- Go Web

Go Web 的基本使用以及一些基本原理：路由，中间件...
**`2024-07-18`**

- ProtoBuf

Protocol Buffer (简称Protobuf) 是Google出品的性能优异、跨语言、跨平台的序列化库...
**`2024-07-19`**

- Go RPC

RPC是远程过程调用的缩写（Remote Procedure Call），通俗地说就是调用远处的一个函数，是分布式系统中不同节点间流行的通信方式...
**`2024-07-21`**

- WebSocket

WebSocket 是一种网络通信协议，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种...
**`2024-07-22`**

- SSE

Server-Sent Events 服务器推送事件，简称 SSE，是一种服务端实时主动向浏览器推送消息的技术...
**`2024-08-16`**

- Gin

Gin 是一个用 Go (Golang) 编写的 Web 框架。 它具有类似 martini 的 API，性能要好得多，多亏了 httprouter，速度提高了 40 倍...
**`2024-07-24`**

- Go 分布式系统

Go语言号称是互联网时代的C语言，基于Go语言构建的Docker、K8s等系统推动了云时代的提前到来...
**`2024-07-26`**

- Gorm

GORM 是 Go 语言中最受欢迎的 ORM 库之一，它提供了强大的功能和简洁的 API，让数据库操作变得更加简单和易维护。...
**`2024-07-28`**

- Test

go test命令会遍历所有的`*_test.go`文件中符合上述命名规则的函数，生成一个临时的main包用于调用相应的测试函数，接着构建并运行、报告测试结果，最后清理测试中生成的临时文件...
**`2024-08-20`**

- Template

Go 提供了template模版引擎，能够方便的构建模版文件，并基于模版文件构建生成目标文件。
**`2024-12-08`**

- embed包

embed包提供了Go在打包二进制文件时嵌入静态资源的能力，在模版，静态资源，CLI程序中都有应用。
**`2024-12-10`**

- 依赖管理

早期Go语言单纯使用GOPATH管理依赖，但GOPATH不方便管理依赖的多个版本，后来增加了vendor，允许把项目依赖连同项目源码一同管理。 自从Go 1.11版本引入了全新的依赖管理工具Go module，直到Go 1.14版本 Go module才走向成熟。。
**`2024-12-11`**

- go.work

随着go 1.18版本的正式发布，多模块工作区也被引入（WorkSpaces），多模块工作区能够使开发者能够更容易地同时处理多个模块的工作， 如：方便进行依赖的代码调试(打断点、修改代码)、排查依赖代码 bug 。方便同时进行多个仓库/模块并行开发调试。
**`2024-12-11`**

- tools

go好用工具：gorgeous 格式化、golang-lint 静态检查、delve 远程调试
**`2024-12-20`**
+++
title = "frp实现内网穿透"
description = "frp运维实践"
date = 2023-05-29
updated = 2023-05-29
draft = false
template = "blog/page.html"

[taxonomies]
authors = ["yehong"]

[extra]
lead = "frp实践与应用。"
+++

**项目地址：**

https://github.com/fatedier/frp

### 功能

通过frp，使处于内网或无固定公网ip的机器，对外网环境提供 tcp 和 udp 服务，例如在家里通过 ssh 访问处于公司内网环境内的主机

### 准备

  **1. 公网服务器1台 （服务端）**

  **2. 内网电脑 1 台 （客户端）**


### 安装

###  1. 下载安装包。 

**https://github.com/fatedier/frp/releases**


**都执行**

```shell
mkdir -p /opt/frp 

cd /opt/frp

wget https://github.com/fatedier/frp/releases/download/v0.25.0/frp_0.25.0_linux_amd64.tar.gz

tar -zxvf frp_0.25.0_linux_amd64.tar.gz
```

### 2.服务端配置

```shell
chmod +x ./frps
vi ./frps.ini

[common]
bind_port = 7000    #与客户端绑定的进行通信的端口

#启动
nohup ./frps -c ./frps.ini &
```

### 3.客户端配置

```shell
chmod +x ./frpc
vi ./frpc.ini

[common]
server_addr = 192.168.1.1  #服务端地址
server_port = 7000             #对应端口

[ssh]
type = tcp                     #协议
local_ip = 127.0.0.1             #本机ip
local_port = 22                 #ssh默认端口号
remote_port = 6000             #连接客户端端口，注意多个客户端时不能相同

#启动
nohup ./frpc -c ./frpc.ini &
```


### 4.验证

当客户端成功连上服务端时，服务端会监听客户端上自定义的端口。访问
服务端地址 192.168.1.1 + 自定义端口 6000 即可

(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{468:function(t,s,n){"use strict";n.r(s);var a=n(65),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nginx笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx笔记"}},[t._v("#")]),t._v(" "),n("code",[t._v("Nginx")]),t._v("笔记")]),t._v(" "),n("h2",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),n("h3",{attrs:{id:"更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),n("ul",[n("li",[t._v("更新了nginx的配置之后,需要运行"),n("code",[t._v("/usr/local/nginx/sbin/nginx -t")]),t._v("命令检查,前面的目录是具体nginx的安装目录")]),t._v(" "),n("li",[t._v("最后运行"),n("code",[t._v("/usr/local/nginx/sbin/nginx -s reload")]),t._v("命令重启,前面的目录是具体nginx的安装目录")]),t._v(" "),n("li",[t._v("如果执行过程报错就需要去检查nginx的配置文件内容对应哪里有问题")])]),t._v(" "),n("h2",{attrs:{id:"前后端分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离"}},[t._v("#")]),t._v(" 前后端分离")]),t._v(" "),n("h3",{attrs:{id:"项目部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[t._v("#")]),t._v(" 项目部署")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("真正在正式服务器中部署项目时,使用nginx")])]),t._v(" "),n("li",[n("p",[t._v("同时要配置项目对应域名,而不是使用ip+端口号访问")])]),t._v(" "),n("li",[n("p",[t._v("同时启用https,SSL证书加密")]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" 购买的具体域名")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#需要将yourdomain.com替换成证书绑定的域名。")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" ^(.*)$ https://"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将所有HTTP请求通过rewrite指令重定向到HTTPS。")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index.html index.htm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" @router")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" ^.*$ /index.html last")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  购买的具体域名")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index.html index.htm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" SSL证书pem文件在服务器上的绝对路径")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#比如/root/nginx-cert/financial-leasing-manage-prod/suxiang/7766933_e-sign.suxiangkj.com.pem")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" SSL证书key文件在服务器上的绝对路径")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#比如/root/nginx-cert/financial-leasing-manage-prod/suxiang/7766933_e-sign.suxiangkj.com.key")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_timeout")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5m")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#表示使用的加密套件的类型。")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1.1 TLSv1.2 TLSv1.3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#表示使用的TLS协议的类型。")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_buffering")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_buffer_size")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024k")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_buffers")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024k")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_busy_buffers_size")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048k")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_temp_file_write_size")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048k")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /usr/local/nginx/html/rzzl-prod/manage/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#站点目录。")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index.html index.htm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ @router")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" ^/(datasta)/(.+)$ /"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("/ last")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /manage/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://47.108.xxx.xxx:xxxx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#一套接口对应的服务器IP+端口号")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /xyzl/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v(" /usr/local/nginx/html/rzzl-prod/manage/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#前端打包文件存放的位置")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index.html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" @router")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" ^.*$ /index.html last")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"测试服务器无域名部署多项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试服务器无域名部署多项目"}},[t._v("#")]),t._v(" 测试服务器无域名部署多项目")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("由于是测试服,自然是不太会使用域名来配置nginx的,所以访问前端项目直接就使用nginx配置在服务器IP上")])]),t._v(" "),n("li",[n("p",[t._v("由于是多个项目,所以nginx的html文件夹下就要有多个文件夹来存放不同的前端项目的静态文件,比如"),n("code",[t._v("/root/software/nginx/html/manage")]),t._v("存放管理后台的前端文件,"),n("code",[t._v("/root/software/nginx/html/customer")]),t._v("存放客户端的前端文件")])]),t._v(" "),n("li",[n("p",[t._v("nginx配置好的访问路径默认就是http+服务器ip地址,比如"),n("code",[t._v("http://192.168.24.128/")]),t._v(",由于一个服务器要部署多个项目,就使用IP+不同的尾缀来访问不同项目,比如"),n("code",[t._v("http://192.168.24.128/manage")]),t._v("就是访问管理后台,"),n("code",[t._v("http://192.168.24.128/customer")]),t._v("就是访问客户端")]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[t._v("server {\n        listen       80;\n        server_name  localhost;\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/host.access.log  main;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#现在分为两个前端项目")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#后台")]),t._v("\n        location /manage {\n            root   /usr/share/nginx/html;\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#匹配不到资源路径的时候，先去读取index.html，然后再路由")]),t._v("\n            try_files $uri $uri/ /manage/index.html last;\n            index  index.html index.htm;\n        }\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#客户端")]),t._v("\n        location /customer {\n            root   /usr/share/nginx/html;\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#匹配不到资源路径的时候，先去读取index.html，然后再路由")]),t._v("\n            try_files $uri $uri/ /customer/index.html last;\n            index  index.html index.htm;\n        }\n\n        error_page   500 502 503 504  /50x.html;\n        "),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("location")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/50x.html {")]),t._v("\n            root   html;\n        }\n    }\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"正式云服务器各自有域名部署多项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正式云服务器各自有域名部署多项目"}},[t._v("#")]),t._v(" 正式云服务器各自有域名部署多项目")]),t._v(" "),n("h4",{attrs:{id:"同一个配置文件-html下不同文件夹存放前端项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同一个配置文件-html下不同文件夹存放前端项目"}},[t._v("#")]),t._v(" 同一个配置文件,html下不同文件夹存放前端项目")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("这里和测试服没有域名还使用http访问网页就有很大区别了")])]),t._v(" "),n("li",[n("p",[t._v("首先就是配置,之前没有域名只能通过http/ip/xxx来区分不同的项目在同一个测试服务器上的前端静态文件,比如最后是/manage就是后台管理的主页,最后是/customer就是客户端主页")])]),t._v(" "),n("li",[n("p",[t._v("这样的话nginx的配置也不同,不能再配置location /根目录的访问,必须根据域名最后的尾缀来配置比如location /manage")])]),t._v(" "),n("li",[n("p",[t._v("同时如果使用云服务器,基本上一定是要使用https配合域名的,前端请求后端接口就不能是简单的http+ip+端口号+接口名,因为https配置好的域名,是不可以发http的请求的,并且直接请求云服务器的ip+端口,在浏览器控制台可以看到,就暴露出去了,安全性也存在问题")])]),t._v(" "),n("li",[n("p",[t._v("所以就需要前端配置访问接口地址为一个自定义路由地址,然后在nginx中配置方向代理,把前端请求接口的地址代理转发到后端的接口,这时就可以是http+ip+端口号了")]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[t._v("server {\n                        listen 80;\n                        server_name shineray-glo-dashboard-pre.suxiangkj.com; #需要将yourdomain.com替换成证书绑定的域名。\n                        rewrite ^(.*)$ https://$host$1; #将所有HTTP请求通过rewrite指令重定向到HTTPS。\n                        location / {\n                            index index.html index.htm;\n                        }\n                        location @router{\n                           rewrite ^.*$ /index.html last;\n                        }\n                        error_page   500 502 503 504  /50x.html;\n                        "),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("location")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/50x.html {")]),t._v("\n                            root   html;\n                        }\n                    }\n                    server {\n                        listen       443 ssl;\n                        server_name  shineray-glo-dashboard-pre.suxiangkj.com;\n                \t\troot /usr/share/nginx/html/manage-preview;\n                \t\tindex index.html index.htm;\n                        ssl_certificate /etc/nginx/cert/overseas-preview/9915277_shineray-glo-dashboard-pre.suxiangkj.com.pem;\n                        ssl_certificate_key /etc/nginx/cert/overseas-preview/9915277_shineray-glo-dashboard-pre.suxiangkj.com.key;\n                        ssl_session_timeout 5m;\n                        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#表示使用的加密套件的类型。")]),t._v("\n                        ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3; #表示使用的TLS协议的类型。\n                        ssl_prefer_server_ciphers on;\n\n                        proxy_buffering on;\n                        proxy_buffer_size 1024k;\n                        proxy_buffers 16 1024k;\n                        proxy_busy_buffers_size 2048k;\n                        proxy_temp_file_write_size 2048k;\n                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#由于不是通过原始的IP+不同尾缀区分前端项目,而是使用域名,所以这里配置的是/")]),t._v("\n                \t\tlocation / {\n                \t\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#而这里为了能访问到争取的静态文件地址,就必须写到html文件夹下的具体目录为止")]),t._v("\n                \t\t    root /usr/share/nginx/html/manage-preview;\n                \t\t    index index.html index.htm;\n                            try_files $uri $uri/ /index.html last;\n                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这一句会导致每次请求资源都需要重新请求服务器,酌情添加")]),t._v("\n                            add_header Cache-Control no-cache;\n                \t\t}\n                \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#一旦配置了https,就不能从前段直接调用http的接口了,所以让前端去访问一个虚拟接口地址,通过这里配置虚拟接口地址的统一前缀,拦截之后转发到我们后端的接口,这就可以使用http了")]),t._v("\n                        location /manage {\n                            proxy_pass http://43.157.63.49:8186;\n                        }\n                    }\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
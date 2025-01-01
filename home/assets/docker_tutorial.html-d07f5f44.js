import{_ as l,r as d,o as r,c,b as s,d as n,e as a,a as i}from"./app-a6de63d6.js";const t="/home/assets/image-20220509103909365-68e74f6e.png",o="/home/assets/image-20220509104656172-2b817740.png",m="/home/assets/image-20220509104810365-c289d399.png",p="/home/assets/image-20220509105001948-90e6e6db.png",v="/home/assets/image-20220509110625737-d113fedf.png",u="/home/assets/image-20220509112629632-7a1b8b88.png",b="/home/assets/image-20220509112550312-f6c79e70.png",g="/home/assets/image-20220509112752155-d8d87733.png",h="/home/assets/image-20220509112831244-16d2868c.png",k="/home/assets/image-20220509112917992-8f380fbd.png",_="/home/assets/image-20220509113215739-7eb74d89.png",f="/home/assets/image-20220509113304428-0c5f2ae4.png",x="/home/assets/image-20220509152013694-648ca3a7.png",y="/home/assets/image-20220509152052218-ca326ddd.png",q="/home/assets/image-20220509152731136-ed2432c5.png",w="/home/assets/image-20220509152918277-a3354441.png",z="/home/assets/image-20220509153010213-d2846d77.png",D="/home/assets/image-20220509153535701-d557d491.png",S="/home/assets/image-20220509154032937-63ca4f7a.png",O="/home/assets/image-20220509154258519-3180af61.png",$="/home/assets/image-20220509154811889-7a9ae76d.png",P="/home/assets/image-20220509171113723-ff5c77a2.png",C="/home/assets/image-20220509202648674-d7b6f740.png",L="/home/assets/image-20220509203620017-318bfd05.png",j="/home/assets/image-20220509204154548-6bdb8df1.png",N="/home/assets/image-20220509204403327-5fa37e87.png",E="/home/assets/image-20220509204704732-ec4c9cf6.png",T={},X=i('<h1 id="centos7使用docker" tabindex="-1"><a class="header-anchor" href="#centos7使用docker" aria-hidden="true">#</a> Centos7使用Docker</h1><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2><h3 id="_1-检查centos版本" tabindex="-1"><a class="header-anchor" href="#_1-检查centos版本" aria-hidden="true">#</a> 1 检查centos版本</h3><p>Docker 运行在 CentOS 7 上，要求系统为64位、系统内核版本为 3.10 以上。Docker 运行在 CentOS-6.5 或更高的版本的 CentOS 上，要求系统为64位、系统内核版本为 2.6.32-431 或者更高版本。</p><img src="'+t+`" alt="image-20220509103909365" style="zoom:80%;"><p>如果版本不符合要求，可以使用下面的某个指令升级</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> update
升级所有包，改变软件设置和系统设置，注意系统内核版本也会升级，因此如果需要升级使用改命令。

yum <span class="token parameter variable">-y</span> upgrade
升级所有包，不改变软件设置和系统设置，系统版本升级，但是不改变内核
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),R={href:"https://docs.docker.com/engine/install/centos/#install-using-the-repository",target:"_blank",rel:"noopener noreferrer"},V=i(`<h3 id="_2-卸载旧版本" tabindex="-1"><a class="header-anchor" href="#_2-卸载旧版本" aria-hidden="true">#</a> 2 卸载旧版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+o+`" alt="image-20220509104656172" style="zoom:80%;"><p>由于我没有安装过，所以没有匹配的文件</p><h3 id="_3-安装新版本" tabindex="-1"><a class="header-anchor" href="#_3-安装新版本" aria-hidden="true">#</a> 3 安装新版本</h3><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+m+`" alt="image-20220509104810365" style="zoom:80%;"><p>设置仓库源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+p+`" alt="image-20220509105001948" style="zoom:80%;"><p>更新索引</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+`" alt="image-20220509110625737"></p><p>安装docker引擎</p><p>Install the <em>latest version</em> of Docker Engine, containerd, and Docker Compose</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>docker-ce-cli</code>这个下载特别慢，还可能安装失败，再次进行安装即可</p><img src="`+u+'" alt="image-20220509112629632" style="zoom:80%;"><img src="'+b+`" alt="image-20220509112550312" style="zoom:80%;"><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看状态</p><img src="`+g+'" alt="image-20220509112752155" style="zoom:80%;"><p>设置开机自启动</p><img src="'+h+'" alt="image-20220509112831244" style="zoom:80%;"><p>查看版本</p><p>有client和service两部分表示docker安装启动都成功了</p><img src="'+k+`" alt="image-20220509112917992" style="zoom:80%;"><h3 id="_4-一些基础命令" tabindex="-1"><a class="header-anchor" href="#_4-一些基础命令" aria-hidden="true">#</a> 4 一些基础命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+_+`" alt="image-20220509113215739" style="zoom:80%;"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info
展示信息
目前容器中没有程序在运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+f+`" alt="image-20220509113304428" style="zoom:80%;"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart <span class="token function">docker</span>
重启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop 容器名字/容器id    // 停止容器
<span class="token function">docker</span> <span class="token function">rm</span>   容器名字/容器id    // 删除容器
<span class="token function">docker</span> <span class="token function">ps</span>                    // 查看运行的容器

<span class="token function">docker</span> rmi <span class="token operator">&lt;</span>image id<span class="token operator">&gt;</span>        // 删除镜像

<span class="token function">docker</span> logs <span class="token function">id</span>   // 查看容器的日志，如果报错可以查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-配置镜像" tabindex="-1"><a class="header-anchor" href="#_5-配置镜像" aria-hidden="true">#</a> 5 配置镜像</h3><p>镜像可以加速安装一些软件</p><p>在docker目录创建<code>daemon.json</code>文件存放加速器地址，并做如下配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
<span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://registry.docker.cn.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完记得重启一下</p><h2 id="docker使用nginx" tabindex="-1"><a class="header-anchor" href="#docker使用nginx" aria-hidden="true">#</a> docker使用nginx</h2><h3 id="_1-安装nginx镜像" tabindex="-1"><a class="header-anchor" href="#_1-安装nginx镜像" aria-hidden="true">#</a> 1 安装nginx镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认使用版本为latest的镜像</p><img src="`+x+`" alt="image-20220509152013694" style="zoom:80%;"><p>查看安装的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+y+`" alt="image-20220509152052218" style="zoom:80%;"><h3 id="_2-利用镜像创建容器实例" tabindex="-1"><a class="header-anchor" href="#_2-利用镜像创建容器实例" aria-hidden="true">#</a> 2 利用镜像创建容器实例</h3><p>run 创建容器实例</p><p>-- name 容器命名</p><p>-v 映射目录</p><p>-d 设置容器后台运行</p><p>-p 本机端口映射 将容器的80端口映射到本机的80端口</p><p>语句最后一个nginx是使用镜像的名称</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx-test <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+q+`" alt="image-20220509152731136" style="zoom:80%;"><h3 id="_3-启动" tabindex="-1"><a class="header-anchor" href="#_3-启动" aria-hidden="true">#</a> 3 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start nginx-test
<span class="token function">docker</span> <span class="token function">ps</span> // 查看运行的容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+w+'" alt="image-20220509152918277" style="zoom:80%;"><h3 id="_4-访问" tabindex="-1"><a class="header-anchor" href="#_4-访问" aria-hidden="true">#</a> 4 访问</h3><img src="'+z+`" alt="image-20220509153010213" style="zoom:80%;"><h3 id="_5-映射本地配置" tabindex="-1"><a class="header-anchor" href="#_5-映射本地配置" aria-hidden="true">#</a> 5 映射本地配置</h3><p>配置在容器中进行，太麻烦，所以把配置文件给映射到本地，方便配置与管理</p><blockquote><p>创建本地目录</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /root/nginx/www /root/nginx/logs /root/nginx/conf
www: nginx存储网站网页的目录
logs: nginx日志目录
conf: nginx配置文件目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+D+`" alt="image-20220509153535701" style="zoom:80%;"><blockquote><p>将刚刚的nginx-test容器配置复制到本地目录</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> 979ea:/etc/nginx/nginx.conf /root/nginx/conf
<span class="token function">docker</span> <span class="token function">cp</span> 979ea:/etc/nginx/conf.d /root/nginx/conf
<span class="token function">docker</span> <span class="token function">cp</span> 979ea:/usr/share/nginx/html /root/nginx/www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>停止移除该容器</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token number">979</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token number">979</span>
这个id唯一即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+`" alt="image-20220509154032937"></p><h3 id="_6-运行新的容器" tabindex="-1"><a class="header-anchor" href="#_6-运行新的容器" aria-hidden="true">#</a> 6 运行新的容器</h3><p>创建新容器，并进行文件的映射，并启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> nginx-web <span class="token parameter variable">-v</span> /root/nginx/www:/usr/share/nginx/html <span class="token parameter variable">-v</span> /root/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token parameter variable">-v</span> /root/nginx/logs:/var/log/nginx <span class="token parameter variable">-v</span> /root/nginx/conf/conf.d:/etc/nginx/conf.d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+O+`" alt="image-20220509154258519" style="zoom:80%;"><p>设置docker容器自启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always nginx-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启容器自启动</span>
<span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 【容器名】
例如：docker update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always tracker

<span class="token comment"># 关闭容器自启动</span>
<span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>no【容器名】
例如：docker update <span class="token parameter variable">--restart</span><span class="token operator">=</span>no tracker

<span class="token comment"># 相关配置解析</span>
no： 不要自动重启容器。（默认）
on-failure：如果容器由于错误而退出，则重新启动容器，该错误表现为非零退出代码。
always：如果容器停止，请务必重启容器。如果手动停止，则仅在Docker守护程序重新启动或手动重新启动容器本身时才重新启动。（参见重启政策详情中列出的第二个项目）
unless-stopped：类似于always，除了当容器停止（手动或其他方式）时，即使在Docker守护程序重新启动后也不会重新启动容器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-配置nginx" tabindex="-1"><a class="header-anchor" href="#_7-配置nginx" aria-hidden="true">#</a> 7 配置nginx</h3><p>然后上传自己的web项目到www目录下，一个项目一个文件夹</p><img src="`+$+`" alt="image-20220509154811889" style="zoom:80%;"><p>然后进行代理配置</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
	worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;

    # 主要是设置这个地方
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        # 静态资源，都需要在这里设置访问权限,也可以不设置
        location ~ .*\\.(gif|jpg|jpeg|png|bmp|map|swf|ioc|rar|zip|txt|flv|mid|doc|docx|pptx|ppt|pdf|xls|xlsx|mp3|wma|ttf|woff|woff2|js.map|map|eot|svg|json|ico|JPG|PNG|JPEG|DOC|DOCX|PPTX|PPT|PDF|XLS|XLSX)$
        {
            expires 30d; 
            #error_log /dev/null;
            #access_log /dev/null; 
        }

        location ~ .*\\.(js|css)?$
        {
            expires      12h;
            #error_log /dev/null;
            #access_log /dev/null; 
        }
        # 在这里在设置/是没用的，它默认走的是default.conf里面的配置
        location /mailservice {
            root   mailservice;
            index  index.html index.htm;
        }
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
        	root   html;
        }
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完配置记得重启一下</p><p>到此，就可以访问了</p><p>访问<code>http://110.40.230.26/mailservice</code></p><img src="`+P+`" alt="image-20220509171113723" style="zoom:80%;"><h2 id="docker使用mysql" tabindex="-1"><a class="header-anchor" href="#docker使用mysql" aria-hidden="true">#</a> docker使用mysql</h2><h3 id="_1-安装镜像" tabindex="-1"><a class="header-anchor" href="#_1-安装镜像" aria-hidden="true">#</a> 1 安装镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+C+`" alt="image-20220509202648674" style="zoom:80%;"><h3 id="_2-数据挂载" tabindex="-1"><a class="header-anchor" href="#_2-数据挂载" aria-hidden="true">#</a> 2 数据挂载</h3><p>在宿主机创建mysql的配置文件的目录和数据目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/mysql/conf /usr/mysql/data /usr/mysql/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在配置文件目录下创建MySQL的配置文件my.cnf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/mysql/conf/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>

<span class="token comment">#socket = /usr/mysql/mysqld.sock</span>

default-character-set <span class="token operator">=</span> utf8mb4

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>

<span class="token comment">#pid-file        = /var/run/mysqld/mysqld.pid</span>

<span class="token comment">#socket          = /var/run/mysqld/mysqld.sock</span>

<span class="token comment">#datadir        = /var/lib/mysql</span>

<span class="token comment">#socket = /usr/mysql/mysqld.sock</span>

<span class="token comment">#pid-file = /usr/mysql/mysqld.pid</span>

datadir <span class="token operator">=</span> /usr/mysql/data

character_set_server <span class="token operator">=</span> utf8mb4

collation_server <span class="token operator">=</span> utf8mb4_bin

secure-file-priv <span class="token operator">=</span> NULL

<span class="token comment"># Disabling symbolic-links is recommended to prevent assorted security risks</span>

symbolic-links <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment"># Custom config should go here</span>

<span class="token operator">!</span>includedir /etc/mysql/conf.d/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建容器" tabindex="-1"><a class="header-anchor" href="#_3-创建容器" aria-hidden="true">#</a> 3 创建容器</h3><p>-v : 挂载宿主机目录和 docker容器中的目录，前面是宿主机目录，后面是容器内部目录</p><p>-d : 后台运行容器</p><p>-p 映射容器端口号和宿主机端口号</p><p>-e 环境参数，MYSQL_ROOT_PASSWORD设置root用户的密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">-v</span> /usr/mysql/conf/my.cnf:/etc/mysql/my.cnf <span class="token parameter variable">-v</span> /usr/mysql/logs:/logs <span class="token parameter variable">-v</span> /usr/mysql/data:/var/lib/mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> mysql

<span class="token function">docker</span> start mysql // 开启服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+L+'" alt="image-20220509203620017" style="zoom:80%;"><img src="'+j+`" alt="image-20220509204154548" style="zoom:80%;"><h3 id="_4-设置访问权限" tabindex="-1"><a class="header-anchor" href="#_4-设置访问权限" aria-hidden="true">#</a> 4 设置访问权限</h3><p>进入mysql容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql /bin/bash

输入
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
你的密码
mysql<span class="token operator">&gt;</span>use mysql<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span>alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span>identified with mysql_native_password by <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span>flush privileges<span class="token punctuation">;</span>
// 设置并更新权限
mysql<span class="token operator">&gt;</span>quit<span class="token punctuation">;</span>

然后输入exit或者ctrl+d退出容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+N+'" alt="image-20220509204403327" style="zoom:67%;"><img src="'+E+'" alt="image-20220509204704732" style="zoom:80%;"><p>完成，之后可以用navicat连接了</p>',114),B={href:"https://www.cnblogs.com/zhaokejin/p/15605229.html",target:"_blank",rel:"noopener noreferrer"};function G(I,M){const e=d("ExternalLinkIcon");return r(),c("div",null,[X,s("p",null,[s("a",R,[n("官方教程"),a(e)])]),V,s("p",null,[s("a",B,[n("为什么要用数据挂载"),a(e)])])])}const A=l(T,[["render",G],["__file","docker_tutorial.html.vue"]]);export{A as default};

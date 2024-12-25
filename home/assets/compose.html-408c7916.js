import{_ as c,r as i,o as d,c as l,b as e,e as a,d as n,a as o}from"./app-5c92448a.js";const r={},p=e("h1",{id:"docker-compose",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-compose","aria-hidden":"true"},"#"),n(" Docker Compose")],-1),t=e("p",null,[e("code",null,"Docker Compose"),n(" 是 Docker 官方编排（Orchestration）项目之一，负责快速的部署分布式应用。")],-1),u=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),v={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"Compose",-1),k=e("code",null,"Compose",-1),b=o(`<p>使用一个 <code>Dockerfile</code> 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。</p><p><code>Compose</code> 恰好满足了这样的需求。它允许用户通过一个单独的 <code>docker-compose.yml</code> 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。所有的命令都需要有模版文件作指导。</p><p><code>Compose</code> 中有两个重要的概念：</p><ul><li>服务 (<code>service</code>)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。</li><li>项目 (<code>project</code>)：由一组关联的应用容器组成的一个完整业务单元，在 <code>docker-compose.yml</code> 文件中定义。</li></ul><p><code>Compose</code> 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。</p><p><code>Compose</code> 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用 <code>Compose</code> 来进行编排管理。</p><p><code>Docker Desktop for Mac/Windows</code> 自带 <code>compose</code>，安装 Docker 之后可以直接使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>liushun@liushun ~ % <span class="token function">docker</span> compose version
Docker Compose version v2.28.1-desktop.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>下面是使用脚本来安装docker-compose的方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Docker Compose installation check</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token function">docker-compose</span> <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
  info <span class="token string">&quot;Installing Docker Compose...&quot;</span>
  <span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/latest/download/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
  <span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token keyword">else</span>
  success <span class="token string">&quot;Docker Compose is already installed&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实她可以直接安装到docker的插件目录下。这样使用的时候可以不用横杠了。docker会帮忙解析的。</p><p>使用如下命令查看docker插件的保存处，可以看到我这里存放的是<code>/Users/liushun/.docker/cli-plugins/</code>，且可以看到他已经安装了docker-compose了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>➜  / <span class="token function">docker</span> info                                                        
Client:
 Version:    <span class="token number">27.0</span>.3
 Context:    desktop-linux
 Debug Mode: <span class="token boolean">false</span>
 Plugins:
  buildx: Docker Buildx <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v0.15.1-desktop.1
    Path:     /Users/liushun/.docker/cli-plugins/docker-buildx
  compose: Docker Compose <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v2.28.1-desktop.1
    Path:     /Users/liushun/.docker/cli-plugins/docker-compose
  debug: Get a shell into any image or container <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  <span class="token number">0.0</span>.32
    Path:     /Users/liushun/.docker/cli-plugins/docker-debug
  desktop: Docker Desktop commands <span class="token punctuation">(</span>Alpha<span class="token punctuation">)</span> <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v0.0.14
    Path:     /Users/liushun/.docker/cli-plugins/docker-desktop
  dev: Docker Dev Environments <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v0.1.2
    Path:     /Users/liushun/.docker/cli-plugins/docker-dev
  extension: Manages Docker extensions <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v0.2.25
    Path:     /Users/liushun/.docker/cli-plugins/docker-extension
  feedback: Provide feedback, right <span class="token keyword">in</span> your terminal<span class="token operator">!</span> <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v1.0.5
    Path:     /Users/liushun/.docker/cli-plugins/docker-feedback
  init: Creates Docker-related starter files <span class="token keyword">for</span> your project <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v1.3.0
    Path:     /Users/liushun/.docker/cli-plugins/docker-init
  sbom: View the packaged-based Software Bill Of Materials <span class="token punctuation">(</span>SBOM<span class="token punctuation">)</span> <span class="token keyword">for</span> an image <span class="token punctuation">(</span>Anchore Inc.<span class="token punctuation">)</span>
    Version:  <span class="token number">0.6</span>.0
    Path:     /Users/liushun/.docker/cli-plugins/docker-sbom
  scout: Docker Scout <span class="token punctuation">(</span>Docker Inc.<span class="token punctuation">)</span>
    Version:  v1.10.0
    Path:     /Users/liushun/.docker/cli-plugins/docker-scout

Server:
 Containers: <span class="token number">7</span>
  Running: <span class="token number">0</span>
  Paused: <span class="token number">0</span>
  Stopped: <span class="token number">7</span>
 Images: <span class="token number">9</span>
 Server Version: <span class="token number">27.0</span>.3
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: <span class="token boolean">true</span>
  Using metacopy: <span class="token boolean">false</span>
  Native Overlay Diff: <span class="token boolean">true</span>
  userxattr: <span class="token boolean">false</span>
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: <span class="token number">2</span>
 Plugins:
  Volume: <span class="token builtin class-name">local</span>
  Network: bridge <span class="token function">host</span> ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file <span class="token builtin class-name">local</span> splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: ae71819c4f5e67bb4d5ae76a6b735f29cc25774e
 runc version: v1.1.13-0-g58aa920
 init version: de40ad0
 Security Options:
  seccomp
   Profile: unconfined
  cgroupns
 Kernel Version: <span class="token number">6.6</span>.32-linuxkit
 Operating System: Docker Desktop
 OSType: linux
 Architecture: aarch64
 CPUs: <span class="token number">8</span>
 Total Memory: <span class="token number">7</span>.657GiB
 Name: docker-desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接将二进制下载到这个目录下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> xxx/cli-plugins
$ <span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-SL</span> https://github.com/docker/compose/releases/download/v2.6.1/docker-compose-linux-x86_64 <span class="token parameter variable">-o</span> xxx/docker-compose
$ <span class="token function">sudo</span> <span class="token function">chmod</span> +x xxx/cli-plugins
$ <span class="token function">docker</span> compose version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>1、编写docker-compose.yaml</p><p>比如下面是一个启动peometheus和grafana的例子</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/prometheus<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9090:9090&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./prometheus<span class="token punctuation">:</span>/etc/prometheus <span class="token comment"># 配置文件挂载</span>
      <span class="token punctuation">-</span> prometheus<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/prometheus <span class="token comment"># 数据卷</span>

  <span class="token key atrule">grafana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/grafana<span class="token punctuation">-</span>enterprise
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grafana
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> grafana<span class="token punctuation">-</span>storage<span class="token punctuation">:</span>/var/lib/grafana <span class="token comment"># 数据卷</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">prometheus-data</span><span class="token punctuation">:</span>
  <span class="token key atrule">grafana-storage</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后就可以直接根据这个文件启动**（docker compose的执行都需要有yaml文件作为指导，所以一定要保证执行目录下有这个文件，或者手动指定文件）**</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>暂停所有服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>`,27),h={href:"https://docs.docker.com/reference/compose-file/",target:"_blank",rel:"noopener noreferrer"},g=o(`<h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>其实他的命令和docker很多都一样，毕竟他只是封装了一层。</p><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><ul><li><code>-f, --file FILE</code> 指定使用的 Compose 模板文件，默认为 <code>docker-compose.yml</code>，可以多次指定。</li><li><code>-p, --project-name NAME</code> 指定项目名称，默认将使用所在目录名称作为项目名。</li><li><code>--verbose</code> 输出更多调试信息。</li><li><code>-v, --version</code> 打印版本并退出。</li></ul><h3 id="常用命令解释" tabindex="-1"><a class="header-anchor" href="#常用命令解释" aria-hidden="true">#</a> 常用命令解释</h3><h4 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> <code>build</code></h4><p>格式为 <code>docker compose build [options] [SERVICE...]</code>。</p><p>构建（重新构建）项目中的服务容器。</p><p>服务容器一旦构建后，将会带上一个标记名，例如对于 web 项目中的一个 db 容器，可能是 web_db。</p><p>选项包括：</p><ul><li><code>--force-rm</code> 删除构建过程中的临时容器。</li><li><code>--no-cache</code> 构建镜像过程中不使用 cache（这将加长构建过程）。</li><li><code>--pull</code> 始终尝试通过 pull 来获取更新版本的镜像。</li></ul><h4 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> <code>config</code></h4><p>验证 Compose 文件格式是否正确，若正确则显示配置，若格式错误显示错误原因。</p><h4 id="down" tabindex="-1"><a class="header-anchor" href="#down" aria-hidden="true">#</a> <code>down</code></h4><p>此命令将会停止 <code>up</code> 命令所启动的容器，并移除网络</p><h4 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> <code>exec</code></h4><p>进入指定的容器。</p><h4 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> <code>images</code></h4><p>列出 Compose 文件中包含的镜像。</p><h4 id="kill" tabindex="-1"><a class="header-anchor" href="#kill" aria-hidden="true">#</a> <code>kill</code></h4><p>格式为 <code>docker compose kill [options] [SERVICE...]</code>。</p><p>通过发送 <code>SIGKILL</code> 信号来强制停止服务容器。</p><p>支持通过 <code>-s</code> 参数来指定发送的信号，例如通过如下指令发送 <code>SIGINT</code> 信号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> compose <span class="token function">kill</span> <span class="token parameter variable">-s</span> SIGINT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> <code>logs</code></h4><p>格式为 <code>docker compose logs [options] [SERVICE...]</code>。</p><p>查看服务容器的输出。默认情况下，docker compose 将对不同的服务输出使用不同的颜色来区分。可以通过 <code>--no-color</code> 来关闭颜色。该命令在调试问题的时候十分有用。</p><h4 id="pause" tabindex="-1"><a class="header-anchor" href="#pause" aria-hidden="true">#</a> <code>pause</code></h4><p>格式为 <code>docker compose pause [SERVICE...]</code>。</p><p>暂停一个服务容器。</p><h4 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> <code>ps</code></h4><p>格式为 <code>docker compose ps [options] [SERVICE...]</code>。</p><p>列出项目中目前的所有容器。</p><h4 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> <code>pull</code></h4><p>格式为 <code>docker compose pull [options] [SERVICE...]</code>。</p><p>拉取服务依赖的镜像。</p><p>选项：</p><ul><li><code>--ignore-pull-failures</code> 忽略拉取镜像过程中的错误。</li></ul><h4 id="restart" tabindex="-1"><a class="header-anchor" href="#restart" aria-hidden="true">#</a> <code>restart</code></h4><p>格式为 <code>docker compose restart [options] [SERVICE...]</code>。</p><p>重启项目中的服务。</p><p>选项：</p><ul><li><code>-t, --timeout TIMEOUT</code> 指定重启前停止容器的超时（默认为 10 秒）。</li></ul><h4 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> <code>rm</code></h4><p>格式为 <code>docker compose rm [options] [SERVICE...]</code>。</p><p>删除所有（停止状态的）服务容器。推荐先执行 <code>docker compose stop</code> 命令来停止容器。</p><p>选项：</p><ul><li><code>-f, --force</code> 强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。</li><li><code>-v</code> 删除容器所挂载的数据卷。</li></ul><h4 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> <code>run</code></h4><p>格式为 <code>docker compose run [options] [-p PORT...] [-e KEY=VAL...] SERVICE [COMMAND] [ARGS...]</code>。</p><p>在指定服务上执行一个命令。</p><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> compose run ubuntu <span class="token function">ping</span> docker.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> <code>start</code></h4><p>格式为 <code>docker compose start [SERVICE...]</code>。</p><p>启动已经存在的服务容器。</p><h4 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> <code>stop</code></h4><p>格式为 <code>docker compose stop [options] [SERVICE...]</code>。</p><p>停止已经处于运行状态的容器，但不删除它。通过 <code>docker compose start</code> 可以再次启动这些容器。</p><p>选项：</p><ul><li><code>-t, --timeout TIMEOUT</code> 停止容器时候的超时（默认为 10 秒）。</li></ul><h4 id="up" tabindex="-1"><a class="header-anchor" href="#up" aria-hidden="true">#</a> <code>up</code></h4><p>格式为 <code>docker compose up [options] [SERVICE...]</code>。</p><p>该命令十分强大，它将尝试自动完成包括构建镜像，（重新）创建服务，启动服务，并关联服务相关容器的一系列操作。</p><p>链接的服务都将会被自动启动，除非已经处于运行状态。</p><p>可以说，大部分时候都可以直接通过该命令来启动一个项目。</p><p>默认情况，<code>docker compose up</code> 启动的容器都在前台，控制台将会同时打印所有容器的输出信息，可以很方便进行调试。</p><p>当通过 <code>Ctrl-C</code> 停止命令时，所有容器将会停止。</p><p>如果使用 <code>docker compose up -d</code>，将会在后台启动并运行所有的容器。一般推荐生产环境下使用该选项。</p><p>默认情况，如果服务容器已经存在，<code>docker compose up</code> 将会尝试停止容器，然后重新创建（保持使用 <code>volumes-from</code> 挂载的卷），以保证新启动的服务匹配 <code>docker-compose.yml</code> 文件的最新内容。如果用户不希望容器被停止并重新创建，可以使用 <code>docker compose up --no-recreate</code>。这样将只会启动处于停止状态的容器，而忽略已经运行的服务。如果用户只想重新部署某个服务，可以使用 <code>docker compose up --no-deps -d &lt;SERVICE_NAME&gt;</code> 来重新创建服务并后台停止旧服务，启动新服务，并不会影响到其所依赖的服务。</p><p>选项：</p><ul><li><code>-d</code> 在后台运行服务容器。</li><li><code>--no-color</code> 不使用颜色来区分不同的服务的控制台输出。</li><li><code>--no-deps</code> 不启动服务所链接的容器。</li><li><code>--force-recreate</code> 强制重新创建容器，不能与 <code>--no-recreate</code> 同时使用。</li><li><code>--no-recreate</code> 如果容器已经存在了，则不重新创建，不能与 <code>--force-recreate</code> 同时使用。</li><li><code>--no-build</code> 不自动构建缺失的服务镜像。</li><li><code>-t, --timeout TIMEOUT</code> 停止容器时候的超时（默认为 10 秒）。</li></ul>`,72);function f(x,y){const s=i("ExternalLinkIcon");return d(),l("div",null,[p,t,u,e("p",null,[e("a",v,[m,a(s)]),n(" 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。"),k,n(" 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」。")]),b,e("p",null,[n("需要时候就看"),e("a",h,[n("官方文档"),a(s)]),n("吧")]),g])}const C=c(r,[["render",f],["__file","compose.html.vue"]]);export{C as default};

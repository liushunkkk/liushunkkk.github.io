import{_ as s,r,o as a,c as d,b as e,d as o,e as i,a as n}from"./app-0f3922f1.js";const l="/home/assets/dockerengine-17f79986.png",t="/home/assets/dockerartch-ddd1cab2.png",k={},p=n('<h1 id="docker基础" tabindex="-1"><a class="header-anchor" href="#docker基础" aria-hidden="true">#</a> Docker基础</h1><h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> intro</h2><p><code>Docker</code>的英文翻译是“搬运工”的意思，他搬运的东西就是常说的集装箱<code>Container</code>，Container 里面装的是任意类型的 App，开发人员可以通过 Docker 将App 变成一种标准化的、可移植的、自管理的组件，可以在任何主流的操作系统中开发、调试和运行。</p><p>从概念上来看 Docker 和传统的虚拟机比较类似，只是更加轻量级，更加方便使，Docker 和虚拟机最主要的区别有以下几点：</p><ul><li>虚拟化技术依赖的是物理CPU和内存，是硬件级别的；而 Docker 是构建在操作系统层面的，利用操作系统的容器化技术，所以 Docker 同样的可以运行在虚拟机上面。</li><li>虚拟机中的系统就是常说的操作系统镜像，比较复杂；而 Docker 比较轻量级，可以用 Docker 部署一个独立的 Redis，就类似于在虚拟机当中安装一个 Redis 应用，但是用 Docker 部署的应用是完全隔离的。</li><li>传统的虚拟化技术是通过快照来保存状态的；而 Docker 引入了类似于源码管理的机制，将容器的快照历史版本一一记录下来，切换成本非常之低。</li><li>传统虚拟化技术在构建系统的时候非常复杂；而 Docker 可以通过一个简单的 Dockerfile 文件来构建整个容器，更重要的是 Dockerfile 可以手动编写，这样应用程序开发人员可以通过发布 Dockerfile 来定义应用的环境和依赖，这样对于持续交付非常有利。</li></ul><h3 id="docker-engine" tabindex="-1"><a class="header-anchor" href="#docker-engine" aria-hidden="true">#</a> docker engine</h3><p><code>Docker Engine</code>是一个<strong>C/S</strong>架构的应用程序，主要包含下面几个组件：</p><ul><li>常驻后台进程<code>Dockerd</code></li><li>一个用来和 Dockerd 交互的 REST API Server</li><li>命令行<code>CLI</code>接口，通过和 REST API 进行交互（即 docker 命令）</li></ul><img src="'+l+'" alt="screenshot2024-08-12 09.56.19" style="zoom:50%;"><h3 id="docker-架构" tabindex="-1"><a class="header-anchor" href="#docker-架构" aria-hidden="true">#</a> docker 架构</h3><p>Docker 使用 C/S （客户端/服务器）体系的架构，Docker 客户端与 Docker 守护进程通信，Docker 守护进程负责构建，运行和分发 Docker 容器。Docker 客户端和守护进程可以在同一个系统上运行，也可以将 Docker 客户端连接到远程 Docker 守护进程。Docker 客户端和守护进程使用 REST API 通过<code>UNIX</code>套接字或网络接口进行通信。</p><img src="'+t+'" alt="screenshot2024-08-12 10.02.08" style="zoom:33%;">',12),u=e("li",null,"Docker Damon：dockerd，用来监听 Docker API 的请求和管理 Docker 对象，比如镜像、容器、网络和 Volume。",-1),D=e("li",null,"Docker Client：docker，docker client 是和 Docker 进行交互的最主要的方式方法，比如可以通过 docker run 命令来运行一个容器，然后这个 client 会把命令发送给上面的 Dockerd，让他来做真正事情。",-1),h=e("li",null,"Docker Registry：用来存储 Docker 镜像的仓库，Docker Hub 是 Docker 官方提供的一个公共仓库，而且 Docker 默认也是从 Docker Hub 上查找镜像的，也可以运行一个私有仓库，当使用 docker pull 或者 docker run 命令时，就会从配置的 Docker 镜像仓库中去拉取镜像，使用 docker push 命令时，会将构建的镜像推送到对应的镜像仓库中。",-1),b=e("li",null,"Images：镜像，镜像是一个只读模板，带有创建 Docker 容器的说明，一般来说的，镜像会基于另外的一些基础镜像并加上一些额外的自定义功能。比如，构建一个基于 Centos 的镜像，然后在这个基础镜像上面安装一个 Nginx 服务器。",-1),m={href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"root 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间",-1),f=e("li",null,"底层技术支持：Namespaces（做隔离）、CGroups（做资源限制）、UnionFS（镜像和容器的分层） the-underlying-technology Docker 底层架构分析",-1),g=n(`<h3 id="镜像大小" tabindex="-1"><a class="header-anchor" href="#镜像大小" aria-hidden="true">#</a> 镜像大小</h3><p><code>docker image ls</code>列表中的镜像体积总和并非是所有镜像实际硬盘消耗。由于 Docker 镜像是多层存储结构，并且可以继承、复用，因此不同镜像可能会因为使用相同的基础镜像，从而拥有共同的层。由于 Docker 使用<code>Union FS</code>，相同的层只需要保存一份即可，因此实际镜像硬盘占用空间很可能要比这个列表镜像大小的总和要小的多。可以通过以下命令来便捷的查看镜像、容器、数据卷所占用的空间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system <span class="token function">df</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><p>在使用<code>-d</code>参数时，容器启动后会进入后台。某些时候需要进入容器进行操作：<strong>exec 命令 -i -t 参数</strong>。</p><p>只用<code>-i</code>参数时，由于没有分配伪终端，界面没有<code>Linux</code>命令提示符，但命令执行结果仍然可以返回。 当<code>-i -t</code>参数一起使用时，则可以看到熟悉的 <code>Linux</code>命令提示符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-dit</span> ubuntu:16.04
69d137adef7a8a689cbcb059e94da5489d3cddd240ff675c640c8d96e84fe1f6

$ <span class="token function">docker</span> container <span class="token function">ls</span>
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
69d137adef7a        ubuntu:16.04       <span class="token string">&quot;/bin/bash&quot;</span>         <span class="token number">18</span> seconds ago      Up <span class="token number">17</span> seconds                           zealous_swirles

$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> 69d1 <span class="token function">bash</span>
<span class="token function">ls</span>
bin
boot
dev
<span class="token punctuation">..</span>.

$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 69d1 <span class="token function">bash</span>
root@69d137adef7a:/<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果从这个 stdin 中 exit，不会导致容器的停止。这就是为什么推荐大家使用<code>docker exec</code>的原因。</p><h3 id="镜像构建上下文-context" tabindex="-1"><a class="header-anchor" href="#镜像构建上下文-context" aria-hidden="true">#</a> 镜像构建上下文（Context）</h3><p>如果注意，会看到 docker build 命令最后有一个<code>.</code>。<code>.</code>表示当前目录，而 Dockerfile 就在当前目录，因此不少初学者以为这个路径是在指定 Dockerfile 所在路径，这么理解其实是不准确的，这是在指定上下文路径。那么什么是上下文呢？</p><p>首先要理解 docker build 的工作原理。Docker 在运行时分为 Docker 引擎（也就是服务端守护进程）和客户端工具。Docker 的引擎提供了一组 REST API，被称为 Docker Remote API，而如 docker 命令这样的客户端工具，则是通过这组 API 与 Docker 引擎交互，从而完成各种功能。因此，虽然表面上好像是在本机执行各种 docker 功能，但实际上，一切都是使用的远程调用形式在服务端（Docker 引擎）完成。也因为这种 C/S 设计，让操作远程服务器的 Docker 引擎变得轻而易举。</p><p>当进行镜像构建的时候，并非所有定制都会通过 RUN 指令完成，经常会需要将一些本地文件复制进镜像，比如通过 COPY 指令、ADD 指令等。而 docker build 命令构建镜像，其实并非在本地构建，而是在服务端，也就是 Docker 引擎中构建的。那么在这种客户端/服务端的架构中，如何才能让服务端获得本地文件呢？</p><p>这就引入了上下文的概念。当构建的时候，用户会指定构建镜像上下文的路径，docker build 命令得知这个路径后，<strong>会将路径下的所有内容打包，然后上传给 Docker 引擎</strong>。这样 Docker 引擎收到这个上下文包后，展开就会获得构建镜像所需的一切文件。如果在 Dockerfile 中这么写：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> ./package.json /app/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这并不是要复制执行 docker build 命令所在的目录下的 package.json，也不是复制 Dockerfile 所在目录下的 package.json，而是复制 上下文（context） 目录下的 package.json。</p><p>因此，<code>COPY</code>这类指令中的源文件的路径都是相对路径。这也是初学者经常会问的为什么 COPY ../package.json /app 或者 COPY /opt/xxxx /app 无法工作的原因，因为这些<strong>路径已经超出了上下文的范围</strong>，Docker 引擎无法获得这些位置的文件。如果真的需要那些文件，应该将它们复制到上下文目录中去。</p><p>现在就可以理解命令<code>docker build -t nginx:v3 .</code>中的这个<code>.</code>，实际上是在指定上下文的目录，docker build 命令会将该目录下的内容打包交给 Docker 引擎以帮助构建镜像。</p><p>如果观察 docker build 输出，我们其实已经看到了这个发送上下文的过程：</p><p>理解构建上下文对于镜像构建是很重要的，可以避免犯一些不应该的错误。比如有些初学者在发现 COPY /opt/xxxx /app 不工作后，于是干脆将 Dockerfile 放到了硬盘根目录去构建，结果发现 docker build 执行后，在发送一个几十 GB 的东西，极为缓慢而且很容易构建失败。那是因为这种做法是在让 docker build 打包整个硬盘，这显然是使用错误。</p><p>一般来说，应该会将 Dockerfile 置于一个空目录下，或者项目根目录下。如果该目录下没有所需文件，那么应该把所需文件复制一份过来。如果目录下有些东西确实不希望构建时传给 Docker 引擎，那么<strong>可以用 .gitignore 一样的语法写一个<code>.dockerignore</code></strong>，该文件是用于剔除不需要作为上下文传递给 Docker 引擎的。</p><p>那么为什么会有人误以为 <strong>.</strong> 是指定 Dockerfile 所在目录呢？这是因为在默认情况下，如果不额外指定 Dockerfile 的话，会将上下文目录下的名为 Dockerfile 的文件作为 Dockerfile。</p><p>这只是默认行为，实际上 Dockerfile 的文件名并不要求必须为 Dockerfile，而且并不要求必须位于上下文目录中，比如可以用<code>-f ../Dockerfile.php</code>参数指定某个文件作为 Dockerfile。</p><p>当然，一般大家习惯性的会使用默认的文件名 Dockerfile，以及会将其置于镜像构建上下文目录中。</p>`,23);function _(x,C){const c=r("ExternalLinkIcon");return a(),d("div",null,[p,e("ul",null,[u,D,h,b,e("li",null,[o("Containers：容器，容器是一个镜像的可运行的实例，可以使用 Docker REST API 或者 CLI 来操作容器，容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的"),e("a",m,[o("命名空间"),i(c)]),o("。因此容器可以拥有自己的 "),v,o("。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。这种特性使得容器封装的应用比直接在宿主运行更加安全。")]),f]),g])}const A=s(k,[["render",_],["__file","dockerbase.html.vue"]]);export{A as default};

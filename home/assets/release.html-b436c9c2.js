import{_ as i,r as p,o as c,c as l,b as n,d as s,e,a as t}from"./app-a6de63d6.js";const o="/home/assets/localrelease-ec609e43.png",u="/home/assets/dist-ec777799.png",r="/home/assets/githubrelease-701a3caf.png",d="/home/assets/dockerhub-315f8911.png",k="/home/assets/gihubdcs-a40bf6e3.png",v="/home/assets/setting-e81df38a.png",m={},b=n("h1",{id:"release-ci",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#release-ci","aria-hidden":"true"},"#"),s(" release-ci")],-1),g=n("p",null,"记录如何通过Github-ci来实现自动打包和发布go程序二进制包和docker镜像。",-1),h=n("h2",{id:"二进制包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二进制包","aria-hidden":"true"},"#"),s(" 二进制包")],-1),y=n("code",null,"go-releaser",-1),_={href:"https://goreleaser.com/customization/",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="_1-创建go-releaser配置文件" tabindex="-1"><a class="header-anchor" href="#_1-创建go-releaser配置文件" aria-hidden="true">#</a> 1 创建<code>go-releaser</code>配置文件</h3><p>在项目的根目录下创建<code>.goreleaser.yaml</code>文件。根据需要配置好需要打包的文件。</p><p>下面给出一个配置推荐：基本够用了</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2</span>

<span class="token comment">#project_name: myproject</span>

<span class="token comment"># Default: &#39;./dist&#39;.</span>
<span class="token comment">#dist: another-folder-that-is-not-dist</span>

<span class="token key atrule">before</span><span class="token punctuation">:</span>
  <span class="token key atrule">hooks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> go mod tidy

<span class="token key atrule">builds</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CGO_ENABLED=0
<span class="token comment">#    gcflags:</span>
<span class="token comment">#      - &#39;all=-N -l&#39;</span>
    <span class="token key atrule">goos</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> linux
      <span class="token punctuation">-</span> windows
      <span class="token punctuation">-</span> darwin
    <span class="token key atrule">goarch</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> amd64
      <span class="token punctuation">-</span> arm64

<span class="token key atrule">archives</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">format</span><span class="token punctuation">:</span> tar.gz
    <span class="token comment"># this name template makes the OS and Arch compatible with the results of \`uname\`.</span>
    <span class="token key atrule">name_template</span><span class="token punctuation">:</span> <span class="token punctuation">&gt;</span><span class="token punctuation">-</span>
      <span class="token punctuation">{</span><span class="token punctuation">{</span> .ProjectName <span class="token punctuation">}</span><span class="token punctuation">}</span>_
      <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> title .Os <span class="token punctuation">}</span><span class="token punctuation">}</span>_
      <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> if eq .Arch &quot;amd64&quot; <span class="token punctuation">}</span><span class="token punctuation">}</span>x86_64
      <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> else if eq .Arch &quot;386&quot; <span class="token punctuation">}</span><span class="token punctuation">}</span>i386
      <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> else <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span> .Arch <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span> end <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> if .Arm <span class="token punctuation">}</span><span class="token punctuation">}</span>v<span class="token punctuation">{</span><span class="token punctuation">{</span> .Arm <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span> end <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token comment"># use zip for windows archives</span>
    <span class="token key atrule">format_overrides</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">goos</span><span class="token punctuation">:</span> windows
        <span class="token key atrule">format</span><span class="token punctuation">:</span> zip

<span class="token key atrule">changelog</span><span class="token punctuation">:</span>
  <span class="token key atrule">filters</span><span class="token punctuation">:</span>
    <span class="token key atrule">exclude</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;^docs:&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;^test:&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;^debug:&quot;</span>

<span class="token key atrule">force_token</span><span class="token punctuation">:</span> github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-本地尝试发布" tabindex="-1"><a class="header-anchor" href="#_2-本地尝试发布" aria-hidden="true">#</a> 2 本地尝试发布</h3><p>可以在本地使用go-releaser程序来判断配置文件是否有问题，打出来的包是否可运行。当然也可以直接到线上测试hh</p><p>安装<code>go-releaser</code>，注意，要求go的版本在<code>1.23.4</code>及以上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/goreleaser/goreleaser/v2@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后检查配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goreleaser check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后打包文件，注意打包的时候，它是根据git操作来实现的，因此在你打包之前，需要先提交本地修改，并且创建一个tag</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goreleaser build <span class="token parameter variable">--clean</span> <span class="token comment"># clean会清理之前打包的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+o+'" alt="screenshot2024-12-20 15.54.13"></p><p>可以看到根目录多了个dist目录，然后里面就是他打包的可执行文件。</p><img src="'+u+`" alt="screenshot2024-12-20 15.55.40" style="zoom:50%;"><h3 id="_3-使用action发布" tabindex="-1"><a class="header-anchor" href="#_3-使用action发布" aria-hidden="true">#</a> 3 使用action发布</h3><p>创建一个新的action即可，下面是一个样例，给予写权限和传递GITHUB_TOKEN。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>releaser<span class="token punctuation">-</span>ci

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token comment"># run only against tags</span>
    <span class="token key atrule">tags</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> v*

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">releaseProgram</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Go
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>go@v5
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">go-version</span><span class="token punctuation">:</span> <span class="token string">&#39;1.23.4&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run GoReleaser
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> goreleaser/goreleaser<span class="token punctuation">-</span>action@v6
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">distribution</span><span class="token punctuation">:</span> goreleaser
          <span class="token key atrule">args</span><span class="token punctuation">:</span> release <span class="token punctuation">-</span><span class="token punctuation">-</span>clean
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，你就可以提交一个tag了，这样github会自动执行这个action，然后进行打包。</p><p>然后在releases下，就可以看到发布的版本包了</p><img src="`+r+`" alt="screenshot2024-12-20 15.59.48" style="zoom:33%;"><h2 id="docker镜像" tabindex="-1"><a class="header-anchor" href="#docker镜像" aria-hidden="true">#</a> docker镜像</h2><p>虽然go-releaser也有打包镜像功能，最好还是使用专用的docker-action吧</p><h3 id="_1-编写dockerfile文件" tabindex="-1"><a class="header-anchor" href="#_1-编写dockerfile文件" aria-hidden="true">#</a> 1 编写Dockerfile文件</h3><p>这个就根据自己的需要编写即可</p><p>注意这里取了巧，我们将这个发布docker镜像和发布release放在一个action执行，我们就可以直接利用go-releaser打得二进制包，他的路径可以在github-action的执行日志中找到，下面的COPY指令的源二进制路径就是在日志中找到的。其实通过本地的尝试，也可以知道他就是在dist目录下。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># Use official Golang image with Alpine for a lightweight base</span>
<span class="token instruction"><span class="token keyword">FROM</span> golang:alpine</span>

<span class="token comment"># Set environment variables</span>
<span class="token instruction"><span class="token keyword">ENV</span> CGO_ENABLED=0</span>

<span class="token comment"># Add image metadata</span>
<span class="token instruction"><span class="token keyword">LABEL</span> org.opencontainers.image.title=<span class="token string">&quot;integrated_exporter&quot;</span> <span class="token operator">\\</span>
      org.opencontainers.image.description=<span class="token string">&quot;Integrated Exporter&quot;</span> <span class="token operator">\\</span>
      org.opencontainers.image.url=<span class="token string">&quot;https://github.com/liushunkkk/integrated_exporter&quot;</span> <span class="token operator">\\</span>
      org.opencontainers.image.documentation=<span class="token string">&quot;https://github.com/liushunkkk/integrated_exporter#readme&quot;</span> <span class="token operator">\\</span>
      org.opencontainers.image.source=<span class="token string">&quot;https://github.com/liushunkkk/integrated_exporter&quot;</span> <span class="token operator">\\</span>
      org.opencontainers.image.licenses=<span class="token string">&quot;Apache-2.0 license&quot;</span> <span class="token operator">\\</span>
      maintainer=<span class="token string">&quot;liushun &lt;liushun0311@zju.edu.cn&gt;&quot;</span></span>

<span class="token comment"># Set the working directory</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># Copy binaries for different architectures</span>
<span class="token instruction"><span class="token keyword">COPY</span> dist/integrated_exporter_linux_amd64_v1/integrated_exporter /dist/integrated_exporter_linux_amd64/integrated_exporter</span>
<span class="token instruction"><span class="token keyword">COPY</span> dist/integrated_exporter_linux_arm64_v8.0/integrated_exporter /dist/integrated_exporter_linux_arm64/integrated_exporter</span>

<span class="token comment"># Select the appropriate binary based on the architecture</span>
<span class="token instruction"><span class="token keyword">RUN</span> if [ <span class="token string">&quot;$(go env GOARCH)&quot;</span> = <span class="token string">&quot;amd64&quot;</span> ]; then <span class="token operator">\\</span>
      cp /dist/integrated_exporter_linux_amd64/integrated_exporter ./integrated_exporter; <span class="token operator">\\</span>
    elif [ <span class="token string">&quot;$(go env GOARCH)&quot;</span> = <span class="token string">&quot;arm64&quot;</span> ]; then <span class="token operator">\\</span>
      cp /dist/integrated_exporter_linux_arm64/integrated_exporter ./integrated_exporter; <span class="token operator">\\</span>
    fi</span>

<span class="token comment"># Install dependencies and clean up</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk update --no-cache <span class="token operator">\\</span>
    &amp;&amp; apk add --no-cache tzdata ca-certificates <span class="token operator">\\</span>
    &amp;&amp; rm -rf /dist /go/pkg/mod /go/pkg/sumdb</span>

<span class="token comment"># Copy configuration files</span>
<span class="token instruction"><span class="token keyword">COPY</span> etc/etc.yaml ./etc/etc.yaml</span>
<span class="token instruction"><span class="token keyword">COPY</span> etc/.env.yaml ./etc/.env.yaml</span>

<span class="token comment"># Expose the application port</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 6070</span>

<span class="token comment"># Set the default command</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;./integrated_exporter&quot;</span>, <span class="token operator">\\</span>
            <span class="token string">&quot;server&quot;</span>, <span class="token operator">\\</span>
            <span class="token string">&quot;--port=6070&quot;</span>, <span class="token operator">\\</span>
            <span class="token string">&quot;--config=./etc/etc.yaml&quot;</span>, <span class="token operator">\\</span>
            <span class="token string">&quot;--env=./etc/.env.yaml&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-编写action" tabindex="-1"><a class="header-anchor" href="#_2-编写action" aria-hidden="true">#</a> 2 编写action</h3><p>我们在上一个action上追加即可，具体的配置可以去各个action的仓库的文档查看。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>releaser<span class="token punctuation">-</span>ci

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token comment"># run only against tags</span>
    <span class="token key atrule">tags</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> v*

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">releaseProgram</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Go
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>go@v5
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">go-version</span><span class="token punctuation">:</span> <span class="token string">&#39;1.23.4&#39;</span>

<span class="token comment">#      - name: Set up Docker # macos 没有预装 docker，且只支持 macos-13</span>
<span class="token comment">#        uses: docker/setup-docker-action@v4</span>
<span class="token comment">#        env:</span>
<span class="token comment">#          LIMA_START_ARGS: --cpus 4 --memory 8</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run GoReleaser
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> goreleaser/goreleaser<span class="token punctuation">-</span>action@v6
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">distribution</span><span class="token punctuation">:</span> goreleaser
          <span class="token key atrule">args</span><span class="token punctuation">:</span> release <span class="token punctuation">-</span><span class="token punctuation">-</span>clean
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get version
        <span class="token key atrule">id</span><span class="token punctuation">:</span> get_version
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo VERSION=$GITHUB_REF_NAME <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> $GITHUB_OUTPUT

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Log in to Docker Hub
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/login<span class="token punctuation">-</span>action@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> vars.DOCKER_HUB_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKER_HUB_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Login to GitHub Container Registry
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/login<span class="token punctuation">-</span>action@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">registry</span><span class="token punctuation">:</span> ghcr.io
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.repository_owner <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_PACKAGE_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up QEMU
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/setup<span class="token punctuation">-</span>qemu<span class="token punctuation">-</span>action@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Docker Buildx
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/setup<span class="token punctuation">-</span>buildx<span class="token punctuation">-</span>action@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Docker build and push
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/build<span class="token punctuation">-</span>push<span class="token punctuation">-</span>action@v6
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">context</span><span class="token punctuation">:</span> .
          <span class="token key atrule">platforms</span><span class="token punctuation">:</span> linux/amd64<span class="token punctuation">,</span> linux/arm64
          <span class="token key atrule">push</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            liushun311/integrated_exporter:latest
            liushun311/integrated_exporter:\${{ steps.get_version.outputs.VERSION }}
            ghcr.io/liushunkkk/integrated_exporter:latest
            ghcr.io/liushunkkk/integrated_exporter:\${{ steps.get_version.outputs.VERSION }}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-注意点" tabindex="-1"><a class="header-anchor" href="#_3-注意点" aria-hidden="true">#</a> 3 注意点</h3>`,31),x=n("code",null,"setup-docker-action",-1),q=n("code",null,"macos-13",-1),w={href:"https://docs.github.com/zh/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"2、登陆GitHub Container Registry的时候，password最好自己在设置里创建personal access token，赋予package的所有权限，文档里写的可以用GITHUB_TOKEN，但是我尝试的时候是不行的，不知道哪出了问题，还是直接创建PAT省事。",-1),O={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},N=t('<h3 id="_4-结果" tabindex="-1"><a class="header-anchor" href="#_4-结果" aria-hidden="true">#</a> 4 结果</h3><p>dockerhub</p><p><img src="'+d+'" alt="screenshot2024-12-20 16.17.05"></p><p>github的ghcr是需要配置的，才能在仓库的packages里显示。</p><p><img src="'+k+'" alt="screenshot2024-12-20 16.19.05"></p><p>在packages里，然后右下角进入你的package的设置，在里面绑定package的项目即可。</p><img src="'+v+'" alt="screenshot2024-12-20 16.20.53" style="zoom:33%;">',7);function A(R,G){const a=p("ExternalLinkIcon");return c(),l("div",null,[b,g,h,n("p",null,[s("go程序的二进制打包可以通过"),y,s("来实现，"),n("a",_,[s("官网在这"),e(a)]),s("。")]),f,n("p",null,[s("1、最好使用ubuntu-latest进行发布，因为它自带了docker程序，如果使用mac的话，还需要再引入一个"),x,s("，并且这个action在latest上不支持，需要是"),q,s("才支持。可以看"),n("a",w,[s("支持的机器"),e(a)]),s("。")]),E,n("p",null,[s("3、"),n("a",O,[s("Dockerhub"),e(a)]),s("需要创建账号，然后需要注意自己命名空间，不是昵称，是可以用于登陆的用户名。")]),N])}const S=i(m,[["render",A],["__file","release.html.vue"]]);export{S as default};

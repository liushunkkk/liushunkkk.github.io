import{_ as n,o as s,c as a,a as e}from"./app-de60e2dc.js";const t={},o=e(`<h1 id="embed包" tabindex="-1"><a class="header-anchor" href="#embed包" aria-hidden="true">#</a> embed包</h1><p>embed是在Go 1.16中新加入的包。它通过<code>//go:embed</code>指令，可以在编译阶段将静态资源文件打包进编译好的程序中，并提供访问这些文件的能力。</p><p><code>//go:embed</code> 指令只能用在包一级的全局变量中，不能用在函数或方法级别。</p><h2 id="前因" tabindex="-1"><a class="header-anchor" href="#前因" aria-hidden="true">#</a> 前因</h2><p>Go语言在打包二进制文件的时候默认不会包含配置文件的联同编译和打包。往往把二进制文件换个地方，就因为缺少静态文件资源而无法运行。</p><p>但是在Go1.16起，Go语言自身正式支持了将静态资源打包进二进制文件的特性。它有以下优点</p><ul><li><strong>能够将静态资源打包到二进制包中，部署过程更简单</strong>。传统部署要么需要将静态资源与已编译程序打包在一起上传，或者使用<code>docker</code>和<code>dockerfile</code>自动化前者，这是很麻烦的。</li><li><strong>确保程序的完整性</strong>。在运行过程中损坏或丢失静态资源通常会影响程序的正常运行。</li><li><strong>静态资源访问没有io操作，速度会非常快</strong>。</li></ul><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><ul><li><strong>Go模版</strong>：模版文件必须可用于二进制文件（模版文件需要对二进制文件可用）。对于Web服务器二进制文件或那些通过提供init命令的CLI应用程序，这是一个相当常见的用例。</li><li><strong>静态web服务</strong>：有时，静态文件（如index.html或其他HTML，JavaScript和CSS文件之类的静态文件）需要使用golang服务器二进制文件进行传输，以便用户可以运行服务器并访问这些文件。</li><li><strong>数据库迁移</strong>：另一个使用场景是通过嵌入文件被用于数据库迁移脚本。</li></ul><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p><code>Go embed</code>的使用非常简单，首先导入<code>embed</code>包，再通过<code>//go:embed</code> 文件名 将对应的文件或目录结构导入到对应的变量上。</p><blockquote><p>特别注意：embed这个包一定要导入，如果导入不使用的话，使用 _ 导入即可。</p></blockquote><p>嵌入的这个基本概念是通过在代码里添加一个特殊的注释实现的，Go会根据这个注释知道要引入哪个或哪几个文件。注释的格式是：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//go:embed FILENAME(S)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>embed</code>可以嵌入的静态资源文件支持三种数据类型：字符串、字节数组、embed.FS文件类型</p><table><thead><tr><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>[]byte</td><td>表示数据存储为二进制格式，如果只使用[]byte和string需要以import (_ &quot;embed&quot;)的形式引入embed标准库</td></tr><tr><td>string</td><td>表示数据被编码成utf8编码的字符串，因此不要用这个格式嵌入二进制文件比如图片，引入embed的规则同[]byte</td></tr><tr><td>embed.FS</td><td>表示存储多个文件和目录的结构，[]byte和string只能存储单个文件</td></tr></tbody></table><h3 id="嵌入到字符串" tabindex="-1"><a class="header-anchor" href="#嵌入到字符串" aria-hidden="true">#</a> 嵌入到字符串</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token boolean">_</span> <span class="token string">&quot;embed&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//go:embed test.txt</span>
<span class="token keyword">var</span> hello <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当嵌入的文件名包含空格时，需要用引号将文件名括起来，如<code>//go:embed &quot;hello world.txt&quot;</code></p><p>同时，需要注意，嵌入的字符串不能初始化，也就是hello不能有初始化。</p><h3 id="嵌入到字节数组" tabindex="-1"><a class="header-anchor" href="#嵌入到字节数组" aria-hidden="true">#</a> 嵌入到字节数组</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//go:embed test.txt</span>
<span class="token keyword">var</span> helloByte <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌入到embed-fs" tabindex="-1"><a class="header-anchor" href="#嵌入到embed-fs" aria-hidden="true">#</a> 嵌入到embed.FS</h3><p>使用embed.FS类型，可以读取一个嵌入到embed.FS类型变量中的目录和文件树，这个变量是只读的，所以是线程安全的。</p><p>embed.FS结构主要有3个对外方法，如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Open 打开要读取的文件，并返回文件的fs.File结构.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f FS<span class="token punctuation">)</span> <span class="token function">Open</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span>File<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token comment">// ReadDir 读取并返回整个命名目录</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f FS<span class="token punctuation">)</span> <span class="token function">ReadDir</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>fs<span class="token punctuation">.</span>DirEntry<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token comment">// ReadFile 读取并返回name文件的内容.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f FS<span class="token punctuation">)</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单个文件" tabindex="-1"><a class="header-anchor" href="#单个文件" aria-hidden="true">#</a> 单个文件</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//go:embed test.txt</span>
<span class="token keyword">var</span> fs embed<span class="token punctuation">.</span>FS

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> fs<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个文件" tabindex="-1"><a class="header-anchor" href="#多个文件" aria-hidden="true">#</a> 多个文件</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//go:embed files</span>
<span class="token keyword">var</span> f embed<span class="token punctuation">.</span>FS

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dirEntries<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> entry <span class="token operator">:=</span> <span class="token keyword">range</span> dirEntries <span class="token punctuation">{</span>
		file<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">,</span> entry<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以嵌入多个目录</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//go:embed dir1</span>
<span class="token comment">//go:embed dir2</span>
<span class="token keyword">var</span> f embed<span class="token punctuation">.</span>FS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="patterns" tabindex="-1"><a class="header-anchor" href="#patterns" aria-hidden="true">#</a> patterns</h4><p>还支持基于patterns的匹配，<code>patterns</code> 支持文件名、目录名以及 <code>path.Match</code> 所支持的路径通配符。</p><p><code>path.Match</code> 函数签名如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Match</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>matched <span class="token builtin">bool</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于匹配 <code>path.Match</code> 规则如下：</p><p><strong>功能说明</strong></p><ul><li><code>path.Match</code> 函数的功能是：报告参数 <code>name</code> 是否符合指定的 shell 模式（<code>pattern</code>）。</li><li>这个函数要求模式与整个 <code>name</code> 完全匹配，而不是仅匹配其中的一个子串。</li></ul><p><strong>模式语法</strong></p><ul><li><strong>pattern</strong>：由一个或多个 <code>term</code> 构成。</li><li><strong>term</strong>：可以是以下几种类型： <ul><li><code>*</code> 匹配任意序列的非<code>/</code>字符。</li><li><code>?</code> 匹配任意单个非<code>/</code>字符。</li><li><code>[character-range]</code> 定义一个字符类，必须是非空的。在字符类内部，如果以 <code>^</code> 开头（<code>[^character-range]</code>），则表示取反，否定后续的字符范围。</li><li>单个字符 <code>c</code>，可以直接匹配字符 <code>c</code>（当 <code>c</code> 不是 <code>*</code>、<code>?</code>、<code>\\</code>、<code>[</code> 中的一个时）。</li><li><code>\\\\c</code> 用于转义匹配字符 <code>c</code>，<code>\\\\</code> 用于转义（例如 <code>\\\\</code>、<code>\\*</code>、<code>\\?</code> 等）。</li></ul></li><li><strong>character-range</strong>： <ul><li>单个字符 <code>c</code>，直接匹配字符 <code>c</code>（当 <code>c</code> 不是 <code>\\\\</code>、<code>-</code>、<code>]</code> 中的一个时）。</li><li><code>\\\\c</code> 用于转义匹配字符 <code>c</code>。</li><li><code>lo-hi</code> 匹配从 <code>lo</code> 到 <code>hi</code> 之间的任意字符（包括 <code>lo</code> 和 <code>hi</code>）。</li></ul></li></ul><p><strong>总结</strong></p><p><code>//go:embed patterns</code> 指令的 <code>patterns</code> 参数，不支持嵌入空目录，并且也不支持嵌入符号链接（<code>symbolic links</code>），即软链接。也不能匹配一些特殊符号：<code>&quot; * &lt; &gt; ? &#39; | / \\ </code>。</p><p><code>patterns</code> 指定为目录时，该目录下的所有文件都会被嵌入到变量中。但是以 <code>.</code> 或 <code>_</code> 开头的文件是会被忽略的。如果想要嵌入 <code>.</code> 或 <code>_</code> 开头的文件，可以让 <code>patterns</code> 以 <code>all:</code> 前缀开头，如 <code>//go:embed all:files</code>。也可以使用通配符 <code>*</code>，如 <code>//go:embed testdata/*</code>，不过 <code>*</code> 不具有递归性，子目录下的 <code>.</code> 或 <code>_</code> 开头文件不会被嵌入。</p><p>比如：</p><ul><li><code>image</code> 不会嵌入 <code>image/.tempfile</code> 文件。</li><li><code>image/*</code> 会嵌入 <code>image/.tempfile</code> 文件。</li><li>以上二者都不会嵌入 <code>image/dir/.tempfile</code>。</li><li><code>all:image</code> 则会同时嵌入 <code>image/.tempfile</code> 和 <code>image/dir/.tempfile</code> 两个文件。</li></ul><p>注意，使用 <code>//go:embed</code> 嵌入带有路径的文件时，目录分隔符采用正斜杠 <code>/</code>，如 <code>//go:embed file/hello1.txt</code>，即使是 Windows 系统也是如此。</p><p><code>patterns</code> 支持使用双引号 <code>&quot;</code> 或者反引号 \`\` <code>的方式应用到嵌入的文件名、目录名或者 </code>pattern<code>上，这对名称中带有</code>空格<code>或</code>特殊字符\` 很有用。</p><p>此外，诸如 <code>.bzr</code>、<code>.hg</code>、<code>.git</code>、<code>.svn</code> 这几个版本控制管理目录，始终都不会被嵌入，<code>embed</code> 相关代码中会做检查。</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>1、http web使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;embed&quot;</span>
   <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//go:embed static</span>
<span class="token keyword">var</span> static embed<span class="token punctuation">.</span>FS

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span><span class="token function">FileServer</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">FS</span><span class="token punctuation">(</span>static<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>http.FS</code>这个函数，把<code>embed.FS</code>类型的<code>static</code>转换为<code>http.FileServer</code>函数可以识别的<code>http.FileSystem</code>类型。</p><p>2、HTML模版使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;embed&quot;</span>
   <span class="token string">&quot;html/template&quot;</span>
   <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//go:embed templates</span>
<span class="token keyword">var</span> tmpl embed<span class="token punctuation">.</span>FS

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   t<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFS</span><span class="token punctuation">(</span>tmpl<span class="token punctuation">,</span> <span class="token string">&quot;templates/*.tmpl&quot;</span><span class="token punctuation">)</span>
   http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>rw http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      t<span class="token punctuation">.</span><span class="token function">ExecuteTemplate</span><span class="token punctuation">(</span>rw<span class="token punctuation">,</span><span class="token string">&quot;index.tmpl&quot;</span><span class="token punctuation">,</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Golang Embed 测试&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>template</code>包提供了<code>ParseFS</code>函数，可以直接从一个<code>embed.FS</code>中加载模板，然后用于<code>HTTP Web</code>中。</p><p>3、gin</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;embed&quot;</span>
   <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
   <span class="token string">&quot;html/template&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//go:embed templates</span>
<span class="token keyword">var</span> tmpl embed<span class="token punctuation">.</span>FS

<span class="token comment">//go:embed static</span>
<span class="token keyword">var</span> static embed<span class="token punctuation">.</span>FS

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   r<span class="token operator">:=</span>gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   r<span class="token punctuation">.</span><span class="token function">StaticFS</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>http<span class="token punctuation">.</span><span class="token function">FS</span><span class="token punctuation">(</span>static<span class="token punctuation">)</span><span class="token punctuation">)</span>
   t<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFS</span><span class="token punctuation">(</span>tmpl<span class="token punctuation">,</span> <span class="token string">&quot;templates/*.tmpl&quot;</span><span class="token punctuation">)</span>
   r<span class="token punctuation">.</span><span class="token function">SetHTMLTemplate</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
   r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;index.tmpl&quot;</span><span class="token punctuation">,</span>gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Golang Embed 测试&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","embed.html.vue"]]);export{d as default};
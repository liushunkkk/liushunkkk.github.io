import{_ as n,o as s,c as a,a as t}from"./app-5c92448a.js";const e="/home/assets/httpvswebsocket-4e0bff6f.png",p="/home/assets/tls-08b8d4a5.png",o="/home/assets/data-3c2525fe.png",c={},i=t('<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>WebSocket 是一种网络通信协议，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。</p><p>其他特点包括：</p><p>（1）建立在 TCP 协议之上，服务器端的实现比较容易。</p><p>（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。</p><p>（3）数据格式比较轻量，性能开销小，通信高效。</p><p>（4）可以发送文本，也可以发送二进制数据。</p><p>（5）没有同源限制，客户端可以与任意服务器通信。</p><p>（6）协议标识符是<code>ws</code>（如果加密，则为<code>wss</code>），服务器网址就是 URL。<code>ws://example.com:80/some/path</code></p><p><img src="'+e+'" alt="vshttp" style="zoom:33%;"><img src="'+p+`" alt="screenshot2024-07-29 19.13.03" style="zoom:33%;"></p><p>客户端请求如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /chat HTTP/1.1
    Host: server.example.com
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
    Sec-WebSocket-Protocol: chat, superchat
    Sec-WebSocket-Version: 13
    Origin: http://example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端返回如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 101 Switching Protocols
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
    Sec-WebSocket-Protocol: chat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据格式：</p><img src="`+o+`" alt="screenshot2024-07-29 19.17.46" style="zoom:50%;"><h2 id="go搭建-websocket" tabindex="-1"><a class="header-anchor" href="#go搭建-websocket" aria-hidden="true">#</a> go搭建 websocket</h2><p>go 语言有很多 WebSocket 支持良好的第三方库，能减少很多底层的编码工作。如 <code>gorilla/websocket</code>。</p><p>websocket由http升级而来，首先发送附带Upgrade请求头的Http请求，所以需要在处理Http请求时拦截请求并判断其是否为websocket升级请求，如果是则调用<code>gorilla/websocket</code>库相应函数处理升级请求。</p><p>gorilla/websocket库是 RFC 6455 定义的websocket协议的一种实现，在数据收发方面，提供Data Messages、Control Messages两类message粒度的读写API；性能方面，提供Buffers和Compression的相关配置选项；安全方面，可通过CheckOrigin来控制是否支持跨域。</p><p>服务端代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> upgrader <span class="token operator">=</span> websocket<span class="token punctuation">.</span>Upgrader<span class="token punctuation">{</span>
	ReadBufferSize<span class="token punctuation">:</span>  <span class="token number">4196</span><span class="token punctuation">,</span>
	WriteBufferSize<span class="token punctuation">:</span> <span class="token number">1124</span><span class="token punctuation">,</span>
	<span class="token comment">// 该函数用于拦截或放行跨域请求</span>
	CheckOrigin<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>

		<span class="token comment">//if r.Method != &quot;GET&quot; {</span>
		<span class="token comment">//	fmt.Println(&quot;method is not GET&quot;)</span>
		<span class="token comment">//	return false</span>
		<span class="token comment">//}</span>
		<span class="token comment">//if r.URL.Path != &quot;/ws&quot; {</span>
		<span class="token comment">//	fmt.Println(&quot;path error&quot;)</span>
		<span class="token comment">//	return false</span>
		<span class="token comment">//}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// ServerHTTP 用于升级协议</span>
<span class="token keyword">func</span> <span class="token function">ServerHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 收到http请求之后升级协议</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> upgrader<span class="token punctuation">.</span><span class="token function">Upgrade</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Error during connection upgrade:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// 服务端读取客户端请求</span>
		messageType<span class="token punctuation">,</span> message<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ReadMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Error during message reading:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Received:%s&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>

		<span class="token comment">// 开启关闭连接监听</span>
		conn<span class="token punctuation">.</span><span class="token function">SetCloseHandler</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">,</span> text <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> text<span class="token punctuation">)</span> <span class="token comment">// 断开连接时将打印code和text</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//服务端给客户端返回请求</span>
		err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">WriteMessage</span><span class="token punctuation">(</span>messageType<span class="token punctuation">,</span> message<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Error during message writing:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">home</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Index Page&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/socket&quot;</span><span class="token punctuation">,</span> ServerHTTP<span class="token punctuation">)</span> <span class="token comment">// 这里设置服务路由，需要和客户端对应</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> home<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;localhost:8181&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个 <code>upgrader</code> 实例，并将其用于升级 HTTP 连接为 WebSocket 连接。然后，在 <code>handleWebSocket</code> 函数中处理 WebSocket 连接。在该函数中，使用 <code>conn.ReadMessage</code> 方法读取从客户端发送的消息，并使用 <code>conn.WriteMessage</code> 方法将消息发送回客户端。</p><p>客户端代码</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> websocket<span class="token punctuation">.</span>DefaultDialer<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:8181/socket&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 发送消息</span>
    err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">WriteMessage</span><span class="token punctuation">(</span>websocket<span class="token punctuation">.</span>TextMessage<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
       log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 读取消息</span>
    messageType<span class="token punctuation">,</span> p<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ReadMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
       log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Received message:&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">,</span> messageType<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),l=[i];function u(r,d){return s(),a("div",null,l)}const v=n(c,[["render",u],["__file","websocket.html.vue"]]);export{v as default};

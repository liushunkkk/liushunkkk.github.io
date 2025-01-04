import{_ as e,r as t,o as i,c as l,b as n,d as p,e as c,a as s}from"./app-2cd98865.js";const o={},u=s(`<h1 id="hmtl基础" tabindex="-1"><a class="header-anchor" href="#hmtl基础" aria-hidden="true">#</a> HMTL基础</h1><h2 id="_1、实体" tabindex="-1"><a class="header-anchor" href="#_1、实体" aria-hidden="true">#</a> 1、实体</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 特殊字符需要用实体（转义字符） --&gt;</span>
<span class="token comment">&lt;!-- &amp; 实体名字 ;
    如: &amp;nbsp; 空格
    &amp;lt; 小于
    &amp;gt; 大于
    &amp;copy; 版权符号
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    a<span class="token entity named-entity" title="&lt;">&amp;lt;</span>b<span class="token entity named-entity" title="&gt;">&amp;gt;</span>c  <span class="token comment">&lt;!-- a&lt;b&lt;c --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d={href:"https://www.w3school.com.cn/html/html_entities.asp",target:"_blank",rel:"noopener noreferrer"},r=s(`<h2 id="_2、meta标签" tabindex="-1"><a class="header-anchor" href="#_2、meta标签" aria-hidden="true">#</a> 2、meta标签</h2><p>位于head中</p><p>可以模仿成熟网站是怎么写的</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
    meta主要用于设置网页中的一些元数据，元数据不是给用户看
    charset指定网页的字符集
    name指定的数据的名称
    content 指定的数据的内容
        keywords表示网站的关键字，可以同时指定多个关键字，关键字间使用,隔开
        &lt;meta name=&quot;Keywords&quot; content=&quot;网上购物,网上商城,手机,笔记本&quot;&gt;

        description用于指定网站的描述
        &lt;meta name= &quot;description&quot; content=&quot;京东JD.COM-专业的综合网上购物网站&quot;&gt;
        描述会显示在搜素引擎的搜索的结果中

        title标签的内容会作为搜索结果的超链接上的文字显示
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTML5,前端,cSS3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一个非常不错的网站<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- &lt;meta http-equiv=&quot;refresh&quot; content=&quot;3;url=https://www.mozilla.org&quot;&gt;
将页面重定向到另一个网站 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3;url=https://ww.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、块元素和行内元素" tabindex="-1"><a class="header-anchor" href="#_3、块元素和行内元素" aria-hidden="true">#</a> 3、块元素和行内元素</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
    块元素(block element)
        -在网页中一般通过块元素来对页面进行布局行内元素（inline element）
        -行内元素主要用来包裹文字
        -一般情况下会在块元素中放行内元素，而不会在行内元素中放块元素
		-块元素中基本上什么都能放
        - p元素中不能放任何的块元素
    浏览器在解析网页时,会自动对网页中不符合规范的内容进行修正
    比如:
        标签写在了根元素的外部
        p元素中嵌套了块元素
        根元素中出现了除head和body以外的子元素... ...
--&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、布局元素" tabindex="-1"><a class="header-anchor" href="#_4、布局元素" aria-hidden="true">#</a> 4、布局元素</h2><ul><li>header表示网页的头部</li><li>main表示网页的主体部分(一个页面中只会有一个main)</li><li>footer表示网页的底部</li><li>nav表示网页中的导航</li><li>aside和主体相关的其他内容（侧边栏)article表示一个独立的文章</li><li>section表示一个独立的区块,上边的标签都不能表示时使用section</li><li>div没有语义，就用来表示一个区块，目前来讲div还是我们主要的布局元素</li><li>span行内元素，没有任何的语义，一般用于在网页中选中文字</li></ul><h2 id="_5、列表" tabindex="-1"><a class="header-anchor" href="#_5、列表" aria-hidden="true">#</a> 5、列表</h2><ul><li>有序列表，使用ol标签来创建有序列表 <ul><li>使用li表示列表项</li></ul></li><li>无序列表,使用ul标签来创建无序列表 <ul><li>使用li表示列表项</li></ul></li><li>定义列表,使用dl标签来创建一个定义列表 <ul><li>使用dt来表示定义的内容</li><li>使用dd来对内容进行解释说明</li></ul></li><li>列表之间可以互相嵌套</li></ul><div class="language-jtml line-numbers-mode" data-ext="jtml"><pre class="language-jtml"><code>定义列表：类似于blockqueto
dt
	dd
	dd
	dd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、超链接" tabindex="-1"><a class="header-anchor" href="#_6、超链接" aria-hidden="true">#</a> 6、超链接</h2><ul><li><p>跳转到新的页面</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
新打开一个页面
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_seft<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
在该页面跳转

url可以是一个外部链接，也可以是一个相对路径，用于跳转到项目的其他页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>跳转到该页面的某个地方</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> 
回到页面顶部
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
跳转到id标记的标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>保留占位符</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;a href=&quot;javascript:;&quot;&gt;&lt;/a&gt;
保留占位符，但是点击时不会发生任何跳转
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_7、音视频标签" tabindex="-1"><a class="header-anchor" href="#_7、音视频标签" aria-hidden="true">#</a> 7、音视频标签</h2><p>audio标签用来向页面中引入一个外部的音频文件的，视频文件就是video，使用与audio一样</p><p>音视频文件引入时，默认情况下不允许用户自己控制播放停止</p><p>属性:</p><ul><li>controls是否允许用户控制播放</li><li>autoplay音频文件是否自动播放 <ul><li>如果设置了autoplay 则音乐在打开页面时会自动播放 但是目前来讲大部分浏览器都不会自动对音乐进行播放</li></ul></li><li>loop音乐是否循环播放</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./source/audio.mp3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">controls</span> <span class="token attr-name">autoplay</span> <span class="token attr-name">loop</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--除了通过src来指定外部文件的路径以外，还可以通过source来指定文件--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
    对不起，您的浏览器不支持播放音频!请升级浏览器!
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./source/audio.mp3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./source/audio.ogg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./source/audio.ogg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/mp3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>embed</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--浏览器会自动匹配第一个能用的资源，进行显示，如果都不支持，就会显示那段文字--&gt;</span>
<span class="token comment">&lt;!--ie8不支持audio标签，需要使用embed标签,必须指定宽高，并且会强制自动播放--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="css基础" tabindex="-1"><a class="header-anchor" href="#css基础" aria-hidden="true">#</a> CSS基础</h1><h2 id="_1、选择器" tabindex="-1"><a class="header-anchor" href="#_1、选择器" aria-hidden="true">#</a> 1、选择器</h2><h3 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器" aria-hidden="true">#</a> 交集选择器</h3><ul><li>作用：选中同时符合多个条件的元素</li><li>语法：选择器1选择器2选择器3...</li><li>注意点：交集选择器中如果有元素选择器，必须使用元素选择器开头</li></ul><h3 id="并集选择器" tabindex="-1"><a class="header-anchor" href="#并集选择器" aria-hidden="true">#</a> 并集选择器</h3><ul><li>作用：同时选择多个选择器对应的元素</li><li>语法：选择器1，选择器2，选择器3</li></ul><h3 id="关系选择器" tabindex="-1"><a class="header-anchor" href="#关系选择器" aria-hidden="true">#</a> 关系选择器</h3><h4 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h4><ul><li><p>父元素</p><ul><li>直接包含子元素的元素叫做父元素</li></ul></li><li><p>子元素</p><ul><li>-直接被父元素包含的元素是子元素</li></ul></li><li><p>祖先元素</p><ul><li>-直接或间接包含后代元素的元素叫做祖先元素</li><li>-一个元素的父元素也是它的祖先元素</li></ul></li><li><p>后代元素</p><ul><li>-直接或间接被祖先元素包含的元素叫做后代元素</li><li>-子元素也是后代元素</li></ul></li><li><p>兄弟元素</p><ul><li>-拥有相同父元素的元素是兄弟元素</li></ul></li></ul><h4 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h4><h5 id="子元素选择器" tabindex="-1"><a class="header-anchor" href="#子元素选择器" aria-hidden="true">#</a> 子元素选择器</h5><p>作用：选定指定父元素的指定子元素</p><p>语法：父元素 &gt; 子元素</p><h5 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器" aria-hidden="true">#</a> 后代选择器</h5><p>作用：选中指定父元素内的指定后代元素</p><p>语法：父元素 子元素（空格）</p><h5 id="兄弟选择器" tabindex="-1"><a class="header-anchor" href="#兄弟选择器" aria-hidden="true">#</a> 兄弟选择器</h5><p>选择紧挨着的第一个兄弟：当前元素 + 下一个元素</p><p>选择后面的所有兄弟：当前元素 ~ 下一个元素</p><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3><p>[属性名]选择含有指定属性的元素</p><p>[属性名=属性值]选择含有指定属性和属性值的元素</p><p>[属性名^=属性值]选择属性值以指定值开头的元素</p><p>[属性名$=属性值]选择属性值以指定值结尾的元素</p><p>[属性名*=属性值]选择属性值中含有某值的元素的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p[title=abc]</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;p title=<span class="token string">&quot;abc&quot;</span>&gt;&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、伪类" tabindex="-1"><a class="header-anchor" href="#_2、伪类" aria-hidden="true">#</a> 2、伪类</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>伪类（不存在的类，特殊的类）</p><p>-伪类用来描述一个元素的特殊状态</p><ul><li>比如:第一个子元素、被点击的元素、鼠标移入的元素...</li></ul><h3 id="顺序伪类" tabindex="-1"><a class="header-anchor" href="#顺序伪类" aria-hidden="true">#</a> 顺序伪类</h3><p>-伪类一般情况下都是使用:开头</p><ul><li>:first-child第一个子元素</li><li>:last-child最后一个子元素</li><li>:nth-child()选中第n个子元素</li></ul><p>特殊值:</p><ul><li>n 第n个n的范围e到正无穷</li><li>2n 或 even 表示选中偶数位的元素</li><li>2n+1 或 odd 表示选中奇数位的元素</li></ul><p>-以上这些伪类都是根据所有的子元素进行排序</p><ul><li>:first-of-type</li><li>:last-of-type</li><li>:nth-of-type()</li></ul><p>-这几个伪类的功能和上述的类似，不通点是他们是在同类型元素中进行排序</p><ul><li>:not() 否定伪类</li></ul><p>-将符合条件的元素从选择器中去除</p><h3 id="超链接伪类" tabindex="-1"><a class="header-anchor" href="#超链接伪类" aria-hidden="true">#</a> 超链接伪类</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// :link 未访问过的链接
a:link</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token selector">// :visited 访问过的链接
a:visited</span> <span class="token punctuation">{</span>
    // 只能改颜色，保护隐私
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="鼠标伪类" tabindex="-1"><a class="header-anchor" href="#鼠标伪类" aria-hidden="true">#</a> 鼠标伪类</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// :hover 鼠标移入
a:hover</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token selector">// :active 鼠标点击
a:active</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、伪元素" tabindex="-1"><a class="header-anchor" href="#_3、伪元素" aria-hidden="true">#</a> 3、伪元素</h2><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><p>伪元素：表示页面中一些特殊的并不真实存在的元素（特殊的位置）</p><p>使用： 双冒号 :: 开头</p><h3 id="常用的伪元素" tabindex="-1"><a class="header-anchor" href="#常用的伪元素" aria-hidden="true">#</a> 常用的伪元素</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">:</span><span class="token punctuation">:</span>first-letter <span class="token property">第一个字母</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>first-line   <span class="token property">第一行</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>selection    <span class="token property">访问网页时，鼠标选中的内容</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>before       <span class="token property">元素开始位置</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>after        元素结束位置
<span class="token comment">/* before和after需要使用content，否则需要会没有效果 */</span>
<span class="token selector">div::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;haha&#39;</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、样式优先级" tabindex="-1"><a class="header-anchor" href="#_4、样式优先级" aria-hidden="true">#</a> 4、样式优先级</h2><p>内联样式 &gt; id选择器 &gt; 类和伪类选择器 &gt; 元素选择器 &gt; 通配选择器 &gt; 继承的样式</p><p>在某个样式后面添加<code>!important</code>，则此样式具有最高优先级</p><h2 id="_5、文档流" tabindex="-1"><a class="header-anchor" href="#_5、文档流" aria-hidden="true">#</a> 5、文档流</h2><p>文档流（normal flow)</p><ul><li><p>-网页是一个多层的结构，一层摞着一层</p></li><li><p>-通过cSS可以分别为每一层来设置样式</p></li><li><p>-作为用户来讲只能看到最顶上一层</p></li><li><p>-这些层中，最底下的一层称为文档流,文档流是网页的基础</p><p>​ 我们所创建的元素默认都是在文档流中进行排列</p></li></ul><p>-对于我们来元素主要有两个状态</p><ul><li>在文档流中</li><li>不在文档流中（脱高文档流）</li></ul><p>-元素在文档流中有什么特点:</p><p>-块元素</p><ul><li>-块元素会在页面中独占一行(自上向下垂直排列)</li><li>-默认宽度是父元素的全部（会把父元素撑满)</li><li>-默认高度是被内容撑开(子元素)</li></ul><p>-行内元素</p><ul><li>-行内元素不会独占页面的一行，只占自身的大小</li><li>-行内元素在页面中左向右水平排列，如果一行之中不则元素会换到第二行继续自左向右排列</li><li>-行内元素的默认宽度和高度都是被内容撑开</li></ul><h2 id="_6、高度塌陷和bfc" tabindex="-1"><a class="header-anchor" href="#_6、高度塌陷和bfc" aria-hidden="true">#</a> 6、高度塌陷和BFC</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
当box2设置浮动之后，box1就会产生高度塌陷
解决方法有可以为父元素box1设置overflow
或者增加一个空的box3，设置clear:both; 用结构解决表现问题
或者使用伪元素box1的最后一个位置
.box1::after{
	content: &#39;&#39;;
	display: block;   // 默认是行内元素，要转换为块元素
	clear: both;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高度塌陷" tabindex="-1"><a class="header-anchor" href="#高度塌陷" aria-hidden="true">#</a> 高度塌陷</h3><p>在浮动布局中,父元素的高度默认是被子元素撑开的,</p><p>当子元素浮动后，其会完全脱高文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失</p><p>父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱</p><p>所以高度塌陷是浮动布局中比较常见的一个问题，这个问题我们必须要进行处理!</p><h3 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h3><p><strong>BFC(Block Formatting Context）块级格式化环境</strong></p><p>BFC是一个css中的一个隐含的属性,可以为一个元素开启BFC</p><p>开启BFC该元素会变成一个独立的布局区域</p><p>-元素开启BFC后的特点:</p><ul><li>1.开启BFc的元素不会被浮动元素所覆盖</li><li>2.开启BFc的元素子元素和父元素外边距不会重叠</li><li>3.开启BFc的元素可以包含浮动的子元素</li></ul><p>-可以通过一些特殊方式来开启元素的BFC;</p><ul><li>1、设置元素的浮动</li><li>2、将元素设置为行内块元素（不推荐)</li><li>3、将元素的overflow设置为一个非visible的值 -常用的方式为元素设置overflow:hidden开启其BFC以使其可以包含浮动元素</li></ul><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3><p>如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过clear属性来清除浮动元素对当前元素所产生的影响</p><p>-作用:</p><ul><li>清除浮动元素对当前元素所产生的影响</li></ul><p>-可选值:</p><ul><li>left 清除左侧浮动元素对当前元素的影响</li><li>right 清除右侧浮动元素对当前元素的影响</li><li>both 清除两侧中最大影响的那侧</li></ul><p>原理:</p><ul><li>设置清除浮动以后，浏览器会自动为元素添加一个<strong>上外边距</strong>，以使其位置不受其他元素的影响</li></ul><h2 id="_7、clearfix" tabindex="-1"><a class="header-anchor" href="#_7、clearfix" aria-hidden="true">#</a> 7、clearfix</h2><p>专门用来解决高度塌陷和父子元素外边距重叠的问题</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 这样可以解决父子元素外边距重叠问题
::before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// 最终解决方案
.clearfix::before,
.clearfix::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

添加这样一个样式，然后为需要的元素添加一个clearfixl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、定位" tabindex="-1"><a class="header-anchor" href="#_8、定位" aria-hidden="true">#</a> 8、定位</h2><h3 id="定位-position" tabindex="-1"><a class="header-anchor" href="#定位-position" aria-hidden="true">#</a> 定位（position)</h3><ul><li>-定位是一种更加高级的布局手段</li><li>-通过定位可以将元素摆放到页面的任意位置</li><li>-使用position属性来设置定位</li></ul><p>可选值:</p><ul><li>static默认值，元素是静止的没有开启定位</li><li>relative开启元素的相对定位</li><li>absolute开启元素的绝对定位</li><li>fixed开启元素的固定定位</li><li>sticky开启元素的粘滞定位</li></ul><h3 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位" aria-hidden="true">#</a> 相对定位:</h3><h4 id="相对定位-1" tabindex="-1"><a class="header-anchor" href="#相对定位-1" aria-hidden="true">#</a> 相对定位</h4><p>-当元素的position属性值设置为relative时则开启了元素的相对定位</p><h4 id="相对定位的特点" tabindex="-1"><a class="header-anchor" href="#相对定位的特点" aria-hidden="true">#</a> 相对定位的特点:</h4><ul><li>1.元素开启相对定位以后，如果不设置偏移量元素不会发生任何的变化</li><li>2.相对定位是参照于元素在文档流中的位置进行定位的</li><li>3.相对定位会提升元素的层级</li><li>4.相对定位不会使元素脱离文档流</li><li>5.相对定位不会改变元素的性质块还是块，行内还是行内</li></ul><h4 id="偏移量-offset" tabindex="-1"><a class="header-anchor" href="#偏移量-offset" aria-hidden="true">#</a> 偏移量（offset)</h4><p>-当元素开启了定位以后，可以通过偏移量来设置元素的位置</p><ul><li><p>top</p><ul><li>-定位元素和定位位置上边的距高</li></ul></li><li><p>bottom</p><ul><li>-定位元素和定位位置下边的距离</li><li>-定位元素垂直方向的位置由top和bottom两个属性来控制</li><li>通常情况下我们只会使用其中一</li><li>top值越大，定位元素越向下移动</li><li>bottom值越大，定位元素越向上移动</li></ul></li><li><p>left</p><ul><li>-定位元素和定位位置的左侧距高</li></ul></li><li><p>right</p><ul><li>-定位元素和定位位置的右侧距高</li><li>-定位元素水平方向的位置由left和right两个届性控制 通常情况下只会使用一个</li><li>left越大元素越靠右</li><li>right越大元素越靠左</li></ul></li></ul><h3 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h3><h4 id="绝对定位-1" tabindex="-1"><a class="header-anchor" href="#绝对定位-1" aria-hidden="true">#</a> 绝对定位</h4><p>当元素的position属性值设置为absolute时，则开启了元素的绝对定位</p><h4 id="绝对定位的特点" tabindex="-1"><a class="header-anchor" href="#绝对定位的特点" aria-hidden="true">#</a> 绝对定位的特点;</h4><ul><li>1.开启绝对定位后，如果不设置偏移量元素的位置不会发生变化</li><li>2.开启绝对定位后，元素会从文档流中脱离</li><li>3.绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开</li><li>4.绝对定位会使元素提升一个层级</li><li>5.绝对定位元素是相对于其包含块进行定位的</li></ul><h4 id="包含块-containing-block" tabindex="-1"><a class="header-anchor" href="#包含块-containing-block" aria-hidden="true">#</a> 包含块( containing block )</h4><p>-正常情况下:</p><p>包含块就是离当前元素最近的祖先块元素</p><p>-绝对定位的包含块</p><ul><li>包含块就是离它最近的开启了定位的祖先元素，</li><li>如果所有的祖先元素都没有开启定位则根元素就是它的包含块</li><li>html（根元素、初始包含块)</li></ul><h3 id="粘滞定位" tabindex="-1"><a class="header-anchor" href="#粘滞定位" aria-hidden="true">#</a> 粘滞定位</h3><p>-当元素的position属性设置为sticky时则开启了元素的粘滞定位</p><p>-粘滞定位和相对定位的特点基本一致,</p><p>不同的是粘滞定位可以在元素到达某个位置时将其固定</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span> 
<span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
// 固定在10px的位置，这种方式兼容性差，一般不采用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="层级" tabindex="-1"><a class="header-anchor" href="#层级" aria-hidden="true">#</a> 层级</h3><p>对于开启了定位元素，可以通过z-index属性来指定元素的层级</p><p>z-index需要一个整数作为参数,值越大元素的层级越高，元素的层级越高越优先显示</p><p>如果元素的层级一样，则优先显示靠下的元素</p><p>祖先的元素的层级再高也不会盖住后代元素</p><h2 id="_9、字体" tabindex="-1"><a class="header-anchor" href="#_9、字体" aria-hidden="true">#</a> 9、字体</h2><h3 id="自提供字体" tabindex="-1"><a class="header-anchor" href="#自提供字体" aria-hidden="true">#</a> 自提供字体</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* font-face可以将服务器中的字体直接提供给用户去使用*/</span>
<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
	<span class="token comment">/*指定字体的名字*/</span>
    <span class="token property">font-family</span> <span class="token punctuation">:</span> <span class="token string">&#39;myfont&#39;</span> <span class="token punctuation">;</span>
    <span class="token comment">/*服务器中字体的路径*/</span>
	<span class="token property">src</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span> <span class="token string">&#39;./font/zCOOLKuaiLe-Regular.ttf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// 使用
div</span><span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> myf
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本对齐" tabindex="-1"><a class="header-anchor" href="#文本对齐" aria-hidden="true">#</a> 文本对齐</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*水平对齐*/</span>
<span class="token property">text-align</span><span class="token punctuation">:</span> 
	center  居中对齐，两边可能会留空
	left	左对齐，左边不留空，默认值
	right	右对齐，右边不留空
	justify	两端对齐，通过调整间距，是两边都不留空

<span class="token comment">/*垂直对齐*/</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span>
	baseline	默认值，基线对齐
	top			顶部对齐
	bottom		底部对齐
	middle		居中对齐，这个一般的居中对齐，是有一个特定的标准，x对齐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本常用样式" tabindex="-1"><a class="header-anchor" href="#文本常用样式" aria-hidden="true">#</a> 文本常用样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*装饰*/</span>
<span class="token property">text-decoration</span><span class="token punctuation">:</span>
	none	无
	underline	下划线
	line-through	删除线
	overline	上划线
可以在后面追加颜色，形式等等，但是ie不支持
<span class="token property">text-decoration</span><span class="token punctuation">:</span> underline red dotted<span class="token punctuation">;</span>

<span class="token comment">/*一行文字，多余省略号,四个属性，缺一不可*/</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token comment">/*
    	white-space:设置网页如何处理空白
    	normal: 正常
    	nowrap: 不换行
    	pre: 保留空白，即html中如何写的，就如何显示
    */</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token comment">/*w*/</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10、雪碧图" tabindex="-1"><a class="header-anchor" href="#_10、雪碧图" aria-hidden="true">#</a> 10、雪碧图</h2><p>雪碧图用于解决图片加载闪烁的问题</p><p>做法：将所有图片合并保存在一张大图片中，然后通过background-position来调整图片显示的区域，从而避免加载图片慢的问题，称为css-Sprite</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:link</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 93px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./xxx/xx.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span><span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> -93px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:active</span><span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> -186px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：一次性将多个图片加载进页面，降低请求的次数，加快访问速度，提升用户体验。</p><h2 id="_11、过渡-transition" tabindex="-1"><a class="header-anchor" href="#_11、过渡-transition" aria-hidden="true">#</a> 11、过渡(transition)</h2><h3 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h3><p>通过过渡可以指定一个属性发生变化时的切换方式</p><p>通过过渡可以创建一些非常好的效果，提升用户的体验</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
transition-property:指定要执行过渡的属性
多个属性间使用,隔开
如果所有属性都需要过渡，则使用a11关键字
大部分属性都支持过渡效果，注意过渡时必须是从一个有效数值向另外一个有效数值进行过渡
*/</span>
<span class="token property">transition-property</span><span class="token punctuation">:</span> height <span class="token punctuation">,</span> width<span class="token punctuation">;</span>
<span class="token property">transition-property</span><span class="token punctuation">:</span> all<span class="token punctuation">;</span>

<span class="token comment">/*
transition-duration:指定过渡效果的持续时间时间单位,s和ms 1s = 1000ms
*/</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 100ms<span class="token punctuation">,</span>2s<span class="token punctuation">;</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>

<span class="token comment">/*
transition-timing-function:过渡的时序函数
指定过渡的执行的方式
可选值:
ease默认值,慢速开始，先加速,再减速
linear匀速运动
ease-in加速运动
ease-out减速运动
ease-in-out先加速后减速

cubic-bezier() 来指定时序函数
https://cubic-bezier.com  这个网站可以生成贝塞尔曲线

steps() 分步执行过渡效果
可以设置一个第二个值:
end ,在时间结束时执行过渡(默认值)
start ,在时间开始时执行过渡
*/</span>
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>.24<span class="token punctuation">,</span> .95<span class="token punctuation">,</span> .82<span class="token punctuation">,</span> -0.88<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
transition-delay:过渡效果的延迟，等待一段时间后在执行过渡
*/</span>
<span class="token property">transition-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>

<span class="token comment">/*
transition可以同时设置过渡相关的所有属性，只有一个要求，如果要写延迟，则两个时间中第一个是持续时间
*/</span>
<span class="token property">transition</span><span class="token punctuation">:</span> 2s margin-left 1s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>.24<span class="token punctuation">,</span> .95<span class="token punctuation">,</span> .82<span class="token punctuation">,</span> -0.88<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*一张图片，多帧切换，可以实现动图效果*/</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.3s <span class="token function">steps</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1:hover</span><span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> -600px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12、动画-animation" tabindex="-1"><a class="header-anchor" href="#_12、动画-animation" aria-hidden="true">#</a> 12、动画(animation)</h2><h3 id="定义-3" tabindex="-1"><a class="header-anchor" href="#定义-3" aria-hidden="true">#</a> 定义</h3><p>动画和过渡类似,都是可以实现一些动态的效果，</p><p>不同的是过渡需要在某个属性发生变化时才会触发，动画可以自动触发动态效果</p><p>设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*名字可以随便取*/</span>
<span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
	<span class="token comment">/*to表示动画的开始位置也可以使用0%*/</span>
    <span class="token selector">to</span><span class="token punctuation">{</span>
		<span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">/*from动画的结束位置也可以使用100%*/</span>
    <span class="token selector">from</span><span class="token punctuation">{</span>
		<span class="token property">margin-left</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*可以进行多种设置*/</span>
    <span class="token comment">/*动画进行到20%，60%，表示动画进行的进度*/</span>
    <span class="token selector">20%, 60%,</span> <span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">40%</span><span class="token punctuation">{</span>
   		<span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">80%</span><span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
animation-name:要对当前元素生效的关键帧的名字
*/</span>
<span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>
<span class="token comment">/*animation-duration:动画的执行时间*/</span>
<span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
<span class="token comment">/*
动画的延时
*/</span>
<span class="token property">animation-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
<span class="token comment">/*
动画执行函数
*/</span>
<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
<span class="token comment">/*
animation-iteration-count动画执行的次数
可选值:
整数 次数
infinite 无限执行
*/</span>
<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 15<span class="token punctuation">;</span>

<span class="token comment">/*
animation-direction
指定动画运行的方向
可选值:
normal 默认值 从 from 向 to 运行每次都是这样
reverse 从 to 向 from 运行每次都是这样
alternate 从 from 向 to 运行重复执行动画时反向执行
alternate-reverse 从 to 向 from 运行重复执行动画时反向执行
*/</span>
<span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span>
<span class="token comment">/*
animation-play-state:设置动画的执行状态可选值:
running 默认值动画执行
paused动画暂停
*/</span>
<span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
<span class="token comment">/*
animation-fill-mode: 动画的填充模式
可选值;
none 默认值动画执行完毕元素回到原来位置
forwards 动画执行完毕元素会停止在动画结束的位置
backwards 动画延时等待时,元素就会处于开始位置
both 结合了forwards和 backwards
*/</span>
<span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>

<span class="token comment">/*也可以直接用animation，一个设置所有属性，只不过要和过渡一样注意时间的顺序*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13、变形-transform" tabindex="-1"><a class="header-anchor" href="#_13、变形-transform" aria-hidden="true">#</a> 13、变形(transform)</h2><h3 id="定义-4" tabindex="-1"><a class="header-anchor" href="#定义-4" aria-hidden="true">#</a> 定义</h3><p>变形就是指通过css来改变元素的形状或位置</p><p>变形不会影响到页面的布局</p><h3 id="平移" tabindex="-1"><a class="header-anchor" href="#平移" aria-hidden="true">#</a> 平移</h3><h4 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2" aria-hidden="true">#</a> 使用</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
transform用来设置元素的变形效果
-平移;
translateX()沿着x轴方向平移
translateY()沿着y轴方向平移
translateZ()沿着z轴方向平移
	-平移元素，百分比是相对于自身计算的
*/</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用于居中布局" tabindex="-1"><a class="header-anchor" href="#用于居中布局" aria-hidden="true">#</a> 用于居中布局</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
这种居中方式只适用于大小确定的元素
top: 0;
left: 0;
bottom: 0;
right: 0;
margin: auto;
*/</span>

<span class="token comment">/*这种可以适用于宽高不确定的元素*/</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="z轴平移" tabindex="-1"><a class="header-anchor" href="#z轴平移" aria-hidden="true">#</a> z轴平移</h4><p><strong>产生一种类似变大的效果</strong></p><p>一般在全局设置一下视距</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span><span class="token punctuation">{</span>
	<span class="token comment">/*设置当前网页的视距为800px，人眼距离网页的距高*/</span>
    <span class="token property">perspective</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
    <span class="token comment">/*
    z轴平移，调整元素在z轴的位置，正常情况就是调整元素和人眼之间的距离，距离越大，元素离人越近
    z轴平移属于立体效果（近大远小)，默认情况下网页是不支持透视，如果需要看见效果，必须要设置网页的视距
    */</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1:hover</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="旋转" tabindex="-1"><a class="header-anchor" href="#旋转" aria-hidden="true">#</a> 旋转</h3><p>也必须要设置视距，否则x,y轴旋转没有好的效果</p><h4 id="使用-3" tabindex="-1"><a class="header-anchor" href="#使用-3" aria-hidden="true">#</a> 使用</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
通过旋转可以使元素沿着x，y或z旋转指定的角度
rotatex()
rotateY()
rotatez()
*/</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotatez</span><span class="token punctuation">(</span>.25turn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*要注意写的顺序，呈现的效果会不同*/</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span> <span class="token function">translatez</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translatez</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token comment">/*是否显示元素的背面*/</span>
<span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放" aria-hidden="true">#</a> 缩放</h3><h4 id="使用-4" tabindex="-1"><a class="header-anchor" href="#使用-4" aria-hidden="true">#</a> 使用</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*变形的原点默认值center*/</span>
<span class="token property">transform-origin</span> <span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
<span class="token comment">/*
对元素进行缩放的函数:
scaleX() 水平方向缩放
scaleY() 垂直方向缩放
scalc()  双方向的缩放
*/</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14、媒体查询" tabindex="-1"><a class="header-anchor" href="#_14、媒体查询" aria-hidden="true">#</a> 14、媒体查询</h2><p>Media Queries能在不同的条件下使用不同的样式，使页面在不同在终端设备下达到不同的渲染效果。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
媒体特性:
width视口的宽度
height视口的高度
min-width视口的最小宽度（视口大于指定宽度时生效)
max-width视口的最大宽度（视口小于指定宽度时生效)
@media (max-width: 50Opx){
    body{
    background-color: #bfa;
    }
}
样式切换的分界点，我们称其为断点，也就是网页的样式会在这个点时发生变化一般比较常用的断点
小于768	超小屏幕 max-width=768px
大于768	小屏幕 min-width=768px
大于992	中型屏幕 min-width=992px
大于1200 	大屏幕 min-width=1200px
*/</span>
<span class="token comment">/*and是并集，与的关系   ,逗号是交集，或的关系*/</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">// 这里面就是重置样式
    body</span><span class="token punctuation">{</span>
    	<span class="token property">background-color</span><span class="token punctuation">:</span>#bfa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,193);function v(m,k){const a=t("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[n("a",d,[p("w3c教程链接"),c(a)])]),r])}const h=e(o,[["render",v],["__file","hcbase.html.vue"]]);export{h as default};

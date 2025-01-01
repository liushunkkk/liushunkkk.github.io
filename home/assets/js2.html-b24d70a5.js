import{_ as t,r as p,o as c,c as i,b as s,d as n,e,a as o}from"./app-a6de63d6.js";const l="/home/assets/image-20220221165559341-396db8a5.png",u="/home/assets/image-20220221165851440-1973cd92.png",r={},d=s("h1",{id:"js基础知识",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#js基础知识","aria-hidden":"true"},"#"),n(" js基础知识")],-1),k={href:"https://baike.baidu.com/item/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/9845131",target:"_blank",rel:"noopener noreferrer"},v={href:"https://baike.baidu.com/item/Web/150564",target:"_blank",rel:"noopener noreferrer"},m={href:"https://baike.baidu.com/item/%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80/1379708",target:"_blank",rel:"noopener noreferrer"},b={href:"https://baike.baidu.com/item/%E6%B5%8F%E8%A7%88%E5%99%A8/213911",target:"_blank",rel:"noopener noreferrer"},h={href:"https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/2262089",target:"_blank",rel:"noopener noreferrer"},g={href:"https://baike.baidu.com/item/%E5%87%BD%E6%95%B0/301912",target:"_blank",rel:"noopener noreferrer"},f=o(`<h2 id="_1、this" tabindex="-1"><a class="header-anchor" href="#_1、this" aria-hidden="true">#</a> 1、this</h2><p>解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this;</p><p>this指向的是一个对象，这个对象我们称为函数执行的上下文对象，</p><p>根据函数的调用方式的不同，this会指向不同的对象</p><p>1.以函数的形式调用时，this永远都是window</p><p>2.以方法的形式调用时，this就是调用方法的那个对象</p><p>3.当以构造函数的形式调用时，this就是新创建的那个对象</p><h2 id="_2、构造函数" tabindex="-1"><a class="header-anchor" href="#_2、构造函数" aria-hidden="true">#</a> 2、构造函数</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>构造函数就是一个普通的函数，创建方式和普通函数没有区别，不同的是构造函数习惯上<strong>首字母大写</strong></p><p>构造函数和普通函数的区别就是调用方式的不同</p><p>普通函数是直接调用，而构造函数需要使用<strong>new关键字来调用</strong></p><h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h3><p>构造函数的执行流程:</p><ol><li>立刻创建一个新的对象</li><li>将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象</li><li>逐行执行函数中的代码</li><li>将新建的对象作为返回值返回</li></ol><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p>构造函数可以专门用来创建一类对象</p><p>使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。</p><p>我们将通过一个构造函数创建的对象，称为是该类的实例</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token comment">// 这样会浪费资源，重复创造方法对象,使用原型解决</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>xxx<span class="token punctuation">,</span> xx<span class="token punctuation">,</span> xx<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、原型" tabindex="-1"><a class="header-anchor" href="#_3、原型" aria-hidden="true">#</a> 3、原型</h2><ul><li><p>我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是我们所谓的原型对象；如果函数作为普通函数调用prototype没有任何作用</p></li><li><p>当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过 <code>__proto__</code>来访间该属性</p></li><li><p>原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中</p></li><li><p>当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用</p></li><li><p>以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中， 这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> mc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Myclass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出结果为对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mc<span class="token punctuation">.</span>_proto__ <span class="token operator">==</span> <span class="token class-name">Myclass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出结果为true</span>

<span class="token comment">// 设置原型属性</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ddd&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//向原型中添加sayName方法</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token string">&quot;He1lo大家好，我是:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span> <span class="token keyword">in</span> mc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mc<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、原型链" tabindex="-1"><a class="header-anchor" href="#_4、原型链" aria-hidden="true">#</a> 4、原型链</h2><p>原型对象也是对象，所以它也有原型，当我们使用一个对象的属性或方法时，</p><ul><li><p>会现在自身中寻找自身中如果有，则直接使用，</p></li><li><p>如果没有则去原型对象中寻找，如果原型对象中与，则使用，</p></li><li><p>如果没有则去原型的原型中寻找，直到找到<strong>Object对象</strong>的原型，</p></li><li><p><strong>0bject对象的原型没有原型</strong>，如果在object中依然没有找到，则返回undefined</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mc<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;hasOwnProperty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mc<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span> <span class="token string">&quot;hasOwnProperty&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mc<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、垃圾回收" tabindex="-1"><a class="header-anchor" href="#_5、垃圾回收" aria-hidden="true">#</a> 5、垃圾回收</h2><p>当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，所以这种垃圾必须进行清理。</p><p>在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，我们不需要也不能进行垃圾回收的操作</p><p>我们需要做的只是要将不再使用的对象引用设置null即可</p><h2 id="_6、函数方法call-apply" tabindex="-1"><a class="header-anchor" href="#_6、函数方法call-apply" aria-hidden="true">#</a> 6、函数方法call&amp;apply</h2><p>call()和apply()</p><ul><li><p>这两个方法都是函数对象的方法，需要通过函数对象来调用</p></li><li><p>当对函数调用call()和apply()都会调用函数执行</p></li><li><p>在调用cal1()和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this</p></li><li><p>call()方法可以将实参在对象之后依次传递</p></li><li><p>apply()方法需要将实参封装到一个数组中统─传递</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 传入的obj是什么，fun中的this就指向哪个对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、arguments" tabindex="-1"><a class="header-anchor" href="#_7、arguments" aria-hidden="true">#</a> 7、arguments</h2><p>在调用函数时，浏览器每次都会传递进两个隐含的参数:</p><p>1.函数的上下文对象this</p><p>2.封装实参的对象arguments</p><ul><li>arguments是一个<strong>类数组对象</strong>,它也可以通过索引来操作数据，也可以获取长度</li><li>在调用函数时，我们所传递的实参都会在arguments中保存</li><li>arguments. length可以用来获取实参的长度</li><li>它里边有一个属性叫做callee, 这个属性对应一个函数对象，就是当前正在指向的函数的对象</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>callee <span class="token operator">==</span> fun<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、正则表达式" tabindex="-1"><a class="header-anchor" href="#_8、正则表达式" aria-hidden="true">#</a> 8、正则表达式</h2><p>语法:</p><p>var变量= new RegExp(&quot;正则表达式&quot;, &quot;匹配模式&quot;);</p><p>使用typeof检查正则对象，会返回object</p><p>var reg = new RegExp(&quot;a&quot;);这个正则表达式可以来检查一个字符串中是否含有a</p><p>在构造函数中可以传递一个匹配模式作为第二个参数，</p><p>可以是：i 忽略大小写 g 全局匹配模式(匹配所有项，不只是第一个)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 结果为boolean</span>

<span class="token comment">// 字面量创建</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>  <span class="token comment">// object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// | 或</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a|b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

<span class="token comment">// [] 或</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[abcd]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

<span class="token comment">// [^] 除了</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^ab]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//不含ab</span>

<span class="token comment">// 量词</span>
<span class="token comment">// {n}连续出现次数，只对前面一个字符生效</span>
<span class="token comment">// {m, n} 连续出现m到n次</span>
<span class="token comment">// {m, } 连续出现m次以上</span>
<span class="token comment">// + 至少一次，相当于{1, }</span>
<span class="token comment">// * 0个或者多个，{0, }</span>
<span class="token comment">// ? 0或者1, {0, 1}</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ab{3}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>  <span class="token comment">// abbb</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(ab){3}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//ababab</span>

<span class="token comment">// ^ 开头</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">// a开头</span>
<span class="token comment">// $ 结尾</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">// a结尾</span>
<span class="token comment">// 如果同时使用，必须完全匹配，如^aaa$</span>

<span class="token comment">// . 表示任意字符</span>
<span class="token comment">/*
	\\\\ \\ 转义字符
	\\. .
    \\w -任意字母、数字、_  [A-z0-9_]
    \\W -除了字母、数字、_ [^A-z0-9_]
    \\d -任意的数字 [0-9]
    \\D -除了数字[^0-9]
    \\s -空格
    \\S -除了空格
    \\b 单词边界  \\bchild\\b  只能是单词child
    \\B 除了单词边界
*/</span>

<span class="token comment">// 手机号</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[3-9][0-9]{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 开头空格</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 结尾</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 开头或结尾，注意g</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*|\\s*$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9、dom" tabindex="-1"><a class="header-anchor" href="#_9、dom" aria-hidden="true">#</a> 9、DOM</h2><h3 id="dom概念" tabindex="-1"><a class="header-anchor" href="#dom概念" aria-hidden="true">#</a> DOM概念</h3><p>DOM，全称Document Object Model文档对象模型。</p><p>JS中通过DOM来对HTML文档进行操作。只要理解了DOM就可以随心所欲的操作WEB页面。</p><ul><li><p>文档</p><ul><li>-文档表示的就是整个的HTML网页文档</li></ul></li><li><p>对象</p><ul><li>-对象表示将网页中的每一个部分都转换为了一个对象。</li></ul></li><li><p>模型</p><ul><li>-使用模型来表示对象之间的关系，这样方便我们获取对象</li><li>成树状，模型树</li></ul></li></ul><p><img src="`+l+'" alt="image-20220221165559341"></p><h3 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点</h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><p>节点Node，是构成我们网页的最基本的组成部分，网页中的每一个部分都可以称为是一个节点。</p><p>比如: html标签、属性、文本、注释、整个文档等都是一个节点。</p><p>虽然都是节点，但是实际上他们的具体类型是不同的。</p><p>比如︰标签我们称为元素节点、属性称为属性节点、文本称为文本节点、文档称为文档节点。</p><p>节点的类型不同，属性和方法也都不尽相同。</p><h4 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h4><p>常用节点分为四类</p><ul><li>文档节点:整个HTML文档</li><li>元素节点:HTML文档中的HTML标签</li><li>属性节点∶元素的属性</li><li>文本节点:HTML标签中的文本内容</li></ul><p><img src="'+u+`" alt="image-20220221165851440"></p><h4 id="常用节点" tabindex="-1"><a class="header-anchor" href="#常用节点" aria-hidden="true">#</a> 常用节点</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*在document中有一个属性body，它保存的是body的引用*/</span>
<span class="token keyword">var</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
<span class="token comment">/*document.documentElement保存的是html根标签*/</span>
<span class="token keyword">var</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="节点获取" tabindex="-1"><a class="header-anchor" href="#节点获取" aria-hidden="true">#</a> 节点获取</h4><h5 id="获取元素节点" tabindex="-1"><a class="header-anchor" href="#获取元素节点" aria-hidden="true">#</a> 获取元素节点</h5><p>通过document对象调用</p><p>getElementById() -通过id属性获取一个元素节点对象</p><p>getElementsByTagName() -通过标签名获取一组元素节点对象</p><p>getElementsByName() -通过name属性获取一组元素节点对象</p><p>getElementsByClassName() -通过class属性获取一组元素节点对象，ie8以上才支持</p><h5 id="获取节点子节点" tabindex="-1"><a class="header-anchor" href="#获取节点子节点" aria-hidden="true">#</a> 获取节点子节点</h5><p>通过具体的元素节点调用</p><p>getElementsByTagName() -方法，返回当前节点的指定标签名后代节点</p><p>childNodes -属性，表示当前节点的所有子节点，包含空白文本节点</p><p>children -属性，展示当前节点的所有子节点，只含标签</p><p>firstChild -属性，表示当前节点的第一个子节点，包含空白文本节点</p><p>firstElementChild -属性，表示当前节点的第一个子节点，不包含空白文本节点</p><p>lastChild -属性，表示当前节点的最后一个子节点</p><h5 id="获取节点父节点和兄弟节点" tabindex="-1"><a class="header-anchor" href="#获取节点父节点和兄弟节点" aria-hidden="true">#</a> 获取节点父节点和兄弟节点</h5><p>通过具体的节点调用</p><p>parentNode -属性，表示当前节点的父节点</p><p>previousSibling -属性，表示当前节点的前一个兄弟节点，会有空白文本</p><p>previousElementSibling -属性，表示当前节点的前一个兄弟元素节点</p><p>nextSibling -属性，表示当前节点的后一个兄弟节点</p><h4 id="根据选择器获取节点" tabindex="-1"><a class="header-anchor" href="#根据选择器获取节点" aria-hidden="true">#</a> 根据选择器获取节点</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
document.querySelector()
需要一个选择器的字符串作为参数，可以根据一个CSS选择器来查询一个元素节点对象
虽然IE8中没有getElementsByClassName()但是可以使用querySelector()代替
使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，那么它只会返回第一个
*/</span>
<span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.box1 div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.box1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回多个需要使用querySelectorAll</span>
<span class="token comment">// 即使只有一个符合条件，也会返回一个数组</span>
<span class="token keyword">var</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><h4 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h4><p>事件，就是文档或浏览器窗口中发生的一些特定的交互瞬间。</p><p>JavaScript 与HTML之间的交互是通过事件实现的。</p><p>对于Web应用来说，有下面这些代表性的事件:点击某个元素、将鼠标移动至某个元素上方、按下键盘上某个键，等等。</p><h4 id="未加载问题" tabindex="-1"><a class="header-anchor" href="#未加载问题" aria-hidden="true">#</a> 未加载问题</h4><p>浏览器在加载一个页面时，是按照自上向下的顺序加载的，读取到一行就运行一行,如果将script标签写到页面的上边，在代码执行时，页面还没有加载，页面没有加载，DOM对象也没有加载，会导致无法获取到DOM对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
    onload事件会在整个页面加载完成之后才触发
    为window绑定一个onload事件
    该事件对应的响应函数将会在页面加载完成之后执行，
    这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了
*/</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//获取id为btn的按钮</span>
    <span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getE1ementById</span><span class="token punctuation">(</span> <span class="token string">&quot;btn&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//为按钮绑定一个单击响应函数</span>
    btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="滚动条事件" tabindex="-1"><a class="header-anchor" href="#滚动条事件" aria-hidden="true">#</a> 滚动条事件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//获取id为info的p元素</span>
<span class="token keyword">var</span> info <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementByTd</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
info<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//检查垂直滚动条是否滚动到底</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>scrollHeight <span class="token operator">-</span> info<span class="token punctuation">.</span>scrollTop <span class="token operator">==</span> info<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span><span class="token punctuation">{</span>
        xxxxxx
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="鼠标移动事件" tabindex="-1"><a class="header-anchor" href="#鼠标移动事件" aria-hidden="true">#</a> 鼠标移动事件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数，
在事件对象中封装了当前事件相关的一切信息，比如:鼠标的坐标键盘哪个按键被按下鼠标滚轮滚动的方向。
*/</span>
areaDiv<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">/*
        在IE8中,响应函数被触发时,浏览器不会传递事件对象，
        在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的
    */</span>
    event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token comment">/*
        clientX可以获取鼠标指针的窗口水平坐标
        cilentY可以获取鼠标指针的窗口垂直坐标
        pageX可以获取鼠标指针的页面水平坐标 IE8不支持
        pageY可以获取鼠标指针的页面垂直坐标
    */</span>
        <span class="token keyword">var</span> x <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span>
        <span class="token keyword">var</span> y <span class="token operator">=</span> event<span class="token punctuation">.</span>clientY<span class="token punctuation">;</span>
        <span class="token function">alert</span><span class="token punctuation">(</span> <span class="token string">&quot;x=&quot;</span><span class="token operator">+</span>x <span class="token operator">+</span> ” <span class="token punctuation">,</span> y <span class="token operator">=</span> &quot;<span class="token operator">+</span>y <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// document.documentElement.scrollTop;</span>
<span class="token comment">// document.documentElement.scrollLeft;</span>
<span class="token comment">// 浏览器的滚动条属于html，可以根据这个获取滚动条滚动位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h4><p>div里面包含span，这样触发span事件时，div和body的点击事件都会被相继触发</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
*事件的冒泡（Bubble）
*所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发
*冒泡大部分情况下是有用的，也可以使用事件对象取消冒泡
*/</span>
<span class="token comment">//为s1绑定一个单击响应函数</span>
<span class="token keyword">var</span> s1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span> <span class="token punctuation">(</span><span class="token string">&quot;s1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token comment">// 这样就可以取消冒泡</span>
    event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;我是span的单击响应函数&quot;</span>&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//为box1绑定一个单击响应函数</span>
<span class="token keyword">var</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span> <span class="token string">&quot;box1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
box1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;我是div的单击响应函数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//为body绑定一个单击响应函数</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;我是body的单击响应函数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件委派" tabindex="-1"><a class="header-anchor" href="#事件委派" aria-hidden="true">#</a> 事件委派</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
    我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的
    我们可以尝试将其绑定给元素的共同的祖先元素
    
    事件的委派
    指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素
    从而通过祖先元素的响应函数来处理事件。
    事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
*/</span>
<span class="token comment">// 为ul绑定一个单击响应函数，并使用target进行判断，就可以使用冒泡间接为所有ul下的li绑定此事件</span>
u1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token comment">/*
        target
        event中的target表示的触发事件的对象
    */</span>
    <span class="token comment">//如果触发事件的对象是我们期望的元素，则执行否则不执行</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        xxxx
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h4><h5 id="绑定方式一" tabindex="-1"><a class="header-anchor" href="#绑定方式一" aria-hidden="true">#</a> 绑定方式一</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>使用对象<span class="token punctuation">.</span>事件 <span class="token operator">=</span> 函数的形式绑定响应函数<span class="token punctuation">,</span>
它只能同时为一个元素的一个事件绑定一个响应函数<span class="token punctuation">,</span>不能绑定多个，
如果绑定了多个，则后边会覆盖掉前边的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="绑定方式二-addeventlistener" tabindex="-1"><a class="header-anchor" href="#绑定方式二-addeventlistener" aria-hidden="true">#</a> 绑定方式二，addEventListener</h5><p>IE8以上才支持</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
	addEventListener()  –通过这个方法也可以为元素绑定响应函数
	-参数,
        1.事件的字符串，不要on
        2.回调函数，当事件触发时该函数会被调用
        3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false
	使用addEventListener()可以同时为一个元素的相同事祥同时绑定多个响应函数，
	这样当事件被触发时，响应函数将会按照函数的绑定顺序执行
*/</span>
btn01<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> <span class="token string">&quot;click&quot;</span> <span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn01<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> <span class="token string">&quot;click&quot;</span> <span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="绑定方式三-ie8-attachevent" tabindex="-1"><a class="header-anchor" href="#绑定方式三-ie8-attachevent" aria-hidden="true">#</a> 绑定方式三，IE8-attachEvent</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
    attachEvent() –在IE8中可以使用attachEvent()来绑定事件
    -参数,
        1.事件的字符串，要on
        2.回调函数
    -这个方法也可以同时为一个事件绑定多个处理函数，
    不同的是它是后绑定先执行，执行顺序和addEventListener()相反
*/</span>
btn01<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;onclick&quot;</span> <span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn01<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;onclick&quot;</span> <span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自定义绑定函数-bind" tabindex="-1"><a class="header-anchor" href="#自定义绑定函数-bind" aria-hidden="true">#</a> 自定义绑定函数-bind</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//定义一个函数，用来为指定元素绑定响应函数</span>
<span class="token comment">/*
addEventListener()中的this，是绑定事件的对象
attachEvent()中的this，是window
需要统一两个方法this
参数:
    obj要绑定事件的对象
    eventStr事件的字符串
    callback回调函数
*/</span>
<span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> eventstr<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//大部分浏览器兼容的方式</span>
        obj<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventStr<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
            this是谁由调用方式决定
            callback.call(obj)
        */</span>
        <span class="token comment">//IE8及以下</span>
        obj<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> eventStr <span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//在匿名函数中调用回调函数,就可以使this统一指向obj</span>
            <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token function">bind</span><span class="token punctuation">(</span>btn01<span class="token punctuation">,</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// this就指向btn01了</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件传播" tabindex="-1"><a class="header-anchor" href="#事件传播" aria-hidden="true">#</a> 事件传播</h4><p>-关于事件的传播网景公司和微软公司有不同的理解</p><p>-微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播,也就说事件应该在冒泡阶段执行。</p><p>-网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件.然后在向内传播给后代元素</p><p>W3C综合了两个公司的方案，将事件传播分成了三个阶段</p><ul><li>1.捕获阶段 -在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件</li><li>2.目标阶段 -事件捕获到目标元素,捕获结束开始在目标元素上触发事件</li><li>3.冒泡阶段 -事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件</li></ul><p>-如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true 一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false</p><p>IE8以下的浏览器没有事件捕获阶段</p><h3 id="操作dom" tabindex="-1"><a class="header-anchor" href="#操作dom" aria-hidden="true">#</a> 操作DOM</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
document .createElement( )
可以用于创建一个元素节点对象，
它需要一个标签名作为参数，将会根据该标签名创建元素节点对象
并将创建好的对象作为返回值返回
*/</span>
<span class="token keyword">var</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
document.createTextNode()
可以用来创建一个文本节点对象
需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回
*/</span>
<span class="token keyword">var</span> gzText <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&quot;广州&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 这个可以直接使用innerHTML进行设置</span>

<span class="token comment">/*
appendChild( )
向一个父节点中添加一个新的子节点
用法:父节点.appendchild(子节点)
*/</span>
li<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>gzText<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
insertBefore( )
可以在指定的子节点前插入新的子节点
父节点.insertBefore(新节点, 参考节点);
*/</span>
city<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>li <span class="token punctuation">,</span> bj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
replaceChild()
可以使用指定的子节点替换已有的子节点
父节点.replaceChild(新节点,旧节点);
*/</span>
city<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>li <span class="token punctuation">,</span> bj<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
removeChild( )
可以删除一个子节点
父节点.removeChild(子节点);
常用法：子节点.parentNode.removeChild(子节点);
*/</span>
city<span class="token punctuation">.</span><span class="token function">removechild</span><span class="token punctuation">(</span>bj<span class="token punctuation">)</span><span class="token punctuation">;</span>
bj<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>bj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自杀</span>


<span class="token comment">/*
使用innerHTML也可以完成DOM的增删改的相关操作
一般不建议这么使用，他的影响范围是整个父子节点
*/</span>
city<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token string">&quot;&lt;li&gt;广州&lt;/li&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作样式" tabindex="-1"><a class="header-anchor" href="#操作样式" aria-hidden="true">#</a> 操作样式</h3><p>通过JS修改元素的样式:</p><p>语法:元素.style.样式名 = 样式值（这样操作的都是内联样式）</p><p>注意:如果CSS的样式名中含有-，这种名称在JS中是不合法的比如background-color需要将这种样式名修改为驼峰命名法，</p><p>我们通过style属性设置的样式都是内联样式，而内联样式有较高的优先级,所以通过JS修改的样式往往会立即显示</p><p><strong>注意</strong>：通过style修改样式，每使用一次，就会重新渲染一次页面，性能差</p><p><strong>解决方法</strong>：一般通过在css中设置备用样式，然后通过修改元素的class，来直接修改多个样式，这样浏览器只需要重新渲染一次页面，性能较好</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;#box1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&quot;300px&quot;</span><span class="token punctuation">;</span>
box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&quot;300px&quot;</span><span class="token punctuation">;</span>
box1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">addClass</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> classname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先判断有没有该类,\\b单词边界</span>
    <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\b&quot;</span> <span class="token operator">+</span> classname <span class="token operator">+</span> <span class="token string">&quot;\\\\b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>className<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 加空格，可以实现样式覆盖和重用，不会直接替换</span>
        obj<span class="token punctuation">.</span>calssName <span class="token operator">+=</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> classname   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> classname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先判断有没有该类,\\b单词边界</span>
    <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\b&quot;</span> <span class="token operator">+</span> classname <span class="token operator">+</span> <span class="token string">&quot;\\\\b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>className <span class="token operator">=</span> obj<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 切换，有就删除，没有就添加</span>
<span class="token keyword">function</span> <span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> classname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先判断有没有该类,\\b单词边界</span>
    <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\b&quot;</span> <span class="token operator">+</span> classname <span class="token operator">+</span> <span class="token string">&quot;\\\\b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>className<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>className <span class="token operator">=</span> obj<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>calssName <span class="token operator">+=</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> classname<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一下都是只读，不能修改样式</span>
<span class="token comment">/*
    获取元素的当前显示的样式
    语法,元素.currentStyle.样式名*它可以用来读取当前元素正在显示的样式
    如果当前元素没有设置该样式，则获取它的默认值
    currentstyle只有IE浏览器支持，其他的浏览器都不支持
*/</span>
<span class="token function">alert</span><span class="token punctuation">(</span>box1<span class="token punctuation">.</span>currentStyle<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>box1<span class="token punctuation">.</span>currentstyle<span class="token punctuation">.</span>backgroundColor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
    在其他浏览器中可以使用牢
    getComputedStyle()这个方法来获取元素当前的样式
    这个方法是window的方法，可以直接使用
    需要两个参数
    第一个,要获取样式的元素
    第二个,可以传递一个伪元素，一般都传null
    如果获取的样式没有设置，则会获取到真实的值，而不是默认值
    比如:没有设置width，它不会获取到auto，而是一个长度
    ie8以上才支持
*/</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>box1<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 通用</span>
<span class="token keyword">function</span> <span class="token function">getstyle</span><span class="token punctuation">(</span><span class="token parameter">obj <span class="token punctuation">,</span> name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>getComputedStyle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//正常浏览器的方式，具有getComputedStyle()方法</span>
        <span class="token keyword">return</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    	<span class="token comment">//IE8的方式，没有getComputedStyle()方法</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">.</span>currentstyle<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//可以直接用一个三元表达式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10、bom" tabindex="-1"><a class="header-anchor" href="#_10、bom" aria-hidden="true">#</a> 10、BOM</h2><p><strong>浏览器对象模型</strong>，BOM可以使我们通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作</p><p>Window -代表的是整个浏览器的窗口，同时window也是网页中的全局对象</p><p>Navigator -代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器</p><p>Location -代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面</p><p>History -代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录 由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页而且该操作只在当次访问时有效</p><p>Screen -代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息</p><p>这些BOM对象在浏览器中都是作为window对象的属性保存的， 可以通过window对象来使用，也可以直接使用，<strong>window调用为大写，直接使用时为小写</strong></p><h2 id="_11、定时器" tabindex="-1"><a class="header-anchor" href="#_11、定时器" aria-hidden="true">#</a> 11、定时器</h2><h3 id="定时调用setinterval" tabindex="-1"><a class="header-anchor" href="#定时调用setinterval" aria-hidden="true">#</a> 定时调用setInterval</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
setInterval()
-定时调用
-可以将一个函数，每隔一段时间执行一次
-参数;
    1.回调函数，该函数会每隔一段时间被调用一次
    2.每次调用间隔的时间，单位是毫秒
-返回值:
    返回一个Number类型的数据
    这个数字用来作为定时器的唯一标识
*/</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 关闭定时器</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延时调用settimeout" tabindex="-1"><a class="header-anchor" href="#延时调用settimeout" aria-hidden="true">#</a> 延时调用setTimeout</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
*延时调用，
*延时调用一个函数不马上执行，而是隔一段时间以后在执行，只会执行一次
*延时调用和定时调用的区别，定时调用会执行多次，而延时调用只会执行一次
*/</span>
<span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//使用clearTimeout()来关闭一个延时调用</span>
<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,152);function x(y,w){const a=p("ExternalLinkIcon");return c(),i("div",null,[d,s("p",null,[n("JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的"),s("a",k,[n("编程语言"),e(a)]),n("。虽然它是作为开发"),s("a",v,[n("Web"),e(a)]),n("页面的"),s("a",m,[n("脚本语言"),e(a)]),n("而出名，但是它也被用到了很多非"),s("a",b,[n("浏览器"),e(a)]),n("环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持"),s("a",h,[n("面向对象"),e(a)]),n("、命令式、声明式、"),s("a",g,[n("函数"),e(a)]),n("式编程范式。")]),f])}const q=t(r,[["render",x],["__file","js2.html.vue"]]);export{q as default};

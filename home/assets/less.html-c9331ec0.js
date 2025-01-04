import{_ as n,o as s,c as a,a as p}from"./app-2cd98865.js";const e={},t=p(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*
 * 编译css后可见注释
 */</span>

<span class="token comment">// 编译后不可见注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@w<span class="token punctuation">:</span></span> 200px<span class="token punctuation">;</span>
<span class="token variable">@border<span class="token punctuation">:</span></span> 1px solid #fff<span class="token punctuation">;</span>
<span class="token variable">@property<span class="token punctuation">:</span></span> color<span class="token punctuation">;</span>
<span class="token variable">@value<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>
<span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">&#39;../image&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 用变量去定义一个属性名的时候，使用时需要加大括号</span>
<span class="token comment">// 定义路径使用时需要在外围加引号</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@border</span><span class="token punctuation">;</span>
  <span class="token property">@{property}</span><span class="token punctuation">:</span> <span class="token variable">@value</span><span class="token punctuation">;</span>
  <span class="token property">background-@{property}</span><span class="token punctuation">:</span> <span class="token variable">@value</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;@{images}/xxx.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 混合</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 208px<span class="token punctuation">;</span>
<span class="token variable">@border<span class="token punctuation">:</span></span> 5px solid #fe0<span class="token punctuation">;</span>
<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 20px<span class="token operator">/</span> 40px <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@border</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//混合写法，把另一个选择器的名字放在这个样式里，这个样式就会具有放入的选择器的样式</span>
<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.class</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.class</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bg</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可以传递参数</span>
<span class="token selector">.bg(<span class="token variable">@bg</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@bg</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 带默认值</span>
<span class="token selector">.bg(<span class="token variable">@bg</span>: green)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@bg</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//混合带多个参数</span>
<span class="token selector">.border2(<span class="token variable">@w</span>:10px, <span class="token variable">@style</span>:solid, <span class="token variable">@color</span>:#000)</span><span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@w</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box5</span><span class="token punctuation">{</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.border2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token mixin-usage function">.border2</span><span class="token punctuation">(</span><span class="token variable">@w<span class="token punctuation">:</span></span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token mixin-usage function">.border2</span><span class="token punctuation">(</span><span class="token variable">@style<span class="token punctuation">:</span></span>dotted<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token mixin-usage function">.border2</span><span class="token punctuation">(</span><span class="token variable">@color<span class="token punctuation">:</span></span>#f00<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匹配模式" tabindex="-1"><a class="header-anchor" href="#匹配模式" aria-hidden="true">#</a> 匹配模式</h2><p>匹配模式就是当存在一些样式有多种选择时，而可选用匹配模式设置条件，然后简化书写</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">//匹配模式</span>
<span class="token selector">.triangle(top,<span class="token variable">@w</span>:5px,<span class="token variable">@c</span>:red)</span><span class="token punctuation">{</span>
	<span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent <span class="token variable">@c</span> transparent<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> dashed dashed solid dashed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.triangle(right,<span class="token variable">@w</span>:5px,<span class="token variable">@c</span>:red)</span><span class="token punctuation">{</span>
	<span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent transparent <span class="token variable">@c</span><span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> dashed dashed dashed solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.triangle(bottom,<span class="token variable">@w</span>:5px,<span class="token variable">@c</span>:red)</span><span class="token punctuation">{</span>
	<span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">@c</span> transparent transparent transparent<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid dashed dashed dashed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.triangle(left,<span class="token variable">@w</span>:5px,<span class="token variable">@c</span>:red)</span><span class="token punctuation">{</span>
	<span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> transparent <span class="token variable">@c</span> transparent transparent<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> dashed solid dashed dashed <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//公用的样式，需要放到下面这个class里，第一个参数是固定的格式(@_),后面的参数与上面保持一致</span>
<span class="token selector">.triangle(<span class="token variable">@_</span>,<span class="token variable">@w</span>:5px,<span class="token variable">@c</span>:red)</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
	<span class="token mixin-usage function">.triangle</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span>50px<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token mixin-usage function">.triangle</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span>50px<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token mixin-usage function">.triangle</span><span class="token punctuation">(</span>bottom<span class="token punctuation">,</span>5opx<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token mixin-usage function">.triangle</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>50px<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pos(r)</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.pos(a)</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.pos(f)</span><span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box4</span><span class="token punctuation">{</span>
	<span class="token mixin-usage function">.pos</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token mixin-usage function">.pos</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token mixin-usage function">.pos</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><p>嵌套就是可以按照div的标签结构去书写样式</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
        <span class="token selector">ul</span><span class="token punctuation">{</span>
            <span class="token selector">li</span><span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// &amp;表示父级选择器，这里也就是.box2</span>
        <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 运算</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@size<span class="token punctuation">:</span></span>300px<span class="token punctuation">;</span>

<span class="token comment">// 减号左右要加空格</span>
<span class="token selector">.boxx</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@size</span><span class="token operator">+</span>100<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@size</span> <span class="token operator">-</span> 100px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token variable">@size</span><span class="token operator">*</span>2<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@size</span><span class="token operator">/</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译后变成100px</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token variable">@size</span><span class="token operator">/</span>3<span class="token punctuation">;</span>  <span class="token comment">// 编译为300px/3</span>
  <span class="token comment">// ~&#39;&#39; 包裹的样式不会编译解析</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> ~<span class="token string">&#39;alpha(opacity=50)&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[t];function c(l,o){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","less.html.vue"]]);export{r as default};

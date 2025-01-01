import{_ as n,o as s,c as a,a as p}from"./app-a6de63d6.js";const e={},t=p(`<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>vscode需要安装sass和live sass compiler</p><p>配置：在setting.json中追加以下内容</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">/* 压缩设置 */</span>
<span class="token property">&quot;liveSassCompile.settings.formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// This is Default.</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expanded&quot;</span><span class="token punctuation">,</span> <span class="token comment">// nested, expanded, compact, compressed</span>
        <span class="token property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.css&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;savePath&quot;: &quot;~/../css&quot; // 为 null 表示当前目录</span>
        <span class="token property">&quot;savePath&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">/* 排除目录 */</span>
<span class="token property">&quot;liveSassCompile.settings.excludeList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;/**/node_modules/**&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/.vscode/**&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">/* 是否生成对应的map */</span>
<span class="token property">&quot;liveSassCompile.settings.generateMap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token comment">/* 是否添加兼容前缀 如： -webkit- , -moz- ... */</span>
<span class="token property">&quot;liveSassCompile.settings.autoprefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 2 versions&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;liveSassCompile.settings.watchOnLaunch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>支持标准的 Css 的注释语法，单行注释 “//” 与多行注释 “/* */”。注释在 .scss 中的规则：</p><ol><li>单行注释，不会解析到 .css 文件中；</li><li>如果选择的输出格式是 compressed ，则所有的注释信息都不会解析出来；</li><li>在多行注释中添加 “!”，则可保留这条注释到压缩文件中，此方法主要用于文件的版权声明；</li><li>多行注释中可以添加插值语句 (interpolation)</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 单行注释</span>

<span class="token comment">/*
 * 多行注释 */</span>

<span class="token comment">/*!
 * 版权声明
 * 作者: #{#author} */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法特性" tabindex="-1"><a class="header-anchor" href="#语法特性" aria-hidden="true">#</a> 语法特性</h2><h3 id="选择器嵌套-nested-selector" tabindex="-1"><a class="header-anchor" href="#选择器嵌套-nested-selector" aria-hidden="true">#</a> 选择器嵌套 (Nested Selector)</h3><p>存在和less一致的选择器嵌套</p><h3 id="属性嵌套" tabindex="-1"><a class="header-anchor" href="#属性嵌套" aria-hidden="true">#</a> 属性嵌套</h3><p>属性嵌套大括号前面必须要括号</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.div </span><span class="token punctuation">{</span>
    <span class="token selector">font: </span><span class="token punctuation">{</span>
        <span class="token property">size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
        <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token selector">.div </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父选择器" tabindex="-1"><a class="header-anchor" href="#父选择器" aria-hidden="true">#</a> 父选择器</h3><p>存在&amp;父选择器符号</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
        <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.top </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px #ccc solid<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>-left </span><span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="占位符选择器" tabindex="-1"><a class="header-anchor" href="#占位符选择器" aria-hidden="true">#</a> 占位符选择器%</h3><p>有时需要定义一套样式，但并不给某个元素使用，必须在需要调用的时候才启用此样式库，使用 “%foo” 占位，通过 “@extend” 进行调用。%foo 名称可自己定义，前面需加上符号 “%“</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.button<span class="token placeholder">%buttonStyle</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%buttonStyle</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn-success </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%buttonStyle</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.button.btn-default, .button.btn-success </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn-success </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="变量的声明" tabindex="-1"><a class="header-anchor" href="#变量的声明" aria-hidden="true">#</a> 变量的声明</h3><p>使用符号 <code>$</code> 定义变量，变量名称可自己命名，赋值方法与 Css 相同。如：<code>$color: red;</code></p><p>变量的定义与使用需有先后顺序，即先定义变量，然后再使用变量，书写的顺序则是将定义变量写在前面，使用变量写在后面。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的命名规则" tabindex="-1"><a class="header-anchor" href="#变量的命名规则" aria-hidden="true">#</a> 变量的命名规则</h3><ol><li>用符号 “$” 开头，后面跟随变量名称；</li><li>变量名称需使用字母开头，中间可使用字母、数字、中横线（连接符）、下划线；</li><li>支持大/小写字母。</li></ol><p>如果多个单词的连接，可以使用横线 “-“、下划线 “_” 或驼峰式的命名形式，需要注意的是，如果同样的单词，分别采用横线与下划线来连接，此名称相当于是同一个名称，在解析时，会采用最后一个声明的变量来解析。因此在命名的时候建议统一使用一个符号。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border_color</span></span><span class="token punctuation">:</span> #0ff<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$borderColor</span></span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$border_color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的默认值" tabindex="-1"><a class="header-anchor" href="#变量的默认值" aria-hidden="true">#</a> 变量的默认值</h3><p>可以使用 “!default” 为每个变量设置一个默认值，如果该变量没有被重新定义过，则会将该变量解析为默认值，如果已经有过定义，则会取其以定义过的值。以下代码已经有定义过该变量，因此获取的是定义过的值，默认值不会覆盖之前已经定义过的值。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #666 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a> 变量的作用域</h3><h4 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h4><p>在选择器中定义的变量，只能在该选择器或该选择器的子选择器中使用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
    <span class="token selector">.wrapper </span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container .wrapper </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h4><p>定义后的变量，可以在全局范围内使用，全局变量的定义有两种形式：</p><p>1、直接定义在最外面的变量，即是全局变量</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在选择器中定义的变量后面增加 “!global”，注意，!global 需添加在分号前，与变量值使用空格分割。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 16px !global<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><blockquote><p>数据类型</p></blockquote><p>Scss 支持以下几种主要的数据类型：</p><ol><li>字符串（ 有引号或无引号的字符串 ）：”foo”, ‘bar’, baz, …</li><li>数字：1, 2.5, 18px, 30%, 9a, …</li><li>颜色：blue, #00ff00, rgba(0, 0, 0, .1)</li><li>布尔型：true, false</li><li>空值：null</li><li>数组 (list)， 用逗号或空格分割：1em 2em 2.5em 或 Helvetica, Arial, sans-serif, …</li><li>maps，相当于 JavaScript 中的 object：key1: value1, key2: value2, …</li></ol><p>判断数据类型的方式: type-of($value)</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$layer-index</span></span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-base-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Open Sans&#39;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$top-bg-color</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$block-base-padding</span></span><span class="token punctuation">:</span> 6px 10px 6px 10px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$blank-mode</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$var</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span> <span class="token comment">//值null是其类型的唯一值。他表示缺少值，通常由函数返回以指示缺少结果</span>
<span class="token property"><span class="token variable">$color-map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">color1</span><span class="token punctuation">:</span> #f00<span class="token punctuation">,</span> <span class="token property">color2</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">,</span> <span class="token property">color3</span><span class="token punctuation">:</span> #00f<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$fonts</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">serif</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token property">monospace</span><span class="token punctuation">:</span> <span class="token string">&quot;Consolas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串-strings" tabindex="-1"><a class="header-anchor" href="#字符串-strings" aria-hidden="true">#</a> 字符串 (Strings)</h3><p>支持有引号的字符串与无引号的字符串，有引号的字符串，无论单引号还是双引号，编译后都为双引号，无引号的字符串编译后同样没有引号。如果一段话由多个单词组成，并且包含空格，需要将引号加上。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$string1</span></span><span class="token punctuation">:</span> <span class="token string">&quot;Sample 1&quot;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$string2</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Sample 2&#39;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$string3</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$string1</span><span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$string2</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$string3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Sample 1&quot;</span><span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Sample 2&quot;</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字-numbers" tabindex="-1"><a class="header-anchor" href="#数字-numbers" aria-hidden="true">#</a> 数字 (Numbers)</h3><ol><li>支持数字或带单位的数字，</li><li>支持整数或小数</li><li>支持正数与负数</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$number1</span></span><span class="token punctuation">:</span> 30<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$number2</span></span><span class="token punctuation">:</span> 6.9<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$number3</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$number4</span></span><span class="token punctuation">:</span> 32a<span class="token punctuation">;</span> <span class="token comment">// 不规范，但不会报错</span>
<span class="token comment">// 注：数字后接的任何字母都会视为单位，单位会和数字当作一个整体进行计算</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色-colors" tabindex="-1"><a class="header-anchor" href="#颜色-colors" aria-hidden="true">#</a> 颜色 (Colors)</h3><p>Css 原有颜色类型，包括十六进制、RGB、RGBA、HSL、HSLA和色彩单词</p><h3 id="布尔型-booleans" tabindex="-1"><a class="header-anchor" href="#布尔型-booleans" aria-hidden="true">#</a> 布尔型 (Booleans)</h3><p>只有两个值 “true” 和 “false”，只有自身是 false 或 null 才会返回 false，其他一切都会返回 true，主要用于逻辑判断。</p><h3 id="空值-null" tabindex="-1"><a class="header-anchor" href="#空值-null" aria-hidden="true">#</a> 空值 (Null)</h3><p>只有一个值 “null”，如 “$name: null;”。由于他为空，因此不能使用它与任何类型进行运算，主要用于逻辑判断。</p><h3 id="数组-lists" tabindex="-1"><a class="header-anchor" href="#数组-lists" aria-hidden="true">#</a> 数组 (Lists)</h3><p>通过空格或半角逗号分割的一系列的值，数组中还可以包含子数组，如下方的 “$list2” 和 “$list3″，当数组被编译为 css 时，圆括号不会被添加</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$list1</span></span><span class="token punctuation">:</span> 1px 2px 3px 4px<span class="token punctuation">;</span> <span class="token comment">//一维数字</span>
<span class="token property"><span class="token variable">$list2</span></span><span class="token punctuation">:</span> 1px 2px<span class="token punctuation">,</span> 3px 4px<span class="token punctuation">;</span> <span class="token comment">//二维数字</span>
<span class="token property"><span class="token variable">$list3</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px 2px<span class="token punctuation">)</span> <span class="token punctuation">(</span>3px 4px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//二维数字</span>
<span class="token comment">// 指定数组中的某个值进行调用</span>
<span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射-maps" tabindex="-1"><a class="header-anchor" href="#映射-maps" aria-hidden="true">#</a> 映射 (Maps)</h3><p>Maps 必须被圆括号包裹，可以映射任何键值对</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">key1</span><span class="token punctuation">:</span> value1<span class="token punctuation">,</span>
  <span class="token property">key2</span><span class="token punctuation">:</span> value2<span class="token punctuation">,</span>
  <span class="token property">key3</span><span class="token punctuation">:</span> value3
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="映射函数" tabindex="-1"><a class="header-anchor" href="#映射函数" aria-hidden="true">#</a> 映射函数</h4><p>返回 Map 中 key 所对应的值( value )。如没有对应的 key，则返回 null 值。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">map-get</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

<span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span>
<span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">)</span>
结果<span class="token punctuation">:</span> 12px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断 map 是否有对应的 key，存在返回 true，否则返回 false</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">map-has-key</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

实例<span class="token punctuation">:</span>
<span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span>
<span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;big&quot;</span><span class="token punctuation">)</span>
结果<span class="token punctuation">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 map 中所有的 key 组成的队列</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">map-keys</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>

实例<span class="token punctuation">:</span>
<span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span>
<span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span>
结果<span class="token punctuation">:</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并两个 map 形成一个新的 map 类型，即将 <em>map2</em> 添加到 <em>map1</em>的尾部</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">map-merge</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> map2<span class="token punctuation">)</span>

实例<span class="token punctuation">:</span>
<span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span>
<span class="token property"><span class="token variable">$font-sizes2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;x-large&quot;</span><span class="token punctuation">:</span> 30px<span class="token punctuation">,</span> <span class="token string">&quot;xx-large&quot;</span><span class="token punctuation">:</span> 36px<span class="token punctuation">)</span>
<span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token variable">$font-sizes2</span><span class="token punctuation">)</span>
结果<span class="token punctuation">:</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">,</span> <span class="token string">&quot;x-large&quot;</span><span class="token punctuation">:</span> 30px<span class="token punctuation">,</span> <span class="token string">&quot;xx-large&quot;</span><span class="token punctuation">:</span> 36px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除 <em>map</em> 中的 keys，多个 key 使用逗号隔开</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">map-remove</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> keys...<span class="token punctuation">)</span>

实例<span class="token punctuation">:</span>
<span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span>
<span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">)</span>
结果<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span>
<span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">)</span>
结果<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <em>map</em> 中所有的 value 并生成一个队列</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">map-values</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>

实例<span class="token punctuation">:</span>
<span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span>
<span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span>
结果<span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> 18px<span class="token punctuation">,</span> 24px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件导入" tabindex="-1"><a class="header-anchor" href="#文件导入" aria-hidden="true">#</a> 文件导入</h2><p>使用 @import 进行文件的导入</p><h3 id="导入-scss-文件" tabindex="-1"><a class="header-anchor" href="#导入-scss-文件" aria-hidden="true">#</a> 导入 .scss 文件</h3><p>导入 .scss 文件的方式，使用 @import ” 进行导入，文件名可以有 .scss 后缀，也可以省略</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 方法1</span>
<span class="token keyword">@import</span> <span class="token string">&#39;main.scss&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 方法2</span>
<span class="token keyword">@import</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：导入的 .scss 文件，由于该文件内的代码会重新在发生导入的文件中生成，所以无需再单独生成一个被导入的文件的 .css 文件，解决的方法是在被导入的文件名前增加一个下划线 “_” 的符号，这样可以保证该文件不会被编译生成 .css 文件，而在导入该文件时，前面的下划线可以写也可以省略：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 以下代码表示将导入一个名为 “_main.scss” 的文件</span>
<span class="token comment">// 方法1</span>
<span class="token keyword">@import</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 方法2</span>
<span class="token keyword">@import</span> <span class="token string">&#39;_main&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入文件同样也可以写入选择器中，写入选择器后，导入的文件中的所有变量将只适用于该选择器，同时导入的文件中的所有选择器前也会增加发生导入的选择器前的名称：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@import</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入普通的-css-文件" tabindex="-1"><a class="header-anchor" href="#导入普通的-css-文件" aria-hidden="true">#</a> 导入普通的 .css 文件</h3><p>以下几种方式，只会将文件作为普通的 css 语句进行引入</p><ol><li>文件拓展名为 .css</li><li>文件名以 http:// 或 https:// 开头</li><li>文件由 url() 的形式引入</li><li>@import 包含 media queries</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&#39;main.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&#39;http://puji.design/main.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&#39;landscape&#39;</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：采用 @import ‘main.css’ 这种形式引入文件，编译后，文件地址将为计算机的绝对地址，这样的引入形式慎用，建议采用 @import url(main) 的方式。</p><h2 id="混合指令" tabindex="-1"><a class="header-anchor" href="#混合指令" aria-hidden="true">#</a> 混合指令</h2><p>混合指令用于定义可重复使用的样式。混合指令可以包含所有的 Css 规则与绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。</p><h3 id="定义与使用混合指令" tabindex="-1"><a class="header-anchor" href="#定义与使用混合指令" aria-hidden="true">#</a> 定义与使用混合指令</h3><p>使用 @mixin 定义混合指令以及使用 @include 进行调用</p><h4 id="基础写法" tabindex="-1"><a class="header-anchor" href="#基础写法" aria-hidden="true">#</a> 基础写法</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token selector">name </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用混合指令</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="混合指令中添加选择器" tabindex="-1"><a class="header-anchor" href="#混合指令中添加选择器" aria-hidden="true">#</a> 混合指令中添加选择器</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token selector">name </span><span class="token punctuation">{</span>
    <span class="token selector">.wrap </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用混合指令</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container .wrap </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="带参数的混合指令" tabindex="-1"><a class="header-anchor" href="#带参数的混合指令" aria-hidden="true">#</a> 带参数的混合指令</h4><p>使用 $name 给参数命名，在调用的时候给参数赋值：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token function">flex-align</span><span class="token punctuation">(</span><span class="token variable">$aligndirect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> <span class="token variable">$aligndirect</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-align-item</span><span class="token punctuation">:</span> <span class="token variable">$aligndirect</span><span class="token punctuation">;</span>
    <span class="token property">-ms-flex-align</span><span class="token punctuation">:</span> <span class="token variable">$aligndirect</span><span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> <span class="token variable">$aligndirect</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用混合指令</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">flex-align</span><span class="token punctuation">(</span>center<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">-webkit-align-item</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">-ms-flex-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数可以写一个也可写多个，参数的数目与顺序需一一对应：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token function">block-padding</span><span class="token punctuation">(</span><span class="token variable">$top</span><span class="token punctuation">,</span> <span class="token variable">$right</span><span class="token punctuation">,</span> <span class="token variable">$bottom</span><span class="token punctuation">,</span> <span class="token variable">$left</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$top</span><span class="token punctuation">,</span> <span class="token variable">$right</span><span class="token punctuation">,</span> <span class="token variable">$bottom</span><span class="token punctuation">,</span> <span class="token variable">$left</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用混合指令</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">block-padding</span><span class="token punctuation">(</span>8px<span class="token punctuation">,</span> 36px<span class="token punctuation">,</span> 12px<span class="token punctuation">,</span> 36px<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px<span class="token punctuation">,</span> 36px<span class="token punctuation">,</span> 12px<span class="token punctuation">,</span> 36px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给指定参数赋值，顺序可随意调整，如以下代码，编译后的 css 也是相同的结果：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token function">block-padding</span><span class="token punctuation">(</span><span class="token variable">$top</span><span class="token punctuation">,</span> <span class="token variable">$right</span><span class="token punctuation">,</span> <span class="token variable">$bottom</span><span class="token punctuation">,</span> <span class="token variable">$left</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$top</span><span class="token punctuation">,</span> <span class="token variable">$right</span><span class="token punctuation">,</span> <span class="token variable">$bottom</span><span class="token punctuation">,</span> <span class="token variable">$left</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用混合指令</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">block-padding</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$right</span></span><span class="token punctuation">:</span>36px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$left</span></span><span class="token punctuation">:</span>36px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$top</span></span><span class="token punctuation">:</span>8px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bottom</span></span><span class="token punctuation">:</span>12px<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给参数添加默认值后，在调用时指定参数，未指定的参数将使用默认值：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token function">block-padding</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$top</span></span><span class="token punctuation">:</span>0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$right</span></span><span class="token punctuation">:</span>0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bottom</span></span><span class="token punctuation">:</span>0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$left</span></span><span class="token punctuation">:</span>0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$top</span><span class="token punctuation">,</span> <span class="token variable">$right</span><span class="token punctuation">,</span> <span class="token variable">$bottom</span><span class="token punctuation">,</span> <span class="token variable">$left</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用混合指令</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">block-padding</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$top</span></span><span class="token punctuation">:</span>8px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bottom</span></span><span class="token punctuation">:</span>12px<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 12px<span class="token punctuation">,</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合指令中的参数可设置为一个数组形式，以 “$name…” 表示：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token comment">// 定义混合指令</span>
<span class="token keyword">@mixin</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token variable">$direction</span><span class="token punctuation">,</span> <span class="token variable">$gradients</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$gradients</span><span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token variable">$direction</span><span class="token punctuation">,</span> <span class="token variable">$gradients</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用混合指令</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f00<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>linear<span class="token punctuation">,</span> left top<span class="token punctuation">,</span> right top<span class="token punctuation">,</span> <span class="token function">from</span><span class="token punctuation">(</span>#f00<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">color-stop</span><span class="token punctuation">(</span>orange<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">to</span><span class="token punctuation">(</span>yellow<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f00<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合指令总结" tabindex="-1"><a class="header-anchor" href="#混合指令总结" aria-hidden="true">#</a> 混合指令总结</h3><ol><li>混合指令 ( @mixin ) 是可以重复使用的一组 Css 声明；</li><li>有助于减少重复代码，只需声明一次就可以在文件中反复引用；</li><li>包含所有 Css 规则以及绝大部分 Sass 规则，甚至通过参数引入变量；</li><li>使用参数时，建议加上默认值。</li></ol><h2 id="继承指令" tabindex="-1"><a class="header-anchor" href="#继承指令" aria-hidden="true">#</a> 继承指令</h2><p>在不同的元素具有完全相同的样式与 Css 属性时，可以使用继承指令实现，继承指令 <code>@extend</code></p><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.alert </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .alert<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>238<span class="token punctuation">,</span> 238<span class="token punctuation">,</span> 238<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>54<span class="token punctuation">,</span> 54<span class="token punctuation">,</span> 54<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-success </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .alert<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>225<span class="token punctuation">,</span> 250<span class="token punctuation">,</span> 242<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>13<span class="token punctuation">,</span> 112<span class="token punctuation">,</span> 79<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-error </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .alert<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>250<span class="token punctuation">,</span> 225<span class="token punctuation">,</span> 225<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>112<span class="token punctuation">,</span> 13<span class="token punctuation">,</span> 18<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.alert, .alert-info, .alert-success, .alert-error </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #363636<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-success </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #e1faf2<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0d704f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-error </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fae1e1<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #700d12<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个选择器中可以实现多个继承的形式，如：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.alert </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.additional </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .alert<span class="token punctuation">;</span>
    <span class="token keyword">@extend</span> .additional<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>238<span class="token punctuation">,</span> 238<span class="token punctuation">,</span> 238<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>54<span class="token punctuation">,</span> 54<span class="token punctuation">,</span> 54<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.alert, .alert-info </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.additional, .alert-info </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #363636<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多层继承形式：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.alert </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.additional </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .alert<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .additional<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>238<span class="token punctuation">,</span> 238<span class="token punctuation">,</span> 238<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>54<span class="token punctuation">,</span> 54<span class="token punctuation">,</span> 54<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.alert, .additional, .alert-info </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.additional, .alert-info </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #363636<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用占位符选择器" tabindex="-1"><a class="header-anchor" href="#使用占位符选择器" aria-hidden="true">#</a> 使用占位符选择器</h3><p>使用占位符选择器的好处，是原始的代码不会在 Css 文件中编译，保持代码的简介干净</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑 // alert编译后不会存在了</span>
<span class="token selector"><span class="token placeholder">%alert</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%alert</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>238<span class="token punctuation">,</span> 238<span class="token punctuation">,</span> 238<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>54<span class="token punctuation">,</span> 54<span class="token punctuation">,</span> 54<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-success </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%alert</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>225<span class="token punctuation">,</span> 250<span class="token punctuation">,</span> 242<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>13<span class="token punctuation">,</span> 112<span class="token punctuation">,</span> 79<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert-error </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%alert</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>250<span class="token punctuation">,</span> 225<span class="token punctuation">,</span> 225<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>112<span class="token punctuation">,</span> 13<span class="token punctuation">,</span> 18<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.alert-info, .alert-success, .alert-error </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #363636<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-success </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #e1faf2<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0d704f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert-error </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fae1e1<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #700d12<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="相等运算符" tabindex="-1"><a class="header-anchor" href="#相等运算符" aria-hidden="true">#</a> 相等运算符</h3><p>所有数据类型都支持等号运算符，等于使用 “==” 表示，不等于使用 “!=” 表示</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$color</span> == 1 </span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$color</span> != &quot;red&quot; </span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系-比较-运算符" tabindex="-1"><a class="header-anchor" href="#关系-比较-运算符" aria-hidden="true">#</a> 关系（比较）运算符</h3><p>关系运算符只支持数字，使用的符号分别是大于号 “&gt;”，小于号 “&lt;“，大于等于号 “&gt;=” 与小于等于号 “&lt;=” ，返回值 “true” 或 “false”，主要应用于条件判断</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span> 1 <span class="token operator">&gt;</span> 2<span class="token punctuation">;</span> <span class="token comment">//false</span>
<span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span> 1 <span class="token operator">&lt;</span> 2<span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span> 1 <span class="token operator">&gt;=</span> 2<span class="token punctuation">;</span> <span class="token comment">//false</span>
<span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span> 1 <span class="token operator">&lt;=</span> 2<span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔运算符" tabindex="-1"><a class="header-anchor" href="#布尔运算符" aria-hidden="true">#</a> 布尔运算符</h3><p>布尔运算符包含三种形式，分别是与 “and”、 或”or”、 非”not”。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$height</span></span><span class="token punctuation">:</span> 200<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$last</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token comment">// 两个条件都满足时</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$width</span> &gt; 50 and <span class="token variable">$height</span> &lt; 300 </span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 任意条件满足时</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$width</span> &gt; 200 or <span class="token variable">$height</span> &lt; 300 </span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断是否为真</span>
    <span class="token keyword">@if</span> <span class="token selector">not <span class="token variable">$last</span> </span><span class="token punctuation">{</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else</span> <span class="token punctuation">{</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字运算符" tabindex="-1"><a class="header-anchor" href="#数字运算符" aria-hidden="true">#</a> 数字运算符</h3><p>数字运算符包含加”+”，减”-“，乘”*”，除”/”与取模”%”，取模即是两个数字相除取余数。</p><h4 id="基本用法-1" tabindex="-1"><a class="header-anchor" href="#基本用法-1" aria-hidden="true">#</a> 基本用法</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 纯数字相加</span>
<span class="token property"><span class="token variable">$plus1</span></span><span class="token punctuation">:</span> 30 <span class="token operator">+</span> 30<span class="token punctuation">;</span> <span class="token comment">//60</span>
<span class="token property"><span class="token variable">$plus2</span></span><span class="token punctuation">:</span> 30px <span class="token operator">+</span> 30<span class="token punctuation">;</span> <span class="token comment">//60px</span>
<span class="token property"><span class="token variable">$plus3</span></span><span class="token punctuation">:</span> 30% <span class="token operator">+</span> 30%<span class="token punctuation">;</span> <span class="token comment">//60%</span>
<span class="token property"><span class="token variable">$plus4</span></span><span class="token punctuation">:</span> 30px <span class="token operator">+</span> 30pt<span class="token punctuation">;</span> <span class="token comment">//70px</span>
<span class="token property"><span class="token variable">$plus5</span></span><span class="token punctuation">:</span> 30px <span class="token operator">+</span> 30pt <span class="token operator">+</span> 30pc<span class="token punctuation">;</span> <span class="token comment">//550px</span>

<span class="token comment">//纯数字相减</span>
<span class="token property"><span class="token variable">$minus1</span></span><span class="token punctuation">:</span> 60 <span class="token operator">-</span> 30<span class="token punctuation">;</span> <span class="token comment">//30</span>
<span class="token property"><span class="token variable">$minus2</span></span><span class="token punctuation">:</span> 60px <span class="token operator">-</span> 30<span class="token punctuation">;</span> <span class="token comment">//30px</span>
<span class="token property"><span class="token variable">$minus3</span></span><span class="token punctuation">:</span> 60% <span class="token operator">-</span> 30%<span class="token punctuation">;</span> <span class="token comment">//30%</span>
<span class="token property"><span class="token variable">$minus4</span></span><span class="token punctuation">:</span> 60px <span class="token operator">-</span> 30pt<span class="token punctuation">;</span> <span class="token comment">//20px</span>
<span class="token property"><span class="token variable">$minus5</span></span><span class="token punctuation">:</span> 60px <span class="token operator">-</span> 30pt <span class="token operator">-</span> 30pc<span class="token punctuation">;</span> <span class="token comment">//-460px</span>

<span class="token comment">//纯数字相乘</span>
<span class="token property"><span class="token variable">$multipl1</span></span><span class="token punctuation">:</span> 60 <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//1800</span>
<span class="token property"><span class="token variable">$multipl2</span></span><span class="token punctuation">:</span> 60px <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//1800px</span>
<span class="token property"><span class="token variable">$multipl3</span></span><span class="token punctuation">:</span> 60% <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//1800%</span>
<span class="token property"><span class="token variable">$multipl4</span></span><span class="token punctuation">:</span> 60px <span class="token operator">*</span> 30 <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//54000px</span>

<span class="token comment">//纯数字相除</span>
<span class="token property"><span class="token variable">$division1</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60 <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span>
<span class="token property"><span class="token variable">$division2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2px</span>
<span class="token property"><span class="token variable">$division3</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60% <span class="token operator">/</span> 30%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span>
<span class="token property"><span class="token variable">$division4</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30pt<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1.5</span>
<span class="token property"><span class="token variable">$division5</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30 <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0.06667px</span>

<span class="token comment">//纯数字取模</span>
<span class="token property"><span class="token variable">$modulo1</span></span><span class="token punctuation">:</span> 60 <span class="token operator">%</span> 9<span class="token punctuation">;</span> <span class="token comment">//6</span>
<span class="token property"><span class="token variable">$modulo2</span></span><span class="token punctuation">:</span> 60px <span class="token operator">%</span> 9<span class="token punctuation">;</span> <span class="token comment">//6px</span>
<span class="token property"><span class="token variable">$modulo3</span></span><span class="token punctuation">:</span> 60% <span class="token operator">%</span> 9%<span class="token punctuation">;</span> <span class="token comment">//6%</span>
<span class="token property"><span class="token variable">$modulo4</span></span><span class="token punctuation">:</span> 60px <span class="token operator">%</span> 9pt<span class="token punctuation">;</span> <span class="token comment">//0px</span>
<span class="token property"><span class="token variable">$modulo5</span></span><span class="token punctuation">:</span> 60px <span class="token operator">%</span> 9 <span class="token operator">%</span> 5<span class="token punctuation">;</span> <span class="token comment">//1px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="混合用法" tabindex="-1"><a class="header-anchor" href="#混合用法" aria-hidden="true">#</a> 混合用法</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 数字，字符串相加</span>
<span class="token property"><span class="token variable">$plus1</span></span><span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">//ab</span>
<span class="token property"><span class="token variable">$plus2</span></span><span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span> <span class="token comment">//&quot;ab&quot;</span>
<span class="token property"><span class="token variable">$plus3</span></span><span class="token punctuation">:</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span> <span class="token comment">//&quot;ab&quot;</span>
<span class="token property"><span class="token variable">$plus4</span></span><span class="token punctuation">:</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">//&quot;ab&quot;</span>
<span class="token property"><span class="token variable">$plus5</span></span><span class="token punctuation">:</span> a <span class="token operator">+</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span> <span class="token comment">//ab</span>
<span class="token property"><span class="token variable">$plus6</span></span><span class="token punctuation">:</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">+</span> 1<span class="token punctuation">;</span> <span class="token comment">//&quot;a1&quot;</span>
<span class="token property"><span class="token variable">$plus7</span></span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">;</span> <span class="token comment">//&quot;1a&quot;</span>

<span class="token comment">// 数字，字符串相减</span>
<span class="token property"><span class="token variable">$minus1</span></span><span class="token punctuation">:</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span> <span class="token comment">//a-b</span>
<span class="token property"><span class="token variable">$minus2</span></span><span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">-</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span> <span class="token comment">//&quot;a&quot;-&quot;b&quot;</span>
<span class="token property"><span class="token variable">$minus3</span></span><span class="token punctuation">:</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">-</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span> <span class="token comment">//&quot;a&quot;-&quot;b&quot;</span>
<span class="token property"><span class="token variable">$minus4</span></span><span class="token punctuation">:</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">-</span> b<span class="token punctuation">;</span> <span class="token comment">//&quot;a&quot;-b</span>
<span class="token property"><span class="token variable">$minus5</span></span><span class="token punctuation">:</span> a <span class="token operator">-</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span> <span class="token comment">//a-&quot;b&quot;</span>
<span class="token property"><span class="token variable">$minus6</span></span><span class="token punctuation">:</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span> <span class="token comment">//&quot;a&quot;-1</span>
<span class="token property"><span class="token variable">$minus7</span></span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">-</span> a<span class="token punctuation">;</span> <span class="token comment">//&quot;1&quot;-a</span>
<span class="token property"><span class="token variable">$minus8</span></span><span class="token punctuation">:</span> 1 <span class="token operator">-</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">//1-&quot;a&quot;</span>

<span class="token comment">// 数字无法与纯字符串相乘</span>

<span class="token comment">// 数字无法与纯字符串相除</span>

<span class="token comment">// 数字无法与纯字符串取模</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>字符串相加时，如果前面一个值带引号，计算的结果同样带引号，反之；</li><li>数字与字符串混合相加时，第一位有引号或第一位是数字，且后最后一位有引号时，结果必定有引号</li></ol><h4 id="除法运算情景" tabindex="-1"><a class="header-anchor" href="#除法运算情景" aria-hidden="true">#</a> 除法运算情景</h4><p>如果直接在值之间使用 “/” ，不可被视为除法运算，仅当一下三种情况时会以除法进行运算：</p><ol><li>如果值或值的一部分是变量或函数的返回值</li><li>如果值被圆括号包裹</li><li>如果值是算数表达式的一部分</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">//使用变量</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$number</span></span><span class="token punctuation">:</span> 10<span class="token punctuation">)</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">//使用函数</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>500px <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//使用圆括号</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px <span class="token operator">+</span> 8/2<span class="token punctuation">;</span> <span class="token comment">//使用了+表达式</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="规则总结" tabindex="-1"><a class="header-anchor" href="#规则总结" aria-hidden="true">#</a> 规则总结</h4><ol><li>运算符号与值之间建议使用空格隔开；</li><li>数字可以只声明其中一个符号或单位，计算的结果将以声明的符号或单位进行编译，声明单位或符号时，<strong>建议在第一个数字上进行声明</strong>；</li><li>当不同符号且符号之间不可以进行换算时，无法计算出结果，如 20px + 10%无计算，”px” + “pt” 则可进行计算；</li><li>当不同单位进行运算，结果会显示以运算公式开头的数字设置的单位；</li><li>在乘法运算时，只需为一个数字声明单位，为多个数字声明同样或不同的单位都会报错；</li><li>在除法运算时，如需声明单位，单位建议标注在除号前面的值；</li><li>书写公式时，建议将所有公式都使用圆括号包裹。</li></ol><h4 id="书写建议示范" tabindex="-1"><a class="header-anchor" href="#书写建议示范" aria-hidden="true">#</a> 书写建议示范</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.plus </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>30 <span class="token operator">+</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>30% <span class="token operator">+</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>30px <span class="token operator">+</span> 30pt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>30px <span class="token operator">+</span> 30pt <span class="token operator">+</span> 30pc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.minus </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60 <span class="token operator">-</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60% <span class="token operator">-</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">-</span> 30pt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">-</span> 30pt <span class="token operator">-</span> 30pc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.multipl </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60 <span class="token operator">*</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60% <span class="token operator">*</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">*</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">*</span> 30 <span class="token operator">*</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.division </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60 <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60% <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30pt <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.modulo </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60 <span class="token operator">%</span> 9<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60% <span class="token operator">%</span> 9<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 60% <span class="token operator">%</span> 9%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 60px <span class="token operator">%</span> 6pt <span class="token operator">%</span> 0.12<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.plus </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 550px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.minus </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> -460px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.multipl </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1800<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1800%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1800px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 54000px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.division </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0.05<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.modulo </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0.04px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串运算" tabindex="-1"><a class="header-anchor" href="#字符串运算" aria-hidden="true">#</a> 字符串运算</h3><p>使用加号”+” 可连接字符串，如字符串前面带引号后面不带，编译出的结果会带引号，反之。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Foo&quot;</span> <span class="token operator">+</span> bar<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> sans- <span class="token operator">+</span> <span class="token string">&quot;serif&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Foobar&quot;</span><span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插值语句" tabindex="-1"><a class="header-anchor" href="#插值语句" aria-hidden="true">#</a> 插值语句</h2><p>常使用于选择器、属性名、属性值、注释等地。如下示例，<code>font: #{$font-size}/#{$line-height} Helvetica</code>当两个变量使用 “/” 时，程序会自动运算出值，如使用插值语句，则可避免运算出结果</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 代码编辑</span>
<span class="token property"><span class="token variable">$author</span></span><span class="token punctuation">:</span> <span class="token string">&#39;PUJI Design&#39;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$class-name</span></span><span class="token punctuation">:</span> danger<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height</span></span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>

<span class="token comment">/*
 * 插值语句示例
 * @author: #{$author} */</span>
<span class="token selector">a.<span class="token variable">#{$class-name}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> <span class="token variable">#{$font-size}</span>/<span class="token variable">#{$line-height}</span> Helvetica<span class="token punctuation">;</span>
    <span class="token property">font-<span class="token variable">#{$attr}</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后的 css</span>
<span class="token comment">/*
 * 插值语句示例
 * @author: PUJI Design */</span>
<span class="token selector">a.danger </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 16px/30px Helvetica<span class="token punctuation">;</span>
  <span class="token property">font-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些指令" tabindex="-1"><a class="header-anchor" href="#一些指令" aria-hidden="true">#</a> 一些指令</h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> @if</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">triangle</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$direction</span></span><span class="token punctuation">:</span> top<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span> 30px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> black<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token property">border-<span class="token variable">#{$direction}</span>-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

  <span class="token keyword">@if</span> <span class="token punctuation">(</span><span class="token variable">$direction</span>==top<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent <span class="token variable">$border-color</span> transparent<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> dashed dashed solid dashed<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">@else if</span> <span class="token punctuation">(</span><span class="token variable">$direction</span>==right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent transparent <span class="token variable">$border-color</span><span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> dashed dashed dashed solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">@else if</span> <span class="token punctuation">(</span><span class="token variable">$direction</span>==bottom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$border-color</span> transparent transparent transparent<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid dashed dashed dashed<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">@else if</span> <span class="token punctuation">(</span><span class="token variable">$direction</span>==left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent <span class="token variable">$border-color</span> transparent transparent<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> dashed solid dashed dashed<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> @for</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 1-3</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 4 </span><span class="token punctuation">{</span>
  <span class="token selector">.p<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1epx*<span class="token variable">$i</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//  1-4</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">4 </span><span class="token punctuation">{</span>
  <span class="token selector">.p<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1epx <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="each" tabindex="-1"><a class="header-anchor" href="#each" aria-hidden="true">#</a> @each</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color-list</span></span><span class="token punctuation">:</span> red blue orange<span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$color</span> in <span class="token variable">$color-list</span> </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$index</span></span><span class="token punctuation">:</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token variable">$color-list</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  .p#<span class="token punctuation">{</span><span class="token variable">$index</span> <span class="token operator">-</span> 1<span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// css</span>
<span class="token selector">.p0 </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p1 </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p2 </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> @while</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$column</span></span><span class="token punctuation">:</span> 12<span class="token punctuation">;</span>

<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$column</span> &gt;0 </span><span class="token punctuation">{</span>
  <span class="token selector">.col-sm-<span class="token variable">#{$column}</span> </span><span class="token punctuation">{</span>
    <span class="token comment">//width: $column / 12 * 100%;</span>
    <span class="token comment">//width: $column / 12 * 100 + %; //会标红</span>
    <span class="token comment">//width: $column / 12 * 100#{&#39;%&#39;};</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">unquote</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$string</span></span><span class="token punctuation">:</span> <span class="token variable">$column</span> <span class="token operator">/</span> 12 <span class="token operator">*</span> 100 <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token property"><span class="token variable">$column</span></span><span class="token punctuation">:</span> <span class="token variable">$column</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> @function</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/**
  *定义线性渐变
  *@param $direction方向
  *@param sgradients颜色过度的值列表
  */</span>
<span class="token keyword">@function</span> <span class="token function">background-linear-gradient</span><span class="token punctuation">(</span><span class="token variable">$direction</span><span class="token punctuation">,</span> <span class="token variable">$gradients</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token variable">$direction</span><span class="token punctuation">,</span> <span class="token variable">$gradients</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">background-linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> Oblue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混入mixin和函数function的区别</p><ul><li>混入mixin主要是通过传递参数的方式输出多样化的样式，为了可以现实代码复用。</li><li>函数的功能主要是通过传递参数后，经过函数内部的计算，最后@return输出一个值。</li></ul><blockquote><p>三元条件if函数的使用</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> light<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token variable">$theme</span> <span class="token operator">==</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> #000<span class="token punctuation">,</span> #FFF<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> @use</h3><p>从其他Sass样式表加载mixin ，function和变量，并将来自多个样式表的CSS组合在一起，@use加载的样式表被称为&quot;模块”，多次引入只包含一次。@use也可以看作是对@import的增强</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;uses/common&quot;</span> <span class="token punctuation">;</span>
<span class="token keyword">@use</span> <span class="token string">&quot;uses/global&quot;</span> <span class="token module-modifier keyword">as</span> g1<span class="token punctuation">;</span>
<span class="token keyword">@use</span> <span class="token string">&quot;uses/global&quot;</span> <span class="token module-modifier keyword">as</span> g2<span class="token punctuation">;</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> common.<span class="token variable">$font-size</span><span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> common.<span class="token function">column-width</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 12<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">@include</span> common.<span class="token function">bgcolor</span><span class="token punctuation">(</span>#F08<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">@include</span> g1.<span class="token function">base</span><span class="token punctuation">(</span>#Fe0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">@include</span> g2.<span class="token function">base</span><span class="token punctuation">(</span>#ee0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@use引入同一个文件多次，不会重复引入，而@import会重复引入</li><li>@use引入的文件都是一个模块默认以文件名作为模块名，可通过as alias取别名</li><li>@use引入多个文件时，每个文件都是单独的模块，相同变量名不会覆盖，通过模块名访问，而@import变量会被覆盖</li><li>@use方式可通过@use &#39;xxx&#39; as * 来取消命名空间，建议不要这么做</li><li>@use模块内可通过<code>$-</code>来定义私有成员，也就是说或者<code>-</code>开头的Variables mixins functions不会被引入</li><li>@use模块内变是可通过! default定义默认值，引入时可通用with (...）的方式修改</li><li>可定义-index.scss或_index.scss来合并多个scss文件，它@use默认加载文件</li></ul>`,176),c=[t];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","sass.html.vue"]]);export{r as default};

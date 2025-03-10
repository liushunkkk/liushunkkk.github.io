import{_ as n,o as a,c as s,a as e}from"./app-2cd98865.js";const t={},p=e(`<h1 id="base-usage" tabindex="-1"><a class="header-anchor" href="#base-usage" aria-hidden="true">#</a> Base Usage</h1><h2 id="numpy" tabindex="-1"><a class="header-anchor" href="#numpy" aria-hidden="true">#</a> numpy</h2><h3 id="统计个数" tabindex="-1"><a class="header-anchor" href="#统计个数" aria-hidden="true">#</a> 统计个数</h3><p>将ndarray与标量值进行比较将返回以布尔值（True，False）作为元素的ndarray。可以将&lt;，==，！=等进行比较。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">#[[ 0  1  2  3]</span>
<span class="token comment">#[ 4  5  6  7]</span>
<span class="token comment">#[ 8  9 10 11]]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">#[[ True  True  True  True]</span>
<span class="token comment">#[False False False False]</span>
<span class="token comment">#[False False False False]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用np.count_nonzero()获得True的数量，即满足条件的元素的数量</p><p>print(np.count_nonzero(a &lt; 4)) # 5</p><p>True 被视为 1，False 被视为 0，因此也可以使用 np.sum()。然而， np.count_nonzero() 更快。</p><p>print(np.sum(a &lt; 4))</p><h2 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> other</h2><h3 id="sorted" tabindex="-1"><a class="header-anchor" href="#sorted" aria-hidden="true">#</a> sorted</h3><p><code>sorted([&#39;89&#39;, &#39;78&#39;], key=len)</code>的排序结果中，&#39;89&#39;在前面是因为<code>key=len</code>参数指定了按照字符串的长度来进行排序，而&#39;89&#39;的长度为2，而&#39;78&#39;的长度为2，因此它们的长度相等。在这种情况下，按照<strong>原始顺序</strong>进行排序，因此&#39;89&#39;在&#39;78&#39;之前。</p><p>如果你想按照字符串的大小来进行排序，而不是长度，可以省略<code>key=len</code>，因为字符串默认会按照字典顺序进行比较，即按照字符的ASCII码值进行比较。这样，&#39;78&#39;会在&#39;89&#39;之前。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;89&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;78&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将按照字符串的大小进行排序，而不是长度。</p><p>这种数字字符串，最好转换为数字在排序（这个在ubuntu和windows文件排序上有差别，有坑-_-）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;89&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;78&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="向下取整" tabindex="-1"><a class="header-anchor" href="#向下取整" aria-hidden="true">#</a> 向下取整</h3><p>在 Python 中，可以使用 <code>math.floor()</code> 函数或者 <code>int()</code> 类型转换来实现向下取整操作。以下是这两种方法的示例：</p><ol><li>使用 <code>math.floor()</code> 函数：</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math

value <span class="token operator">=</span> <span class="token number">7.8</span>
result <span class="token operator">=</span> math<span class="token punctuation">.</span>floor<span class="token punctuation">(</span>value<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出：7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 <code>int()</code> 类型转换：</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>value <span class="token operator">=</span> <span class="token number">7.8</span>
result <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出：7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方法都会将浮点数向下取整到最接近的整数。</p><h3 id="字符串转数组" tabindex="-1"><a class="header-anchor" href="#字符串转数组" aria-hidden="true">#</a> 字符串转数组</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&#39;[1, 2, 3]&#39;</span>
x <span class="token operator">=</span> ast<span class="token punctuation">.</span>literal_eval<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token comment"># x = [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[p];function l(c,i){return a(),s("div",null,o)}const u=n(t,[["render",l],["__file","base_usage.html.vue"]]);export{u as default};

import{_ as n,o as s,c as a,a as e}from"./app-2cd98865.js";const t={},p=e(`<h1 id="leetcode菜鸡啃题" tabindex="-1"><a class="header-anchor" href="#leetcode菜鸡啃题" aria-hidden="true">#</a> leetcode菜鸡啃题</h1><h2 id="_1-只出现一次数字" tabindex="-1"><a class="header-anchor" href="#_1-只出现一次数字" aria-hidden="true">#</a> 1 只出现一次数字</h2><p>给定一个<strong>非空</strong>整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</p><blockquote><p>菜狗思路</p></blockquote><p>搞个set，如果已经存在删掉，不存在就加进去，最后剩下的就是单独的那个</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            set<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> set<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>大佬思路</p></blockquote><p>使用位运算的异或</p><p>自己与自己异或为0，任何数与0异或的自己，异或满足交换律和集合律，所以直接对整个数组进行异或，即可得到最终的结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> single <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        single <span class="token operator">^=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> single<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-多数元素" tabindex="-1"><a class="header-anchor" href="#_2-多数元素" aria-hidden="true">#</a> 2 多数元素</h2><p>给定一个大小为 <code>n</code> 的数组 <code>nums</code> ，返回其中的多数元素。多数元素是指在数组中出现次数 <strong>大于</strong> <code>⌊ n/2 ⌋</code> 的元素。</p><blockquote><p>菜狗思路</p></blockquote><p>仍然只能想到用hashMap，记录次数，然后找记录最多的那个数</p><blockquote><p>大佬思路</p></blockquote><p>1、直接排序，找下标大于等于<code>n/2</code>的数即可，众数的下标总大于等于<code>n/2</code></p><p>2、分治算法，整个数组的众数一定是左右两边的众数中的一个，所以可以不断分支，知道子数组长度为一，一定是众数，之后回溯的时候，只需要判断左右两边的众数那个居多即可，时间O*(<em>n</em>logn)，空间O(logn)。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">countInRange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">,</span> <span class="token keyword">int</span> lo<span class="token punctuation">,</span> <span class="token keyword">int</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> lo<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> hi<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">majorityElementRec</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> lo<span class="token punctuation">,</span> <span class="token keyword">int</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lo <span class="token operator">==</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nums<span class="token punctuation">[</span>lo<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>hi <span class="token operator">-</span> lo<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> lo<span class="token punctuation">;</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token function">majorityElementRec</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> lo<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token function">majorityElementRec</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> hi<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> leftCount <span class="token operator">=</span> <span class="token function">countInRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> left<span class="token punctuation">,</span> lo<span class="token punctuation">,</span> hi<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightCount <span class="token operator">=</span> <span class="token function">countInRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> right<span class="token punctuation">,</span> lo<span class="token punctuation">,</span> hi<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> leftCount <span class="token operator">&gt;</span> rightCount <span class="token operator">?</span> left <span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">majorityElementRec</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、Boyer-Moore 投票算法，只能说很牛逼，线性时间，常数空间</p><ul><li><p>维护一个候选众数 candidate 和它出现的次数 count。初始时 candidate 可以为任意值，count 为 0；</p></li><li><p>我们遍历数组 nums 中的所有元素，对于每个元素 x，在判断 x 之前，如果 count 的值为 0，我们先将 x 的值赋予 candidate，随后我们判断 x：</p><ul><li><p>如果 x 与 candidate 相等，那么计数器 count 的值增加 1；</p></li><li><p>如果 x 与 candidate 不等，那么计数器 count 的值减少 1。</p></li></ul></li><li><p>在遍历完成后，candidate 即为整个数组的众数。</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> candidate <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            candidate <span class="token operator">=</span> num<span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> candidate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                count<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> candidate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-三数之和-梦破碎的地方" tabindex="-1"><a class="header-anchor" href="#_3-三数之和-梦破碎的地方" aria-hidden="true">#</a> 3 三数之和-梦破碎的地方</h2><p>给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。</p><blockquote><p>菜鸡做法：</p></blockquote><p>先排序，然后用双重循环，其中使用hashMap和hashSet辅助查找和判断是否重复，老复杂了，需要处理的细节很多</p><blockquote><p>大佬做法</p></blockquote><p>使用双指针，再第二重循环的时候使用双指针，从两头往中间靠，防止重复</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// 确定一个然后双指针</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 剪枝</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token comment">// 对nums[i]进行去重</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 分为三类,每次根据sum与0关系移动l或者r一次</span>
            <span class="token keyword">int</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// sum太小:左指针右移使得变大</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> l<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> r<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 加入结果</span>
                res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 去重:l与r均需移动到跟当前位不一样的数字上</span>
                <span class="token keyword">int</span> tmpL <span class="token operator">=</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> tmpR <span class="token operator">=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">==</span> tmpL<span class="token punctuation">)</span> l<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">==</span> tmpR<span class="token punctuation">)</span> r<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面还是使用c++语言</p><h2 id="_4-第k大整数" tabindex="-1"><a class="header-anchor" href="#_4-第k大整数" aria-hidden="true">#</a> 4 第K大整数</h2><p>给你一个字符串数组 nums 和一个整数 k 。nums 中的每个字符串都表示一个不含前导零的整数。</p><p>返回 nums 中表示第 k 大整数的字符串。</p><p>注意：重复的数字在统计时会视为不同元素考虑。例如，如果 nums 是 [&quot;1&quot;,&quot;2&quot;,&quot;2&quot;]，那么 &quot;2&quot; 是最大的整数，&quot;2&quot; 是第二大的整数，&quot;1&quot; 是第三大的整数。</p><blockquote><p>这里考察自定义排序规则</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>string kthLargestNumber(vector&lt;string&gt;&amp; nums, int k) {
    // 自定义比较函数，在 s1 对应的整数较大时返回 true，反之返回 false
    auto cmp = [](const string&amp; s1, const string&amp; s2) -&gt; bool{
        // 首先比较字符串长度
        if (s1.size() &gt; s2.size()){
            return true;
        }
        else if (s1.size() &lt; s2.size()){
            return false;
        }
        else{
            // 长度相等时比较字符串字典序大小
            return s1 &gt; s2;
        }
    };

    sort(nums.begin(), nums.end(), cmp);
    return nums[k-1];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我感觉这样直接排序时间复杂度是不是太大了，可以先进行一部分删选然后在排序</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>string kthLargestNumber(vector&lt;string&gt;&amp; nums, int k) {
    // 先确定他在哪个长度区间，然后在进行排序
	int a[100] = {0};
	for(int i=0; i&lt;nums.size(); i++) {
		a[nums[i].length() - 1]++;
	}
	int j=99;
	for(; j&gt;=0; j--) {
		if(k &gt; a[j])
			k = k - a[j];
		else
			break;
	}
	for(vector&lt;string&gt;::iterator iter=nums.begin(); iter != nums.end(); iter++) {
		if((*iter).length() != j+1) {
			nums.erase(iter);
			iter--;
		}
	}
	sort(nums.begin(), nums.end());
	return nums[nums.size() - k];	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1比特与2比特字符" tabindex="-1"><a class="header-anchor" href="#_5-1比特与2比特字符" aria-hidden="true">#</a> 5 1比特与2比特字符</h2><p>有两种特殊字符：</p><p>第一种字符可以用一比特 0 表示 第二种字符可以用两比特（10 或 11）表示 给你一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一个一比特字符，则返回 true 。</p><p>这个比较简单，只需要正向遍历数组（注意终止条件），如果是1开头就前进两位，否则前进一位，只需要注意一下最后停的位置是不是数组末端</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool isOneBitCharacter(vector&lt;int&gt;&amp; bits) {
	int i = 0;
	for(; i&lt;bits.size() - 1; i++) {
		if(bits[i] == 1) {
			i+=1;
		}
	}
	return i == bits.size() - 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-二叉搜索树中的中序后继" tabindex="-1"><a class="header-anchor" href="#_6-二叉搜索树中的中序后继" aria-hidden="true">#</a> 6 二叉搜索树中的中序后继</h2><p>给定一棵二叉搜索树和其中的一个节点p，找到该节点在树中的中序后继。如果节点没有中序后继，请返回null。</p><p>节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。</p><blockquote><p>做法一，就按照中序遍历方式，记录节点p出现的位置，找到该位置的下一个节点即可</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
    stack&lt;TreeNode*&gt; tree;
    set&lt;int&gt; value;
    tree.push(root);
    value.insert(root-&gt;val); // 记录是否访问过
    TreeNode* temp;
    bool prev = false;
    while(!tree.empty()) {
    	temp = tree.top();
		if(temp-&gt;left != NULL &amp;&amp; value.find(temp-&gt;val) == value.end()) {
			tree.push(temp-&gt;left);
		} else {
			if(prev) {
				return temp;
			}
            value.insert(temp-&gt;val);
			tree.pop();
			if(temp-&gt;val == p-&gt;val) {
				prev = true;
			}
			if(temp-&gt;right != NULL) {
				tree.push(temp-&gt;right);
			}
		}
	}
	return NULL;
}
// 自己写的代码，还需要有一个额外的set来记录是否访问，官方给的就用了一种方法，奇妙的解决了这种问题
TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
    stack&lt;TreeNode*&gt; st;
    TreeNode *prev = nullptr, *curr = root;
    while (!st.empty() || curr != nullptr) {
        while (curr != nullptr) {
            st.emplace(curr);
            curr = curr-&gt;left;
        }
        curr = st.top();
        st.pop();
        if (prev == p) {
            return curr;
        }
        prev = curr;
        curr = curr-&gt;right;  // 每次直接将当前节点赋值为右子节点，然后先循环，z取top
    }
    return nullptr;
}
// 人傻了，中序遍历不需要记录是否已访问，菜狗
void inOrder(BiTree T) {
    InitStack(S);
    BiTree p = T;
    while(p || !IsEmpty(S)) {
        if(p) {
            Push(S, p);
            p = p-&gt;lchild;
        } else {
            Pop(S, p);
            visit(p);
            p = p-&gt;rchild;
        }
    }
}
/*
1.沿着根的左孩子，依次入栈，直到左孩子为空，说明已找到可以输出的结点
2.栈顶元素出栈并访问:若其右孩子为空，继续执行2;若其右孩子不空，将右子树转执行1
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>做法二，利用二叉搜索树的性质</p></blockquote><p>如果他有右子树，就找右子树的最左孩子</p><p>如果没有右子树，就利用二叉搜索树的性质，后继节点一定是值比他大的节点，或者为NULL，</p><p>所以不断的二分比较就行了，知道比较到空节点，这里需要注意的是，只有节点大于的时候，才保存这个successor（这里好难理解，菜狗），其实就是记录大于他的节点中的最小的哪个，所以才需要只有大于的时候才更新节点。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
    TreeNode *successor = nullptr;
    if (p-&gt;right != nullptr) {
        successor = p-&gt;right;
        while (successor-&gt;left != nullptr) {
            successor = successor-&gt;left;
        }
        return successor;
    }
    TreeNode *node = root;
    while (node != nullptr) {
        if (node-&gt;val &gt; p-&gt;val) {
            successor = node;
            node = node-&gt;left;
        } else {
            node = node-&gt;right;
        }
    }
    return successor;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-第n位数字" tabindex="-1"><a class="header-anchor" href="#_7-第n位数字" aria-hidden="true">#</a> 7 第N位数字</h2><p>给你一个整数 <code>n</code> ，请你在无限的整数序列 <code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...]</code> 中找出并返回第 <code>n</code> 位上的数字。比如11，结果是0。</p><blockquote><p>做法</p></blockquote><p>先找到他是所属的位置是多少位的，然后再进一步细分它属于哪个数字，然后再提取出对应的位置的数字</p><p>一位数字1-9 共9个，二位数字10-99共99个，三位数字100-999共900个，于是可以找到规律，不断地进行减法，便可以确定他所属的位置是多少位的，也就是处于那一组。</p><p>然后再对位数作除法，便可以知道他是这一组中的第几个数字</p><p>最后就是简单的提取某一位的数字</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int findNthDigit(int n) {
	// int型不够 
	long x = 1, curr = 9, pre = 0, pos = 9;
	if(n &lt;= 9) {
		return n;
	}
    // 不断做减法，直到到达瓶颈
	while(n &gt; curr) {
		x++;
		pre = curr;
		pos = pos * 10;
		curr = pos * x;
		n -= pre;
	}
    // 确定第几个数字
	int div, res, result;
	div = n / x - 1;
	res = n % x;
	div += res == 0 ? pow(10, x - 1) : 1 + pow(10, x - 1); 
	res = res == 0 ? res + 1 : x - res + 1;
    // 提取数字
	while(res &gt;= 1) {
		result = div % 10;
		div /= 10;
		res--;
	}
	return result;
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),i=[p];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","leetcode.html.vue"]]);export{r as default};

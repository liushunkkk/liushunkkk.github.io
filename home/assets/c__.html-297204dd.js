import{_ as i,o as e,c as n,a as l}from"./app-5c92448a.js";const s={},d=l(`<h1 id="c-用法" tabindex="-1"><a class="header-anchor" href="#c-用法" aria-hidden="true">#</a> c++用法</h1><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h2><p>C++ 中 map 提供的是一种键值对容器，里面的数据都是成对出现的：每一对中的第一个值称之为关键字(key)，每个关键字只能在 map 中出现一次；第二个称之为该关键字的对应值。</p><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;map&gt; // STL头文件没有扩展名.h

map&lt;int, string&gt; person;

// 键和值分别通过first和second访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 插入
person.insert(pair&lt;int,string&gt; (1,&quot;Jim&quot;));
person.insert(map&lt;int, string&gt;::value_type (2, &quot;Tom&quot;));
mapPerson[3] = &quot;Jerry&quot;;  // 直接以数组的方式，键就是3，类似于js的方式
// 注意重复插入不会进行替换,而是保留第一个的值

// 删除
iterator erase(iterator it); //通过一个条目对象删除
iterator erase(iterator first，iterator last)；	//删除一个范围
size_type erase(const Key&amp;key);	//通过关键字删除
clear()；//就相当于enumMap.erase(enumMap.begin(),enumMap.end());
    
// 查找
// find() 函数返回一个迭代器指向键值为 key 的元素，如果没找到就返回指向 map 尾部的迭代器。  
map&lt;int ,string &gt; ::iterator l_it;
l_it = maplive.find(112);
if(l_it == maplive.end())
	cout&lt;&lt;&quot;we do not find it&quot;&lt;&lt;endl;
else cout&lt;&lt;&quot;wo find it&quot;&lt;&lt;endl;

// 迭代
// 前向迭代器
map&lt;int, string&gt; ::iterator it;
    map&lt;int, string &gt; ::iterator itEnd;
    it = mapPerson.begin();
    itEnd = mapPerson.end();
    while (it != itEnd) {
	cout&lt;&lt;it-&gt;first&lt;&lt;&#39; &#39;&lt;&lt;it-&gt;second&lt;&lt;endl;  
	it++;
}
// 反向迭代器
map &lt;int, string&gt; ::reverse_iterator iter;  
for(iter = mapPerson.rbegin(); iter != mapPerson.rend(); iter++) 
	cout&lt;&lt;iter-&gt;first&lt;&lt;&quot; &quot;&lt;&lt;iter-&gt;second&lt;&lt;endl;

// swap交换,这是两个容器的交换
map&lt;int, int&gt; m1, m2;
ma.swap(m2);

// 大小和空
ma.size();
bool isEmpty = ma.empty();

// Map 中的元素是自动按 key 升序排序,所以不能对 map 用 sort 函数,他也没有这个函数api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例问题" tabindex="-1"><a class="header-anchor" href="#实例问题" aria-hidden="true">#</a> 实例问题</h3><p>给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) &lt;= k 。如果存在，返回 true ；否则，返回 false 。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 使用map,从头开始遍历,每次查看map中是不是已经存在该元素,如果存在,就判断下标符不符合规范,符合则返回true,否则更新下标,继续往后遍历
bool containsNearbyDuplicate(vector&lt;int&gt;&amp; nums, int k) {
	map&lt;int, int&gt; resMap;
	map&lt;int, int&gt; ::iterator it;
	for(int i=0; i &lt; nums.size(); i++) {
		it = resMap.find(nums[i]);
		if(it == resMap.end()) {
			resMap.insert(pair&lt;int, int&gt;(nums[i], i));
		} else {
			if(abs(it-&gt;second - i) &lt;= k) {
				return true;
			} else {
				resMap.erase(it);
				resMap.insert(pair&lt;int, int&gt;(nums[i], i));
			}
		}
	}
	return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> vector</h2><p>C++ STL中的verctor好比是C语言中的数组，但是vector又具有数组没有的一些高级功能。与数组相比，vector就是一个可以不用在初始化指定大小的变长数组。</p><h3 id="创建-1" tabindex="-1"><a class="header-anchor" href="#创建-1" aria-hidden="true">#</a> 创建</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;vector&gt;

vector&lt;int&gt; v1;
vector&lt;string&gt; v3;
vector&lt;vector&lt;int&gt; &gt;;  //注意空格。这里相当于二维数组int a[n][n];
vector&lt;int&gt; v5 = { 1,2,3,4,5 }; //列表初始化,注意使用的是花括号
vector&lt;string&gt; v6 = { &quot;hi&quot;,&quot;my&quot;,&quot;name&quot;,&quot;is&quot;,&quot;lee&quot; };
vector&lt;int&gt; v7(5, -1); //初始化为-1,-1,-1,-1,-1。第一个参数是数目，第二个参数是要初始化的值
vector&lt;string&gt; v8(3, &quot;hi&quot;);
vector&lt;int&gt; v9(10); //默认初始化为0
vector&lt;int&gt; v10(4); //默认初始化为空字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作-1" tabindex="-1"><a class="header-anchor" href="#操作-1" aria-hidden="true">#</a> 操作</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 追加元素
v1.push_back(i); // 在末尾追加


// 遍历
// 下标形式
for (int i = 0; i &lt; v1.size(); i++)
{
	cout &lt;&lt; v1[i] &lt;&lt; endl;
}
// 正向迭代器
vector&lt;string&gt; v6 = { &quot;hi&quot;,&quot;my&quot;,&quot;name&quot;,&quot;is&quot;,&quot;lee&quot; };
for (vector&lt;string&gt;::iterator iter = v6.begin(); iter != v6.end(); iter++)
{
	cout &lt;&lt; *iter &lt;&lt; endl;
	//下面两种方法都可以检查迭代器是否为空
	cout &lt;&lt; (*iter).empty() &lt;&lt; endl;
	cout &lt;&lt; iter-&gt;empty() &lt;&lt; endl; 
}
// 反向迭代器
for (vector&lt;string&gt;::reverse_iterator iter = v6.rbegin(); iter != v6.rend(); iter++)
{
	cout &lt;&lt; *iter &lt;&lt; endl;
}


// 插入元素
vector&lt;int&gt; demo{1,2};
//第一种格式用法
demo.insert(demo.begin() + 1, 3);//{1,3,2}
//第二种格式用法
demo.insert(demo.end(), 2, 5);//{1,3,2,5,5}
//第四种格式用法
demo.insert(demo.end(), { 10,11 });//{1,3,2,5,5,7,8,9,10,11}


// 删除元素
demo.pop_back();  // 删除最后一个元素   容器大小不变
auto iter = demo.erase(demo.begin() + 1); //删除第二个元素  容器大小减一
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h2><p>set 为集合，是一个<strong>内部自动有序</strong>且<strong>不含重复元素</strong>的容器。</p><h3 id="创建-2" tabindex="-1"><a class="header-anchor" href="#创建-2" aria-hidden="true">#</a> 创建</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;set&gt;

set&lt;int&gt; name;
set&lt;double&gt; name;
set&lt;char&gt; name;
set&lt;vector&lt;int&gt; &gt; name; //如果typename 是一个STL容器，那么定义时要记得在 &gt;&gt;之间要加空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作-2" tabindex="-1"><a class="header-anchor" href="#操作-2" aria-hidden="true">#</a> 操作</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 插入
demo.insert(x) // 可将 x 插入 set 容器中，并自动递增排序和去重

// 查找
set&lt;int&gt;::iterator it = demo.find(x)

// 删除
st.erase(iterator);
st.erase(value);
st.erase(st.find(300), st.end());

// 遍历
// 正向遍历
for (set&lt;int&gt;::iterator it = st.begin(); it != st.end(); it++) {
    printf(&quot;%d &quot;, *it);
}

// 大小和清除
demo.size();
demo.clear();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> queue</h2><p>先进先出的队列</p><h3 id="创建-3" tabindex="-1"><a class="header-anchor" href="#创建-3" aria-hidden="true">#</a> 创建</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;queue&gt;

queue&lt;int&gt; q1;
queue&lt;double&gt; q2;  
queue&lt;char&gt; q3；
//默认为用deque容器实现的queue；
    
queue&lt;char, list&lt;char&gt;&gt;q1；
//用list容器实现的queue 
queue&lt;int, deque&lt;int&gt;&gt;q2；
//用deque容器实现的queue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作-3" tabindex="-1"><a class="header-anchor" href="#操作-3" aria-hidden="true">#</a> 操作</h3><ul><li>push() 在队尾插入一个元素</li><li>pop() 删除队列第一个元素</li><li>size() 返回队列中元素个数</li><li>empty() 如果队列空则返回true</li><li>front() 返回队列中的第一个元素</li><li>back() 返回队列中最后一个元素</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 入队，队尾
queue &lt;string&gt; q;
q.push(&quot;first&quot;);
q.push(&quot;second&quot;);

// 出队，队首
q.pop();  // 没有返回值

int s = q.size()；
bool em = q.empty();

// 最后一个元素
int last = q.back();

// 第一个元素
int fisrt = q.front();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> stack</h2><p>先进后出的栈</p><h3 id="创建-4" tabindex="-1"><a class="header-anchor" href="#创建-4" aria-hidden="true">#</a> 创建</h3><p>stack 容器适配器的模板有两个参数。第一个参数是存储对象的类型，第二个参数是底层容器的类型。<code>stack&lt;T&gt;</code>的底层容器默认是 <code>deque&lt;T&gt;</code> 容器，过指定第二个模板类型参数，可以使用任意类型的底层容器，只要它们支持 back()、push_back()、pop_back()、empty()、size() 这些操作</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;stack&gt;

stack&lt;string&gt; words;
stack&lt;string, list&lt;string&gt;&gt; fruit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作-4" tabindex="-1"><a class="header-anchor" href="#操作-4" aria-hidden="true">#</a> 操作</h3><ul><li><code>top()</code>：返回一个栈顶元素的引用，类型为 T&amp;。如果栈为空，返回值未定义。</li><li><code>push(const T&amp; obj)</code>：可以将对象副本压入栈顶。这是通过调用底层容器的 push_back() 函数完成的。</li><li><code>push(T&amp;&amp; obj)</code>：以移动对象的方式将对象压入栈顶。这是通过调用底层容器的有右值引用参数的 push_back() 函数完成的。</li><li><code>pop()</code>：弹出栈顶元素。</li><li><code>size()</code>：返回栈中元素的个数。</li><li><code>empty()</code>：在栈中没有元素的情况下返回 true。</li><li><code>emplace()</code>：用传入的参数调用构造函数，在栈顶生成对象。</li><li><code>swap(stack&lt;T&gt; &amp; other_stack)</code>：将当前栈中的元素和参数中的元素交换。参数所包含元素的类型必须和当前栈的相同。对于 stack 对象有一个特例化的全局函数 swap() 可以使用。</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>stack&lt;int&gt;  q;
q.push(1);
q.push(2);

cout&lt;&lt;&quot;q.size &quot;&lt;&lt;q.size()&lt;&lt;endl;
cout&lt;&lt;&quot;q.top &quot;&lt;&lt;q.top()&lt;&lt;endl;   //输出栈顶元素 

q.pop();	//删除栈顶元素

cout&lt;&lt;&quot;q.size &quot;&lt;&lt;q.size()&lt;&lt;endl;  
cout&lt;&lt;&quot;q.top &quot;&lt;&lt;q.top()&lt;&lt;endl;  // 返回栈顶元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),t=[d];function a(r,v){return e(),n("div",null,t)}const u=i(s,[["render",a],["__file","c__.html.vue"]]);export{u as default};

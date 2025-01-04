import{_ as n,o as e,c as a,a as s}from"./app-2cd98865.js";const o={},i=s(`<h1 id="go-work" tabindex="-1"><a class="header-anchor" href="#go-work" aria-hidden="true">#</a> go.work</h1><p>随着go 1.18版本的正式发布，多模块工作区也被引入（WorkSpaces），多模块工作区能够使开发者能够更容易地同时处理多个模块的工作， 如：方便进行依赖的代码调试(打断点、修改代码)、排查依赖代码 bug 。方便同时进行多个仓库/模块并行开发调试。</p><h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因" aria-hidden="true">#</a> 起因</h2><p>本地有两个项目，分别是两个 module：example1 和 example2。</p><p>在 example1 的 bar.go 中有如下代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> example1

<span class="token keyword">func</span> <span class="token function">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;This is package example1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，在 example2 模块中 main.go 中有如下内容：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/test/example1&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    example1<span class="token punctuation">.</span><span class="token function">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，如果运行 go mod tidy，肯定会报错，因为 example1 包根本没有提交到 github 上，找不到。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod tidy
<span class="token punctuation">..</span><span class="token punctuation">..</span>
fatal: repository <span class="token string">&#39;https://github.com/test/example1/&#39;</span> not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然可以提交 example1 到 github，但每修改一次 example1，就需要提交（而且每次提交之后需要在 example2 中 go get 最新版本），否则 example2 中就没法使用上最新的。</p><p>针对这种情况，可以通过 replace 来解决，即在 example2 中的 go.mod 增加如下 replace：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>module github.com/test/example2

go <span class="token number">1.19</span>

require github.com/test/example1 v1.0.0

replace github.com/test/example1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">..</span>/example1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当都开发完成时，需要手动删除 replace，并执行 go mod tidy 后提交，否则别人使用就报错了。</p><p>这还是挺不方便的，如果本地有多个 module，每一个都得这么处理。</p><h2 id="工作区模式" tabindex="-1"><a class="header-anchor" href="#工作区模式" aria-hidden="true">#</a> 工作区模式</h2><p>针对上面的这个问题，Michael Matloob 提出了 Workspace Mode（工作区模式）。并在 Go1.18 中发布了。</p><p><em>注意</em>：工作区不只是 go work 相关命令，Go 其他命令也会涉及工作区内容，比如 go run、go build 等。</p><p>初始化 workspace：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/test
$ go work init example1 example2
$ tree
<span class="token builtin class-name">.</span>
├── example2
│   ├── go.mod
│   └── main.go
├── go.work
└── example1
    ├── bar.go
    └── go.mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意几点：</p><ul><li>多个子模块应该在一个目录下（或其子目录）。比如这里的 test 目录；（这不是必须的，但更好管理，否则 go work init 需要提供正确的子模块路径）</li><li>go work init 需要在 example1 目录执行；</li><li>go work init 之后跟上需要本地开发的子模块目录名；</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">go</span> <span class="token number">1.23</span>

use <span class="token punctuation">(</span>
    <span class="token punctuation">.</span><span class="token operator">/</span>example1
    <span class="token punctuation">.</span><span class="token operator">/</span>example2
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：实际项目中，多个模块之间可能还依赖其他模块，建议在 go.work 所在目录执行 <code>go work sync</code>。</p><p>注意，go.work 不需要提交到 Git 中，因为它只是你本地开发使用的。</p><p>当开发完成，应该先提交 example1 包到 GitHub，然后在 example2 下面执行 go get：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go get <span class="token parameter variable">-u</span> github.com/test/example1@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后禁用 workspace（通过 GOWORK=off 禁用），再次运行 example2 模块，是否正确：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/test/example2
$ <span class="token assign-left variable">GOWORK</span><span class="token operator">=</span>off go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在同时使用go.work和go.mod的<code>replaces</code>功能时，分别指定不同的代码仓库路径，go.work优先级高于go.mod中定义</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//go.mod 中定义替换为本地仓库 example</span>
replace <span class="token punctuation">(</span> 
    github<span class="token punctuation">.</span>com<span class="token operator">/</span>link1st<span class="token operator">/</span>example <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">.</span><span class="token operator">/</span>example 
<span class="token punctuation">)</span>

<span class="token comment">//go.work 中定义替换为本地仓库 example1</span>
replace <span class="token punctuation">(</span> 
    github<span class="token punctuation">.</span>com<span class="token operator">/</span>link1st<span class="token operator">/</span>example <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">.</span><span class="token operator">/</span>example1 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在代码构建时，使用的是go.work指定的example1仓库代码，go.work优先级别更高</p><h4 id="go-work支持命令" tabindex="-1"><a class="header-anchor" href="#go-work支持命令" aria-hidden="true">#</a> <code>go work</code>支持命令</h4><ul><li><code>go work init</code> 初始化工作区文件，用于生成go.work工作区文件</li></ul><blockquote><p>初始化并写入一个新的go.work到当前路径下，可以指定需要添加的代码模块</p><p>eg: go work init ./hello 将本地仓库hello添加到工作区</p><p>hello仓库必须是go mod依赖管理的仓库</p></blockquote><ul><li><code>go work use</code>添加新的模块到工作区</li></ul><blockquote><p>eg:</p><p>go work use ./example 添加一个模块到工作区</p><p>go work use ./example ./example1 添加多个模块到工作区</p><p>go work use -r ./example 递归./example目录到当前工作区</p><p>删除命令: go work edit -dropuse=./example 功能</p></blockquote><ul><li><code>go work sync</code>将工作区的构建列表同步到工作区模块，go.work 文件中会列出多个模块路径，当在这些模块的 go.mod 文件中修改了依赖版本后，运行 go work sync 会更新工作空间中其他模块的依赖信息，保证一致性。</li><li><code>go env GOWORK</code>查看环境变量，查看当前工作区文件路径，可以排查工作区文件是否设置正确，go.work路径找不到可以使用GOWORK指定</li></ul>`,38),l=[i];function p(t,c){return e(),a("div",null,l)}const r=n(o,[["render",p],["__file","gowork.html.vue"]]);export{r as default};

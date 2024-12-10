import{_ as c,r as o,o as p,c as i,b as n,d as s,e,a as t}from"./app-0bc2a4b0.js";const l="/home/assets/architecture-c321ef30.png",d="/home/assets/gasfee-b1a07317.png",r="/home/assets/generateContract-2bd80660.png",u="/home/assets/intepreter-0fe3faad.png",k="/home/assets/detailIntepterter-3e2624f9.png",m="/home/assets/example-cd2aa3ca.png",h="/home/assets/input-44a5654d.png",v="/home/assets/methodtable-33a684f1.png",b="/home/assets/opcode1-d06993c0.png",_="/home/assets/call-8c022fa3.png",g="/home/assets/callvscallcode-e0de45ba.png",f="/home/assets/callcodevsdelegatecall-1ed5e65e.png",L="/home/assets/createContract-35987ecb.png",A={},C=n("h1",{id:"以太坊虚拟机evm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#以太坊虚拟机evm","aria-hidden":"true"},"#"),s(" 以太坊虚拟机EVM")],-1),E={href:"https://ethereum.org/zh/gas/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://ethereum.org/zh/developers/docs/evm/opcodes/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://wikipedia.org/wiki/Finite-state_machine",target:"_blank",rel:"noopener noreferrer"},D=n("em",null,"机器状态",-1),M=t(`<img src="https://ethereum.org/_next/image/?url=%2Fcontent%2Ftranslations%2Fzh%2Fdevelopers%2Fdocs%2Fevm%2Fevm.png&amp;w=1920&amp;q=75" style="zoom:40%;"><h2 id="以太坊状态转换函数" tabindex="-1"><a class="header-anchor" href="#以太坊状态转换函数" aria-hidden="true">#</a> 以太坊状态转换函数</h2><p>EVM 的行为就像一个数学函数：在给定输入的情况下，它会产生确定性的输出。 因此，将以太坊更正式地描述为具有<strong>状态转换函数</strong>非常有帮助：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Y(S, T)= S&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给定一个旧的有效状态 <code>（S）</code>&gt; 和一组新的有效交易 <code>（T）</code>，以太坊状态转换函数 <code>Y（S，T）</code> 产生新的有效输出状态<code> S&#39;</code></p><blockquote><p>状态</p></blockquote>`,6),O={href:"https://ethereum.org/zh/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",target:"_blank",rel:"noopener noreferrer"},S=n("blockquote",null,[n("p",null,"交易")],-1),V=n("p",null,[s("交易是来自帐户的密码学签名指令。 交易分为两种："),n("strong",null,"一种是消息调用交易，另一种是合约创建交易"),s("。")],-1),T=n("p",null,[s("合约创建交易会创建一个新的合约帐户，其中包含已编译的智能合约字节码。 每当另一个帐户对该合约进行消息调用时，它都会"),n("strong",null,"执行其字节码"),s("。")],-1),w=n("h2",{id:"evm说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#evm说明","aria-hidden":"true"},"#"),s(" EVM说明")],-1),z={href:"https://wikipedia.org/wiki/Stack_machine",target:"_blank",rel:"noopener noreferrer"},B=t('<p>在执行期间，EVM 会维护一个瞬态<em>内存</em>（作为字可寻址的字节数组），该内存不会在交易之间持久存在。</p><p>然而，合约确实包含一个 Merkle Patricia <em>存储</em> trie（作为可字寻址的字数组），该 trie 与帐户和部分全局状态关联。</p><p>已编译的智能合约字节码作为许多 EVM opcodes执行，它们执行标准的堆栈操作，例如 <code>XOR</code>、<code>AND</code>、<code>ADD</code>、<code>SUB</code>等。 EVM 还实现了一些区块链特定的堆栈操作，如 <code>ADDRESS</code>、<code>BALANCE</code>、<code>BLOCKHASH</code> 等。这些操作指令都对应有自己的<strong>燃料</strong>，还有一些指令具有动态燃料</p><p><strong>每个以太坊执行客户端都包含了一个以太坊虚拟机的实现</strong>。</p><h2 id="详细说明" tabindex="-1"><a class="header-anchor" href="#详细说明" aria-hidden="true">#</a> 详细说明</h2><p>虚拟机用来执行以太坊上的交易，更改以太坊状态。交易分两种：普通交易和智能合约交易。在执行交易时需要支付油费。智能合约之间的调用有四种方式。</p><h3 id="全局观" tabindex="-1"><a class="header-anchor" href="#全局观" aria-hidden="true">#</a> 全局观</h3><p>以太坊虚拟机，简称EVM，是用来执行以太坊上的交易的。业务流程如下图：</p><img src="'+l+'" alt="screenshot2024-07-18 15.05.55" style="zoom:50%;"><p>输入一笔交易，内部会转换成一个<code>Message</code>对象，传入<code>EVM</code>执行。</p><p>如果是一笔普通转账交易，那么直接修改<code>StateDB</code>中对应的账户余额即可。如果是智能合约的创建或者调用，则通过EVM中的解释器加载和执行字节码，执行过程中可能会查询或者修改<code>StateDB</code>。</p><h3 id="固定邮费-intrinsic-gas" tabindex="-1"><a class="header-anchor" href="#固定邮费-intrinsic-gas" aria-hidden="true">#</a> 固定邮费（Intrinsic Gas）</h3><p>每笔交易过来，先需要收取一笔固定油费，计算方法如下：</p><img src="'+d+'" alt="screenshot2024-07-18 15.07.30" style="zoom:50%;"><p>如果交易不带额外数据（Payload），比如普通转账，那么需要收取21000的油费。</p><p>如果交易携带额外数据，那么这部分数据也是需要收费的，具体来说是按字节收费：字节为0的收4块，字节不为0收68块，所以会看到很多做合约优化的，目的就是减少数据中不为0的字节数量，从而降低油费gas消耗。</p><h3 id="生成-contract-对象" tabindex="-1"><a class="header-anchor" href="#生成-contract-对象" aria-hidden="true">#</a> 生成 Contract 对象</h3><p>交易会被转换成一个Message对象传入EVM，而EVM则会根据Message生成一个Contract对象，以便后续执行：</p><p>也就是说明 EVM 的执行都是根据 Contract 对象来进行的</p><img src="'+r+'" alt="screenshot2024-07-18 15.17.31" style="zoom:50%;"><p>可以看到，Contract中会根据合约地址，从<code>StateDB</code>中加载对应的代码，后面送入解释器执行。</p><p>另外，执行合约能够消耗的油费有一个上限，就是节点配置的每个区块能够容纳的<code>GasLimit</code>。</p><h3 id="解释器执行" tabindex="-1"><a class="header-anchor" href="#解释器执行" aria-hidden="true">#</a> 解释器执行</h3><p>代码和输入都有了，之后送入解释器执行。EVM是基于栈的虚拟机，解释器中需要操作四大组件：</p><ul><li>PC：类似于CPU中的PC寄存器，指向当前执行的指令</li><li>Stack：执行堆栈，位宽为256 bits，最大深度为1024</li><li>Memory：内存空间</li><li>Gas：油费池，耗光邮费则交易执行失败</li></ul><img src="'+u+'" alt="screenshot2024-07-18 15.19.19" style="zoom:33%;"><p>具体的执行过程如下：</p><img src="'+k+'" alt="screenshot2024-07-18 15.21.09" style="zoom:33%;">',28),P={href:"https://ethervm.io/",target:"_blank",rel:"noopener noreferrer"},I=n("p",null,"下面是一个示例（PUSH1=0x60, MSTORE=0x52）：",-1),q=n("img",{src:m,alt:"screenshot2024-07-18 15.24.51",style:{zoom:"33%"}},null,-1),G=n("p",null,"首先PC会从合约代码中读取一个OpCode，然后从一个JumpTable中检索出对应的operation，也就是与其相关联的函数集合。接下来会计算该操作需要消耗的油费，如果油费耗光则执行失败，返回ErrOutOfGas错误。如果油费充足，则调用execute()执行该指令，根据指令类型的不同，会分别对Stack、Memory或者StateDB进行读写操作。",-1),F=n("h3",{id:"调用合约函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#调用合约函数","aria-hidden":"true"},"#"),s(" 调用合约函数")],-1),R=n("p",null,"EVM怎么知道交易想调用的是合约里的哪个函数呢？跟合约代码一起送到解释器里的还有一个Input，而这个Input数据是由交易提供的关于合约调用的信息。",-1),N=n("img",{src:h,alt:"screenshot2024-07-18 15.29.00",style:{zoom:"50%"}},null,-1),K=n("p",null,"Input数据通常分为两个部分：",-1),Y={href:"https://www.4byte.directory/",target:"_blank",rel:"noopener noreferrer"},U=n("li",null,"后面是调用该函数需要提供的参数，长度不定，每个参数都被编码为 32 字节长度。",-1),J=t(`<p>举个例子：在部署完A合约后，调用add(1)对应的Input数据是</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>0x87db03b70000000000000000000000000000000000000000000000000000000000000001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而在编译智能合约的时候，编译器会自动在生成的字节码的最前面增加一段函数选择逻辑：</p><p>首先通过<code>CALLDATALOAD</code>指令将“4-byte signature”压入堆栈中，然后依次跟该合约中包含的函数进行比对，如果匹配则调用JUMPI指令跳入该段代码继续执行。</p><p>他会有一个如下的数据结构来对应 MethodID 和方法：</p><img src="`+v+'" alt="screenshot2024-07-18 15.33.28" style="zoom:33%;"><p>数据加载相关的指令，一共有4种：</p><ul><li>CALLDATALOAD：把输入数据加载到Stack中</li><li>CALLDATACOPY：把输入数据加载到Memory中</li><li>CODECOPY：把当前合约代码拷贝到Memory中</li><li>EXTCODECOPY：把外部合约代码拷贝到Memory中</li></ul><p>最后一个EXTCODECOPY不太常用，一般是为了审计第三方合约的字节码是否符合规范，消耗的gas一般也比较多。这些指令对应的操作如下图所示：</p><img src="'+b+'" alt="screenshot2024-07-18 15.37.10" style="zoom:50%;"><h3 id="合约调用合约" tabindex="-1"><a class="header-anchor" href="#合约调用合约" aria-hidden="true">#</a> 合约调用合约</h3><p>在中大型的项目中，不可能在一个智能合约中实现所有的功能，而且这样也不利于分工合作。一般情况下，会把代码按功能划分到不同的库或者合约中，然后提供接口互相调用。</p><p>在<code>Solidity</code>中，如果只是为了代码复用，会把公共代码抽出来，部署到一个library中，后面就可以像调用C库、Java库一样使用了。但是library中不允许定义任何storage类型的变量，这就意味着library不能修改合约的状态。如果需要修改合约状态，需要部署一个新的合约，这就涉及到合约调用合约的情况。</p><p>合约内部调用另外一个合约，有4种调用方式：</p><ul><li>CALL</li><li>CALLCODE</li><li>DELEGATECALL</li><li>STATICALL（这个暂时没用）</li></ul><p>以下是 call 的工作图</p><img src="'+_+'" alt="screenshot2024-07-18 15.38.41" style="zoom:33%;"><p>可以看到，调用者把调用参数存储在内存中，然后执行CALL指令。</p><p>CALL指令执行时会创建新的Contract对象，并以内存中的调用参数作为其Input。</p><p>解释器会为新合约的执行创建新的<code>Stack</code>和<code>Memory</code>，从而不会破环原合约的执行环境。</p><p>新合约执行完成后，通过RETURN指令把执行结果写入之前指定的内存地址，然后原合约继续向后执行。</p><h4 id="call-vs-callcode" tabindex="-1"><a class="header-anchor" href="#call-vs-callcode" aria-hidden="true">#</a> CALL vs. CALLCODE</h4><p>CALL和CALLCODE的区别在于：代码执行的上下文环境不同。</p><p>具体来说，CALL修改的是<strong>被调用者</strong>的storage，而CALLCODE修改的是<strong>调用者</strong>的storage。</p><img src="'+g+`" alt="screenshot2024-07-18 15.43.02" style="zoom:33%;"><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.4.25</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token builtin">int</span> <span class="token keyword">public</span> x<span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">inc_call</span><span class="token punctuation">(</span><span class="token builtin">address</span> _contractAddress<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
      _contractAddress<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;inc()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">inc_callcode</span><span class="token punctuation">(</span><span class="token builtin">address</span> _contractAddress<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
      _contractAddress<span class="token punctuation">.</span><span class="token function">callcode</span><span class="token punctuation">(</span><span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;inc()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
  <span class="token builtin">int</span> <span class="token keyword">public</span> x<span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
      x<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 比如这个，inc_call改变的 B 的 x，inc_callcode改变的 A 的 x</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="callcode-vs-delegatecall" tabindex="-1"><a class="header-anchor" href="#callcode-vs-delegatecall" aria-hidden="true">#</a> CALLCODE vs. DELEGATECALL</h4><p>实际上，可以认为DELEGATECALL是CALLCODE的一个bugfix版本，官方已经不建议使用CALLCODE了。</p><p>CALLCODE和DELEGATECALL的区别在于：<code>msg.sender</code>不同。</p><p>具体来说，DELEGATECALL会一直使用原始调用者的地址，而CALLCODE不会。</p><img src="`+f+`" alt="screenshot2024-07-18 15.46.29" style="zoom:33%;"><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>pragma solidity <span class="token operator">^</span><span class="token number">0.4</span><span class="token number">.25</span><span class="token punctuation">;</span>

contract A <span class="token punctuation">{</span>
  <span class="token builtin">int</span> public x<span class="token punctuation">;</span>

  function <span class="token function">inc_callcode</span><span class="token punctuation">(</span>address _contractAddress<span class="token punctuation">)</span> public <span class="token punctuation">{</span>
      _contractAddress<span class="token punctuation">.</span><span class="token function">callcode</span><span class="token punctuation">(</span><span class="token function">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;inc()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  function <span class="token function">inc_delegatecall</span><span class="token punctuation">(</span>address _contractAddress<span class="token punctuation">)</span> public <span class="token punctuation">{</span>
      _contractAddress<span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span><span class="token function">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;inc()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

contract B <span class="token punctuation">{</span>
  <span class="token builtin">int</span> public x<span class="token punctuation">;</span>

  event <span class="token function">senderAddr</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
  function <span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> public <span class="token punctuation">{</span>
      x<span class="token operator">++</span><span class="token punctuation">;</span>
      emit <span class="token function">senderAddr</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// inc_callcode 的 sender 是 A，inc_delegatecall 的 sender 是 A 的调用者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建合约" tabindex="-1"><a class="header-anchor" href="#创建合约" aria-hidden="true">#</a> 创建合约</h3><p>如果某一笔交易的to地址为nil，则表明该交易是用于创建智能合约的。</p><p>首先需要创建合约地址，采用下面的计算公式：<code>Keccak(RLP(call_addr, nonce))[12:]</code>。也就是说，对交易发起人的地址和nonce进行RLP编码，再算出Keccak哈希值，取后20个字节作为该合约的地址。</p><p>下一步就是根据合约地址创建对应的<code>stateObject</code>，然后存储交易中包含的合约代码。该合约的所有状态变化会存储在一个<code>storage trie</code>中，最终以<code>Key-Value</code>的形式存储到<code>StateDB</code>中。代码一经存储则无法改变，而<code>storage trie</code>中的内容则是可以通过调用合约进行修改的，比如通过<code>SSTORE</code>指令。</p><img src="`+L+'" alt="screenshot2024-07-18 15.40.47" style="zoom:50%;">',37);function H(X,j){const a=o("ExternalLinkIcon");return p(),i("div",null,[C,n("p",null,[s("以太坊虚拟机 (EVM) 是一个去中心化虚拟环境，它在所有以太坊节点上一种安全一致地方式执行代码。 节点运行以太坊虚拟机，以执行智能合约，利用“"),n("a",E,[s("燃料"),e(a)]),s("”度量执行"),n("a",y,[s("操作"),e(a)]),s("所需的计算工作，从而确保高效的资源分配和网络安全性。")]),n("p",null,[s("以太坊不是分布式账本，而是分布式"),n("a",x,[s("状态机器"),e(a)]),s("。 以太坊的状态是一个大型数据结构，它不仅保存所有帐户和余额，而且还保存一个"),D,s("，它可以根据预定义的一组规则在不同的区块之间进行更改，并且可以执行任意的机器代码。 在区块中更改状态的具体规则由 EVM 定义。")]),M,n("p",null,[s("在以太坊环境中，状态是一种称为"),n("a",O,[s("改进版默克尔帕特里夏树"),e(a)]),s("的巨大数据结构，它保存所有通过哈希关联在一起的帐户并可回溯到存储在区块链上的单个根哈希。")]),S,V,T,w,n("p",null,[s("EVM 作为一个"),n("a",z,[s("堆栈机"),e(a)]),s("运行，其栈的深度为 1024 个项。 每个项目都是 256 位字，为了便于使用，选择了 256 位加密技术（如 Keccak-256 哈希或 secp256k1 签名）。")]),B,n("p",null,[s("可以看到 JumpTable（这个表就可以看成是一个指令集的表格） 深度只有 256，EVM的每条指令称为一个OpCode，占用一个字节，所以指令集最多不超过256，"),n("a",P,[s("官网"),e(a)]),s("。")]),I,q,G,F,R,N,K,n("ul",null,[n("li",null,[s("前面4个字节被称为“4-byte signature”，是某个函数签名的Keccak哈希值的前4个字节，作为该函数的唯一标识，也叫 Method ID。（可以在该网站"),n("a",Y,[s("查询目前所有的函数签名"),e(a)]),s("）")]),U]),J])}const W=c(A,[["render",H],["__file","evm.html.vue"]]);export{W as default};
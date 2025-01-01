import{_ as o,r as i,o as l,c,b as n,d as s,e,a as t}from"./app-a6de63d6.js";const p="/home/assets/data-2dd4342f.png",r={},d=t('<h1 id="以太坊交易" tabindex="-1"><a class="header-anchor" href="#以太坊交易" aria-hidden="true">#</a> 以太坊交易</h1><p>交易是由帐户发出，带密码学签名的指令。 帐户将发起交易以更新以太坊网络的状态。 最简单的交易是将 ETH 从一个帐户转到另一个帐户。</p><h2 id="交易是什么" tabindex="-1"><a class="header-anchor" href="#交易是什么" aria-hidden="true">#</a> 交易是什么</h2><p>以太坊交易是指由<strong>外部持有帐户</strong>发起的行动，换句话说，是指由人管理而不是智能合约管理的帐户。 例如，如果 Bob 发送 Alice 1 ETH，则 Bob 的帐户必须减少 1 ETH，而 Alice 的帐户必须增加 1 ETH。 交易会造成状态的改变。</p><p><strong>改变 EVM 状态的交易需要广播到整个网络</strong>。 任何节点都可以广播在以太坊虚拟机上执行交易的请求；此后，<strong>验证者将执行交易</strong>并将由此产生的状态变化传播到网络的其他部分。</p><p><strong>交易需要付费并且必须包含在一个有效区块中。</strong></p><h2 id="交易数据结构" tabindex="-1"><a class="header-anchor" href="#交易数据结构" aria-hidden="true">#</a> 交易数据结构</h2><p>所提交的交易包括下列信息：</p>',8),u=t("<li><code>from</code> - 发送者的地址，该地址将签署交易。 这将是一个外部帐户，因为合约帐户不能发送交易。</li><li><code>to</code> — 接收地址（如果是外部帐户，交易将传输值。 如果是合约帐户，交易将执行合约代码）</li><li><code>signature</code> – 发送者的标识符。 当发送者的私钥签署交易并确保发送者已授权此交易时，生成此签名。</li><li><code>nonce</code> - 一个有序递增的计数器，表示来自帐户的交易数量</li><li><code>value</code> – 发送者向接收者转移的以太币数量（面值为 WEI，1 个以太币 = 1e+18wei）</li><li><code>input data</code> – 可包括任意数据的可选字段</li>",6),v=n("code",null,"gasLimit",-1),m={href:"https://ethereum.org/zh/developers/docs/evm/opcodes/",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,[n("code",null,"maxPriorityFeePerGas"),s(" - 作为小费提供给验证者的已消耗燃料的最高价格")],-1),k=n("li",null,[n("code",null,"maxFeePerGas"),s(" - 愿意为交易支付的每单位燃料的最高费用（包括 "),n("code",null,"baseFeePerGas"),s(" 和 "),n("code",null,"maxPriorityFeePerGas"),s("）")],-1),g=n("p",null,[s("燃料是指验证者处理交易所需的计算。 用户必须为此计算支付费用。 "),n("code",null,"gasLimit"),s(" 和 "),n("code",null,"maxPriorityFeePerGas"),s(" 决定支付给验证者的最高交易费。")],-1),h=n("h2",{id:"示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),s(" 示例")],-1),q=n("p",null,"交易对象需要使用发送者的私钥签名。 这证明交易只可能来自发送者，而不是欺诈。",-1),_=n("p",null,"Geth 这样的以太坊客户端将处理此签名过程。",-1),f={href:"https://ethereum.org/zh/developers/docs/apis/json-rpc/",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;account_signTransaction&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x1923f626bb8dc025849e00f99c25fe2b2f7fb0db&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x55555&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;maxFeePerGas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x1234&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;maxPriorityFeePerGas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x1234&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xabcd&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x07a565b7ed7d7a678680a4c162885bedbb695fe0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x1234&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;raw&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xf88380018203339407a565b7ed7d7a678680a4c162885bedbb695fe080a44401a6e4000000000000000000000000000000000000000000000000000000000000001226a0223a7c9bcf5531c99be5ea7082183816eb20cfe0bbc322e97cc5c7f71ab8b20ea02aadee6b34b45bb15bc42d9c09de4a6754e7000908da72d48cc7704971491663&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tx&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;maxFeePerGas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x1234&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;maxPriorityFeePerGas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x1234&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x55555&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x07a565b7ed7d7a678680a4c162885bedbb695fe0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x1234&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xabcd&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x26&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x223a7c9bcf5531c99be5ea7082183816eb20cfe0bbc322e97cc5c7f71ab8b20e&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;s&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x2aadee6b34b45bb15bc42d9c09de4a6754e7000908da72d48cc7704971491663&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xeba2df809e7a612a0a0d444ccfa5c839624bdc00dd29e3340d46df3870f8a30e&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=n("code",null,"raw",-1),P={href:"https://ethereum.org/zh/developers/docs/data-structures-and-encoding/rlp/",target:"_blank",rel:"noopener noreferrer"},T=n("li",null,[n("code",null,"tx"),s(" 是已签名交易的 JSON 形式。")],-1),G=n("p",null,"如有签名哈希，可通过加密技术证明交易来自发送者并提交网络。验证过程就是，根据签名哈希得到公钥，计算出交易 from地址，然后比对两个地址是否相同",-1),I=n("h2",{id:"data-字段",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#data-字段","aria-hidden":"true"},"#"),s(" data 字段")],-1),j=n("p",null,[s("绝大多数交易都是从外部所有的帐户访问合约。 大多数合约用 Solidity 语言编写，并根据应用"),n("strong",null,"程序二进制接口 (ABI)"),s(" 解释其"),n("code",null,"data"),s("字段。")],-1),E=n("p",null,"前四个字节使用函数名称和参数的哈希指定要调用的函数。",-1),L={href:"https://docs.soliditylang.org/en/latest/abi-spec.html#formal-specification-of-the-encoding",target:"_blank",rel:"noopener noreferrer"},w={href:"https://etherscan.io/tx/0xd0dcbe007569fcfa1902dae0ab8b4e078efe42e231786312289b1eee5590f6a1",target:"_blank",rel:"noopener noreferrer"},F=n("code",null,"0xa9059cbb0000000000000000000000004f6742badb049791cd9a37ea913f2bac38d01279000000000000000000000000000000000000000000000000000000003b0559f4",-1),B=t(`<p>函数选择器是 <code>0xa9059cbb</code> （前四个字节）。</p><p>其余数据如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>10000000000000000000000004f6742badb049791cd9a37ea913f2bac38d01279
2000000000000000000000000000000000000000000000000000000003b0559f4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据应用程序二进制接口规范，整型值（例如地址，它是 20 字节整型）在应用程序二进制接口中显示为 <strong>32 字节</strong>的字，<strong>前面用零填充</strong>。 所以我们知道 <code>to</code> 地址是 <code>4f6742badb049791cd9a37ea913f2bac38d01279</code>。 <code>value</code> 是 0x3b0559f4 = 990206452。</p><p><img src="`+p+'" alt="screenshot2024-07-17 14.41.48"></p><h2 id="交易类型" tabindex="-1"><a class="header-anchor" href="#交易类型" aria-hidden="true">#</a> 交易类型</h2><p>以太坊有几种不同类型的交易：</p><ul><li>常规交易：从一个帐户到另一个帐户的交易。</li><li>合约部署交易：没有“to”地址的交易，数据字段用于合约代码。</li><li>执行合约：与已部署的智能合约进行交互的交易。 在这种情况下，“to”地址是智能合约地址。</li></ul><h2 id="燃料简介" tabindex="-1"><a class="header-anchor" href="#燃料简介" aria-hidden="true">#</a> 燃料简介</h2>',9),A={href:"https://ethereum.org/zh/developers/docs/gas/",target:"_blank",rel:"noopener noreferrer"},H=t(`<p>因此，如果 Bob 要在 <code>baseFeePerGas</code> 为 190 Gwei 且 <code>maxPriorityFeePerGas</code> 为 10 Gwei 时给 Alice 发送一个以太币，Bob 需要支付以下费用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(190 + 10) * 21000 = 4,200,000 gwei
--或--
0.0042 ETH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bob 的帐户将会扣除 <strong>1.0042 个以太币</strong>（1 个以太币给 Alice，0.0042 个以太币作为燃料费用）</p><p>Alice 的帐户将会增加 <strong>+1.0 ETH</strong></p><p>基础费将会燃烧 <strong>-0.00399 ETH</strong></p><p>验证者获得 <strong>0.000210 个以太币</strong>的小费</p><p><strong>任何智能合约交互也需要燃料。任何未用于交易的燃料都会退还给用户帐户。</strong></p><h2 id="交易生命周期" tabindex="-1"><a class="header-anchor" href="#交易生命周期" aria-hidden="true">#</a> 交易生命周期</h2><p>交易提交后，就会发生以下情况：</p><ol><li>以加密方式生成的交易哈希： <code>0x97d99bc7729211111a21b12c933c949d4f31684f1d6954ff477d0477538ff017</code></li><li>然后，该交易被广播到网络，并添加到由<strong>所有其他待处理的网络交易组成的交易池中</strong>。</li><li><strong>验证者必须选择你的交易并将它包含在一个区块中，以便验证交易并认为它“成功”。</strong></li><li>随着时间的流逝，<strong>包含你的交易的区块将升级成“合理”状态，然后变成“最后确定”状态</strong>。 通过这些升级，可以进一步确定你的交易已经成功并将无法更改。 区块一旦“最终确定”，只能通过耗费数十亿美元的网络级攻击来更改。</li></ol><h2 id="typed-transaction-envelope交易" tabindex="-1"><a class="header-anchor" href="#typed-transaction-envelope交易" aria-hidden="true">#</a> TYPED TRANSACTION ENVELOPE交易</h2><p>这些还不懂，后面再看吧，总之就是他的定义在不断改变吧，但是里面大概的意思差不多。</p><p>随着 EIP 的提出，交易的格式一直在丰富</p>`,13),N={href:"https://ethereum.org/zh/developers/docs/data-structures-and-encoding/rlp/",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RLP([nonce, gasPrice, gasLimit, to, value, data, v, r, s])
@dataclass
class TransactionLegacy:
	signer_nonce: int = 0
	gas_price: int = 0
	gas_limit: int = 0
	destination: int = 0
	amount: int = 0
	payload: bytes = bytes()
	v: int = 0
	r: int = 0
	s: int = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C={href:"https://eips.ethereum.org/EIPS/eip-1559",target:"_blank",rel:"noopener noreferrer"},V=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@dataclass
class Transaction1559Payload:
	chain_id: int = 0
	signer_nonce: int = 0
	max_priority_fee_per_gas: int = 0
	max_fee_per_gas: int = 0
	gas_limit: int = 0
	destination: int = 0
	amount: int = 0
	payload: bytes = bytes()
	access_list: List[Tuple[int, List[int]]] = field(default_factory=list)
	signature_y_parity: bool = False
	signature_r: int = 0
	signature_s: int = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={href:"https://eips.ethereum.org/EIPS/eip-2718",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TransactionType || TransactionPayload
@dataclass
class Transaction1559Payload:
	chain_id: int = 0
	signer_nonce: int = 0
	max_priority_fee_per_gas: int = 0
	max_fee_per_gas: int = 0
	gas_limit: int = 0
	destination: int = 0
	amount: int = 0
	payload: bytes = bytes()
	access_list: List[Tuple[int, List[int]]] = field(default_factory=list)
	signature_y_parity: bool = False
	signature_r: int = 0
	signature_s: int = 0

@dataclass
class Transaction1559Envelope:
	type: Literal[2] = 2
	payload: Transaction1559Payload = Transaction1559Payload()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，字段定义如下：</p><ul><li><code>TransactionType</code> - 一个在 0 到 0x7f 之间的数字，总共为 128 种可能的交易类型。</li><li><code>TransactionPayload</code> - 由交易类型定义的任意字节数组。</li></ul><h2 id="交易源码" tabindex="-1"><a class="header-anchor" href="#交易源码" aria-hidden="true">#</a> 交易源码</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Transaction <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	inner TxData    <span class="token comment">// Consensus contents of a transaction</span>
	time  time<span class="token punctuation">.</span>Time <span class="token comment">// Time first seen locally (spam avoidance)</span>

	<span class="token comment">// caches</span>
	hash atomic<span class="token punctuation">.</span>Pointer<span class="token punctuation">[</span>common<span class="token punctuation">.</span>Hash<span class="token punctuation">]</span>
	size atomic<span class="token punctuation">.</span>Uint64
	from atomic<span class="token punctuation">.</span>Pointer<span class="token punctuation">[</span>sigCache<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TxData 是个接口，目前有四个类，这也说明了上面的存在很多交易类型</p><p>最原始的交易类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// LegacyTx is the transaction data of the original Ethereum transactions.</span>
<span class="token keyword">type</span> LegacyTx <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Nonce    <span class="token builtin">uint64</span>          <span class="token comment">// nonce of sender account</span>
    GasPrice <span class="token operator">*</span>big<span class="token punctuation">.</span>Int        <span class="token comment">// wei per gas</span>
    Gas      <span class="token builtin">uint64</span>          <span class="token comment">// gas limit</span>
    To       <span class="token operator">*</span>common<span class="token punctuation">.</span>Address <span class="token string">\`rlp:&quot;nil&quot;\`</span> <span class="token comment">// nil means contract creation</span>
    Value    <span class="token operator">*</span>big<span class="token punctuation">.</span>Int        <span class="token comment">// wei amount</span>
    Data     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>          <span class="token comment">// contract invocation input data</span>
    V<span class="token punctuation">,</span> R<span class="token punctuation">,</span> S  <span class="token operator">*</span>big<span class="token punctuation">.</span>Int        <span class="token comment">// signature values</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EIP-1559 的交易类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// DynamicFeeTx represents an EIP-1559 transaction.</span>
<span class="token keyword">type</span> DynamicFeeTx <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ChainID    <span class="token operator">*</span>big<span class="token punctuation">.</span>Int
    Nonce      <span class="token builtin">uint64</span>
    GasTipCap  <span class="token operator">*</span>big<span class="token punctuation">.</span>Int <span class="token comment">// a.k.a. maxPriorityFeePerGas</span>
    GasFeeCap  <span class="token operator">*</span>big<span class="token punctuation">.</span>Int <span class="token comment">// a.k.a. maxFeePerGas</span>
  	<span class="token comment">// gas limit</span>
    Gas        <span class="token builtin">uint64</span>
    To         <span class="token operator">*</span>common<span class="token punctuation">.</span>Address <span class="token string">\`rlp:&quot;nil&quot;\`</span> <span class="token comment">// nil means contract creation</span>
    Value      <span class="token operator">*</span>big<span class="token punctuation">.</span>Int
    Data       <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    AccessList AccessList

    <span class="token comment">// Signature values</span>
    V <span class="token operator">*</span>big<span class="token punctuation">.</span>Int <span class="token string">\`json:&quot;v&quot; gencodec:&quot;required&quot;\`</span>
    R <span class="token operator">*</span>big<span class="token punctuation">.</span>Int <span class="token string">\`json:&quot;r&quot; gencodec:&quot;required&quot;\`</span>
    S <span class="token operator">*</span>big<span class="token punctuation">.</span>Int <span class="token string">\`json:&quot;s&quot; gencodec:&quot;required&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一些其他的交易类型，还不懂啥意思，先不管了。</p><h2 id="收据源码" tabindex="-1"><a class="header-anchor" href="#收据源码" aria-hidden="true">#</a> 收据源码</h2><p>一个交易就对应有一个收据，如果交易是合约交易，则会产生日志。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Receipt represents the results of a transaction.</span>
<span class="token keyword">type</span> Receipt <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// Consensus fields: These fields are defined by the Yellow Paper</span>
	Type              <span class="token builtin">uint8</span>  <span class="token string">\`json:&quot;type,omitempty&quot;\`</span>
	PostState         <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token string">\`json:&quot;root&quot;\`</span>
	Status            <span class="token builtin">uint64</span> <span class="token string">\`json:&quot;status&quot;\`</span>
	CumulativeGasUsed <span class="token builtin">uint64</span> <span class="token string">\`json:&quot;cumulativeGasUsed&quot; gencodec:&quot;required&quot;\`</span>
  <span class="token comment">// 日志布隆过滤器 关键日志索引集合</span>
	Bloom             Bloom  <span class="token string">\`json:&quot;logsBloom&quot;         gencodec:&quot;required&quot;\`</span>
	Logs              <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Log <span class="token string">\`json:&quot;logs&quot;              gencodec:&quot;required&quot;\`</span>

	<span class="token comment">// Implementation fields: These fields are added by geth when processing a transaction.</span>
	TxHash            common<span class="token punctuation">.</span>Hash    <span class="token string">\`json:&quot;transactionHash&quot; gencodec:&quot;required&quot;\`</span>
	ContractAddress   common<span class="token punctuation">.</span>Address <span class="token string">\`json:&quot;contractAddress&quot;\`</span>
	GasUsed           <span class="token builtin">uint64</span>         <span class="token string">\`json:&quot;gasUsed&quot; gencodec:&quot;required&quot;\`</span>
	EffectiveGasPrice <span class="token operator">*</span>big<span class="token punctuation">.</span>Int       <span class="token string">\`json:&quot;effectiveGasPrice&quot;\`</span> <span class="token comment">// required, but tag omitted for backwards compatibility</span>
	BlobGasUsed       <span class="token builtin">uint64</span>         <span class="token string">\`json:&quot;blobGasUsed,omitempty&quot;\`</span>
	BlobGasPrice      <span class="token operator">*</span>big<span class="token punctuation">.</span>Int       <span class="token string">\`json:&quot;blobGasPrice,omitempty&quot;\`</span>

	<span class="token comment">// Inclusion information: These fields provide information about the inclusion of the</span>
	<span class="token comment">// transaction corresponding to this receipt.</span>
	BlockHash        common<span class="token punctuation">.</span>Hash <span class="token string">\`json:&quot;blockHash,omitempty&quot;\`</span>
	BlockNumber      <span class="token operator">*</span>big<span class="token punctuation">.</span>Int    <span class="token string">\`json:&quot;blockNumber,omitempty&quot;\`</span>
	TransactionIndex <span class="token builtin">uint</span>        <span class="token string">\`json:&quot;transactionIndex&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有许多数据和交易中的信息是一样的，其他的信息之后再看吧</p>`,15);function U(z,O){const a=i("ExternalLinkIcon");return l(),c("div",null,[d,n("ul",null,[u,n("li",null,[v,s(" – 交易可以消耗的最大数量的燃料单位。 "),n("a",m,[s("以太坊虚拟机"),e(a)]),s("指定每个计算步骤所需的燃料单位")]),b,k]),g,h,q,_,n("p",null,[n("a",f,[s("JSON-RPC"),e(a)]),s(" 调用：")]),y,n("ul",null,[n("li",null,[x,s(" 是采用"),n("a",P,[s("递归长度前缀 (RLP) "),e(a)]),s("编码形式的签名交易")]),T]),G,I,j,E,n("p",null,[s("调用数据的其余部分是参数，"),n("a",L,[s("按照应用程序二进制接口规范中的规定进行编码"),e(a)]),s("。")]),n("p",null,[s("一下是某个"),n("a",w,[s("交易"),e(a)]),s("的data 数据："),F]),B,n("p",null,[s("执行交易需要耗费"),n("a",A,[s("燃料"),e(a)]),s("。 简单的转账交易需要 21000 单位燃料。")]),H,n("p",null,[s("以太坊最初有一种交易形式。 每笔交易都包含 Nonce、燃料价格、燃料限制、目的地地址、价值、数据、v、r 和 s。 这些字段为 "),n("a",N,[s("RLP 编码"),e(a)]),s("，看起来像这样：")]),S,n("p",null,[s("以太坊经过演变，已经支持多种类型的交易，从而能够在不影响传统交易形式的情况下实现访问列表和 "),n("a",C,[s("EIP-1559"),e(a)]),s(" 等新功能。")]),V,n("p",null,[n("a",R,[s("EIP-2718"),e(a)]),s("是允许这种行为的。 交易解释如下：")]),D])}const Y=o(r,[["render",U],["__file","transaction.html.vue"]]);export{Y as default};

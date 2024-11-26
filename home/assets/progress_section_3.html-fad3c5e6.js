import{_ as e,o,c as s,a as n}from"./app-00b5ba62.js";const a="/home/assets/statustransaction-f78cc213.png",d="/home/assets/dirtywrite-97f618ef.png",l="/home/assets/dirtyread-edb2e61c.png",i="/home/assets/nonrepeatableread-b07812e0.png",r="/home/assets/phantom-acccf42d.png",c="/home/assets/isolationlevel-b29f207b.png",t="/home/assets/chaintx-25a46b67.png",p="/home/assets/redologblock-7805d4db.png",u="/home/assets/redoprogress-5acaf975.png",m="/home/assets/redoflushdisk-c0812e1e.png",g="/home/assets/backpagefleushshs-c23efed3.png",h="/home/assets/aaaaa-1747ebf1.png",b="/home/assets/1111111-ae952126.png",v="/home/assets/2222222-93b0e983.png",_="/home/assets/000000-766c2b4b.png",f="/home/assets/minitxproreadsres-c063940f.png",k="/home/assets/writetobuffer-e8081ef9.png",y="/home/assets/mtrexample-cb8ea3c2.png",q="/home/assets/exampleresultmtr-74d78c65.png",x="/home/assets/innnodbredo-1120c6c2.png",T="/home/assets/rowddd-ac9f38c8.png",D="/home/assets/detail1-f243d0bc.png",S="/home/assets/detail2-0bbaaf1e.png",A="/home/assets/detail3-dc92b6e0.png",I="/home/assets/allprogress-7a0e6099.png",E={},B=n('<h1 id="高级-事务" tabindex="-1"><a class="header-anchor" href="#高级-事务" aria-hidden="true">#</a> 高级-事务</h1><h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2><p>目前的存储引擎中，只有innodb才支持事物。</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>**事务：**一组逻辑操作单元，使数据从一种状态变换到另一种状态。</p><p>**事务处理的原则：**保证所有事务都作为<code>一个工作单元</code>来执行，即使出现了故障，都不能改变这种执行方式。当在一个事务中执行多个操作时，要么事务中所有操作都被提交(<code>commit</code>)，那么这些修改就<code>永久</code>地保存下来；要么数据库管理系统将<code>放弃</code>所作的所有<code>修改</code>，整个事务回滚(<code>rollback</code>)到最初状态。</p><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><ul><li>原子性 atomicity：</li></ul><p>原子性是指事务是一个不可分割的工作单位，要么全部提交，要么全部失败回滚。</p><ul><li>一致性 consistency：</li></ul><p>一致性是指事务执行前后，数据从一个<code>合法状态</code>便换到另外一个<code>合法状态</code>。也就是数据状态变化前后的数据是保持一致的。</p><ul><li>隔离性 isolation：</li></ul><p>隔离性是指一个事务的执行不被其他事务干扰，即一个事务内部的操作及使用的数据对并发的其他事务是隔离的。</p><ul><li>持久性 durablity：</li></ul><p>持久性是指一个事务一旦被提交，他对数据库中数据的改变就是永久的。</p><p>持久性是通过事务日志来保证的，日志包括重做日志和回滚日志。当通过事务对数据进行修改的时候，首先会将数据库的变化信息记录到重做日志中，然后在对数据库中对应的进行修改。即使数据库系统奔溃，数据库重启之后也能根据重做日志重新执行，从而使事务具有持久性。</p><blockquote><p>原子性是基础，隔离性是手段，一致性是约束条件，持久性是目的。</p></blockquote><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3><p>MySQL根据操作所执行的不同阶段把事务分为几个状态：</p><ul><li><strong>活动的（active）</strong></li></ul><p>事务对应的数据库操作正在执行过程中。</p><ul><li><strong>部分提交的（partially committed）</strong></li></ul><p>当事务中的最后一个操作执行完成，但由于操作都在内存中执行，所造成的影响并没有刷新到磁盘时，就说事务处在部分提交状态。</p><ul><li><strong>失败的（failed）</strong></li></ul><p>当事务处在活动的或者部分提交的状态时，可能遇到了某些错误（数据库自身的错误、操作系统错误或者断电等等）而无法继续执行，或者人为的停止当前事务的执行，就说该事务处在失败状态。</p><ul><li><strong>中止的（aborted）</strong></li></ul><p>如果事务执行了一部分而变成失败的状态，那么需要将已经修改的事务中的操作还原到事务执行前状态。也就是要撤销失败事务对当前数据库造成的影响，这个撤销的过程叫做回滚，当回滚完毕后，说该事物处在中止状态。</p><ul><li><strong>提交的（committed）</strong></li></ul><p>当一个处在部分提交状态的事务将修改过的数据都同步到磁盘之后，说该事务处在提交状态。</p><p>基本的状态转换图如下：</p><img src="'+a+`" alt="screenshot2024-11-22 09.44.18" style="zoom:33%;"><h2 id="使用事务" tabindex="-1"><a class="header-anchor" href="#使用事务" aria-hidden="true">#</a> 使用事务</h2><p>使用事务分为两种方式：显示事务和隐式事务。</p><h3 id="显式事务" tabindex="-1"><a class="header-anchor" href="#显式事务" aria-hidden="true">#</a> 显式事务</h3><p><strong>步骤1：开启事务</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>BEGIN; // or
START TRANSACTION;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>START TRANSACTION;</code>相较于<code>BEGIN</code>特别之处在于，后面可以跟几个修饰符。</p><p>read only：标识当前事务是个只读事务，也就是该事务中的操作只能读取数据，不能修改数据。</p><blockquote><p>只读事务只是不允许修改那些其他事务也能访问到的数据，对于临时表来说（create temporary table），只能在当前会话中可见，只读事务其实是可以对临时表进行增删改操作的。</p></blockquote><p>read write（默认）：标识当前事务是一个读写事务，</p><p>with consistent snapshot：启动一致性读</p><p>比如：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>START TRANSACTION READ ONLY; #开启一个只读事务
START TRANSACTION READ ONLY,WITH CONSISTENT SNAPSHOT; #开启只读事务和一致性读
START TRANSACTION READ WRITE，WITH CONSISTENT SNAPSHOT #开启读写事务和一致性读
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤2：一系列操作</strong></p><p>一般是DML，不可能是DDL，因为DDL语句会自动把之前的语句作为一个transaction直接提交。</p><p><strong>步骤3：提交事务或者回滚事务</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>commit; # or
rollback; # or
# 或者回滚到某个保存点
rollback to [savepoint];
# 创建保存点
savepoint xxx;
# 删除保存点
release savepoint xxx;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式事务" tabindex="-1"><a class="header-anchor" href="#隐式事务" aria-hidden="true">#</a> 隐式事务</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;autocommit&#39;;
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | ON    |
+---------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>aotucommit默认是开启状态，在此状态下的每条DML语句都是一个独立的事务。</p><blockquote><p>注意：显示的使用begin等开启一个事务，那么在commit之前，autocommit是不会生效的。</p></blockquote><h3 id="隐式提交数据" tabindex="-1"><a class="header-anchor" href="#隐式提交数据" aria-hidden="true">#</a> 隐式提交数据</h3><ul><li><p>数据定义语言DDL</p><ul><li>当使用create、alter、drop等语句去修改数据库对象（数据库，表，视图，存储过程）时，就会隐式提交前面语句所属于的事务。</li></ul></li><li><p>隐式使用或修改mysql数据库中的表</p><ul><li>当使用alter user、create user、drop user、grant、rename user、revoke、set password等语句时也会隐式的提交前面语句所属的事务。</li></ul></li><li><p>事务控制或关于锁定的语句</p><ul><li><p>当在一个事务还没提交或者回滚时就又使用start transaction或者begin语句开启另一个事务，会隐式的提交上一个事务。</p></li><li><p>当前的autocommit变量为off，手动调为on时，也会隐式的提交前面语句所属的事务</p></li><li><p>使用lock tables、unlock tables等关于锁定的语句也会隐式的提交前面语句所属的事务。</p></li></ul></li><li><p>加载数据的语句</p><ul><li>使用load data语句来批量往数据库中导入数据时，也会隐式提交前面语句所属的事务。</li></ul></li></ul><p>还有一些其他的语句也会涉及隐式提交。</p><h3 id="completion-type" tabindex="-1"><a class="header-anchor" href="#completion-type" aria-hidden="true">#</a> completion.type</h3><p>completion.type参数会影响事务的行为。</p><ol><li><code>completion.type=0</code>，这是 <code>默认情况</code>。当执行COMMIT的时候会提交事务，在执行下一个事务时，还需要使用 <code>START TRANSACTION</code> 或者 <code>BEGIN</code> 来开启。</li><li><code>completion.type=1</code>，这种情况下，当提交事务后，相当于执行了COMMIT AND CHAIN，也就是开启一个链式事务，即当提交事务之后会开启一个相同隔离级别的事务。所以之后执行的语句需要再一次commit才会提交。然后又开启一个事务，套娃了。</li><li><code>completion.type=2</code>，这种情况下 <code>CONMIT=COMMIT AND RELEASE</code>，也就是当我们提交后，会自动与服务器断开连接。</li></ol><h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2><p>mysql是一个客户端/服务端架构的软件，对于同一个服务器来说，可以有若干客户端与之连接，没个客户端与服务器连接上之后，就可以称为一个会话session，没个客户端都可以在自己的会话中向服务器发出请求语句，一个请求语句可能是某个事物的一部分，也就是说对于服务器而言可能同时处理多个事务。因此事务的隔离性和同时处理多事务的性能需要权衡。</p><h3 id="数据并发问题" tabindex="-1"><a class="header-anchor" href="#数据并发问题" aria-hidden="true">#</a> 数据并发问题</h3><h4 id="脏写-修改丢失" tabindex="-1"><a class="header-anchor" href="#脏写-修改丢失" aria-hidden="true">#</a> 脏写（修改丢失）</h4><p>对于两个事务 Session A、Session B，如果事务Session A<code>修改了</code>另一个<code>未提交</code>事务Session B<code>修改过</code>的数据，那就意味着发生了<code>脏写</code>，也就是session B的修改丢失了。</p><img src="`+d+'" alt="screenshot2024-11-22 10.32.43" style="zoom:33%;"><h4 id="脏读" tabindex="-1"><a class="header-anchor" href="#脏读" aria-hidden="true">#</a> 脏读</h4><p>对于两个事务 Session A、Session B，Session A<code>读取</code>了已经被 Session B<code>更新</code>但还<code>没有被提交</code>的字段。之后若 Session B<code>回滚</code>，Session A<code>读取</code>的内容就是<code>临时且无效</code>的。</p><img src="'+l+'" alt="screenshot2024-11-22 11.20.38" style="zoom:33%;"><h4 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h4><p>对于两个事务Session A、Session B，Session A<code>读取</code>了一个字段，然后 Session B<code>更新</code>了该字段<code>且commit</code>。 之后Session A<code>再次读取</code>同一个字段，<code>值就不同</code>了。那就意味着发生了不可重复读。</p><img src="'+i+'" alt="screenshot2024-11-22 11.21.52" style="zoom:33%;"><h4 id="幻读phantom" tabindex="-1"><a class="header-anchor" href="#幻读phantom" aria-hidden="true">#</a> 幻读phantom</h4><p>对于两个事务Session A、Session B, Session A 从一个表中<code>读取</code>了一个字段, 然后 Session B 在该表中<code>插入</code>了一些新的行。 之后, 如果 Session A<code>再次读取</code>同一个表, 就会多出几行。那就意味着发生了幻读。</p><img src="'+r+'" alt="screenshot2024-11-22 11.23.12" style="zoom:33%;"><blockquote><p>注意:</p><p>如果Session B中<code>剔除了</code>一些符合<code>studentno &gt; 0</code>的记录而不是插入新记录，那么Session A之后再根据<code>studentno &gt; 0</code>的条件读取的<code>记录变少了</code>，这种现象算不算<code>幻读</code>呢？这种现象<code>不属于幻读</code>，幻读强调的是一个事物按照某个<code>相同条件多次读取</code>记录时，后读取时读到了之前<code>没有读到的记录</code>。那对于先前已经读到的记录，之后又读取不到这种情况，算啥呢？这相当于对每一条记录都发生了<code>不可重复读</code>的现象。</p></blockquote><h3 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h3><p>任何隔离级别都可以杜绝脏写。</p><ul><li><p>读未提交</p><ul><li>read uncommited：在该隔离级别，允许事务读取未被其他事务提交的变更。脏读，不可重复读，幻读都会出现。</li></ul></li><li><p>读已提交</p><ul><li>read commited：只允许事务读取已被其他事务提交的变更，可以避免脏读，不可重复读和幻读会出现。</li></ul></li><li><p>可重复读</p><ul><li>repeatable read：确保事务可以多次从一个字段读取相同的值，在这个事务持续期间，禁止其他事务对这个字段进行更新。可以避免脏读和不可重复读，幻读仍然存在。</li></ul></li><li><p>串行化</p><ul><li>serializable：确保事务可以从一个表中读取相同的行，在这个事务持续期间，禁止其他事务对该表执行插入、更新和删除操作，所有并发问题都能避免，但性能十分低下。</li></ul></li></ul><img src="'+c+`" alt="image-20220607120627113" style="zoom:50%;"><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># mysql8默认级别：
mysql&gt; show variables like &#39;transaction_isolation&#39;;
+-----------------------+-----------------+
| Variable_name         | Value           |
+-----------------------+-----------------+
| transaction_isolation | REPEATABLE-READ |
+-----------------------+-----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见事务分类" tabindex="-1"><a class="header-anchor" href="#常见事务分类" aria-hidden="true">#</a> 常见事务分类</h2><p>从事务理论的角度来看，可以把事务分为以下几种类型：</p><ul><li>扁平事务（Flat Transactions）</li><li>带有保存点的扁平事务（Flat Transactions with Savepoints）</li><li>链事务（Chained Transactions）</li><li>嵌套事务（Nested Transactions）</li><li>分布式事务（Distributed Transactions）</li></ul><p><strong>1、扁平事务：</strong></p><p>事务类型中最简单的一种，也是在实际生产环境中使用最频繁的一种，在扁平事务中，所有操作都处于同一层次，其由BEGIN开始，COMMIT或ROLLBACK结束，其间的操作是原子的，要么都执行，要么都回滚，因此，扁平事务是应用程序成为原子操作的基本组成模块。</p><p><strong>2、带有保存点的扁平事务：</strong></p><p>除了支持扁平事务支持的操作外，还允许在事务执行过程中回滚到同一事务中较早的一个状态。</p><p><strong>3、链事务：</strong></p><p>是指一个事务由多个子事务链式组成，他可以被视为保存点模式的一种变种。带有保存点的扁平事务，当发生系统崩溃时，所有的保存点都将消失，这意味着当进行恢复，事务需要从开始处重新执行，而不能从最近的一个保存点继续执行。链事务的思想是：提交一个事务时，释放不需要的数据对象，将必须要的处理上下文隐式的传给下一个要开始的事务，前一个子事务的提交操作和下一个子事务的开始操作合并成为一个原子操作，这意味着下一个事务将看到上一个事务的结果，就好像在一个事务中进行一样。这样，在提交子事务时就可以释放不需要的数据对象，而不必等到整个事务完成后才释放。</p><p><img src="`+t+'" alt="image-20220607170323917"></p><p>链事务与带有保存点的扁平事务的不同之处体现在：</p><p>带有保存点的扁平事务能回滚到任意准确的保存点，而链事务中的回滚仅限于当前事务，即只能恢复到最近的一个保存点；对于锁的处理，链事务在执行commit后即释放了当前所持有的锁，而带有保存点的扁平事务不影响迄今为止所持有的锁。</p><p><strong>4、嵌套事务：</strong></p><p>是一个层次结构框架，有一个顶层事务控制着各个层次的事务，顶层事务之下嵌套的事务被称为子事务，其控制着每一个局部的变换，子事务本身也可以是嵌套事务。</p><p><strong>5、分布式事务：</strong></p><p>通常是在一个分布式环境下运行的扁平事务，因此，需要根据数据所在位置访问网络中不同节点的数据库资源。例如不同银行之间的转账，就需要用到分布式事务，不能仅调用一家银行的数据库就完成任务。</p><h2 id="事务日志" tabindex="-1"><a class="header-anchor" href="#事务日志" aria-hidden="true">#</a> 事务日志</h2><p>事务的四种特性如何实现的？</p><ul><li>事务的隔离性由锁机制实现。</li><li>事务的原子性、一致性和持久性由事务的redo日志和undo日志来保证。 <ul><li>redo log称为重做日志，提供再写入操作，恢复提交事务修改的页操作，用来保证事务的持久性。</li><li>undo log称为回滚日志，回滚记录行到某个特定版本，用来保证事务的原子性和一致性。</li></ul></li></ul><p>有的DBA或许会认为UNDO是REDO的逆过程，其实不然。REDO和UNDO都可以视为是一种 <code>恢复操作</code>，但是：</p><ul><li>redo log：是存储引擎层(innodb)生成的日志，记录的是&quot;<code>物理级别</code>&quot;上的页修改操作，比如页号xx、偏移量yyy写入了&#39;zzz&#39;数据。主要为了保证数据的可靠性;</li><li>undo log：是存储引擎层(innodb)生成的日志，记录的是 <code>逻辑操作</code> 日志，比如对某一行数据进行了INSERT语句操作，那么undo log就记录一条与之相反的DELETE操作。主要用于 <code>事务的回滚</code>(undo log记录的是每个修改操作的 <code>逆操作</code> )和 <code>一致性非锁定读</code>(undo log回滚行记录到某种特定的版本---MVCC，即多版本并发控制)。</li></ul><h3 id="redo日志" tabindex="-1"><a class="header-anchor" href="#redo日志" aria-hidden="true">#</a> redo日志</h3><h4 id="为啥需要" tabindex="-1"><a class="header-anchor" href="#为啥需要" aria-hidden="true">#</a> 为啥需要</h4><p>InnoDB存储引擎是以 <code>页为单位</code> 来管理存储空间的。在真正访问页面之前，需要把在 <code>磁盘</code> 上的页缓存到内存中的 <code>Buffer Pool</code> 之后才可以访问。所有的变更都必须先更新缓冲池中的数据，然后缓冲池中的 <code>脏页</code> 会以一定的频率被刷入磁盘（<code>checkPoint机制</code>），通过缓冲池来优化CPU和磁盘之间的鸿沟，这样就可以保证整体的性能不会下降太快。</p><p>然而由于checkpoint并不是每次变更的时候就触发的，而是master线程隔一段时间去处理的，就有可能造成数据丢失。而如果采取立马刷盘策略，也就是每个事务提交后，立马将他改变的数据刷盘，这样效率太低了。因此就有了日志记录。每次把数据的改动存起来，计算崩溃了，能恢复过来也可以。</p><p><strong>InnoDB引擎的事务采用了WAL技术(<code>Write-Ahead Logging</code> )，这种技术的思想就是 <code>先写日志，再写磁盘</code>，只有日志写入成功，才算事务提交成功，这里的日志就是redo log。当发生宕机且数据未刷到磁盘的时候，可以通过redo log来恢复，保证ACID中的D，这就是redo log的作用。</strong></p><h4 id="好处-特点" tabindex="-1"><a class="header-anchor" href="#好处-特点" aria-hidden="true">#</a> 好处/特点</h4><p>好处：</p><ul><li>redo日志降低了刷盘频率</li><li>redo日志占用的空间非常小：存储表空间ID、页号、偏移量以及需要更新的值，所需的存储空间是很小的，刷盘快。</li></ul><p>特点：</p><ul><li>redo日志是顺序写入磁盘的 <ul><li>在执行事务的过程中，每执行一条语句，都可能产生若干条redo日志，这些日志是按照产生的顺序写入磁盘的，也就是顺序IO，效率比随机IO快。</li></ul></li><li>事务执行过程中，redo log不断记录 <ul><li>redo log跟bin log的区别，redo log是存储引擎层产生的。而bin log是数据库层产生的。</li></ul></li></ul><h4 id="组成" tabindex="-1"><a class="header-anchor" href="#组成" aria-hidden="true">#</a> 组成</h4><p>redo log可以简单分为两个部分：重做日志的缓冲、重做日志文件。</p><blockquote><p>重做日志缓冲：</p></blockquote><p>redo log buffer保存在内存中，是易失的。</p><p>在服务器启动时就向操作系统申请了一大片称之为redo log buffer的连续内存空间，这片内存空间被划分为若干连续的redo log block。一个block占用512字节大小。</p><img src="'+p+`" alt="redologblock" style="zoom:80%;"><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;%innodb_log_buffer_size%&#39;;
+------------------------+----------+
| Variable_name          | Value    |
+------------------------+----------+
| innodb_log_buffer_size | 16777216 |
+------------------------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>buffer大小默认是16M，最大4096M，最小1M。</p><blockquote><p>重做日志文件</p></blockquote><p>redo log file保存在硬盘中，是持久的。</p><h4 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h4><img src="`+u+'" alt="redoprogress" style="zoom:67%;"><p>第1步：先将原始数据从磁盘中读入内存中来，修改数据的内存拷贝</p><p>第2步：生成一条重做日志并写入redo log buffer，记录的是数据被修改后的值</p><p>第3步：当事务commit时，将redo log buffer中的内容刷新到 redo log file，对 redo log file采用追加写的方式</p><p>第4步：定期将内存中修改的数据刷新到磁盘中</p><h4 id="刷盘策略" tabindex="-1"><a class="header-anchor" href="#刷盘策略" aria-hidden="true">#</a> 刷盘策略</h4><p>redo log的写入并不是直接写入磁盘的，InnoDB引擎会在写redo log的时候先写redo log buffer，之后以 <code>一定的频率</code> 刷入到真正的redo log file 中。</p><img src="'+m+`" alt="image-20220607142033428" style="zoom:67%;"><blockquote><p>注意：redo log buffer刷盘到redo log file的过程并不是真正的刷到磁盘中去，只是刷入到<code>文件系统缓存</code>（page cache）中去（这是现代操作系统为了提高文件写入效率做的一个优化），真正的写入会交给系统自己来决定（比如page cache足够大了）。那么对于InnoDB来说就存在一个问题，如果交给系统来同步，同样如果系统宕机，那么数据也丢失了（虽然整个系统宕机的概率还是比较小的）。</p></blockquote><p>针对这种情况，InnoDB给出<code>innodb_flush_log_at_trx_commit</code>参数，该参数控制 commit提交事务时，如何将 redo log buffer 中的日志刷新到 redo log file 中。它支持三种策略：</p><ul><li><code>设置为0</code>：表示每次事务提交时不进行刷盘操作。（系统默认master thread每隔1s进行一次重做日志的同步）</li><li><code>设置为1</code>：表示每次事务提交时都将进行同步，刷盘操作（<code>默认值</code>）</li><li><code>设置为2</code>：表示每次事务提交时都只把 redo log buffer 内容写入 page cache，不进行同步。由os自己决定什么时候同步到磁盘文件。</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;innodb_flush_log_at_trx_commit&#39;;
+--------------------------------+-------+
| Variable_name                  | Value |
+--------------------------------+-------+
| innodb_flush_log_at_trx_commit | 1     |
+--------------------------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，InnoDB存储引擎有一个后台线程，每隔1s，就会把redo log buffer中的内容写到文件系统缓存（page cache）中，然后调用刷盘操作。</p><img src="`+g+'" alt="image-20220607232803037" style="zoom:67%;"><p>也就是说，一个没有提交事务的redo log记录们也可能会刷盘，因为在事务执行过程中redo log记录是会被写入redo log buffer中，这些redo log记录会被后台线程刷盘。</p><img src="'+h+`" alt="image-20220607233216957" style="zoom:67%;"><p>除了后台线程每秒1次的轮询操作，还有一种情况，当redo log buffer占用的空间即将达到innodb_log_buffer_size的一半时，后台线程也会主动刷盘。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;innodb_log_buffer_size&#39;;
+------------------------+----------+
| Variable_name          | Value    |
+------------------------+----------+
| innodb_log_buffer_size | 16777216 | # 16M
+------------------------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="刷盘策略演示" tabindex="-1"><a class="header-anchor" href="#刷盘策略演示" aria-hidden="true">#</a> 刷盘策略演示</h4><img src="`+b+'" alt="image-20220607142400505" style="zoom:67%;"><blockquote><p>小结:</p><p>innodb_flush_log_at_trx_commit=1</p><p>为1时，只要事务提交成功,<code>redo log</code>记录就一定在硬盘里，不会有任何数据丢失。</p><p>如果事务执行期间<code>MySQL</code>挂了或宕机，这部分日志丢了，但是事务并没有提交，所以日志丢了也不会有损失。可以保证ACID的D，数据绝对不会丢失，但是 <code>效率最差</code>的。</p><p>建议使用默认值，虽然操作系统宕机的概率理论小于数据库宕机的概率，但是一般既然使用了事务，那么数据的安全相对来说更重要些。</p></blockquote><img src="'+v+'" alt="image-20220607142417626" style="zoom:67%;"><blockquote><p>小结innodb_flush_log_at_trx_commit=2</p><p>为2时，只要事务提交成功,redo log buffer中的内容只写入文件系统缓存（ page cache )。</p><p>如果仅仅只是MySQL挂了不会有任何数据丢失，但是操作系统宕机可能会有1秒数据的丢失，这种情况下无法满足ACID中的D。但是数值2肯定是效率最高的。</p></blockquote><img src="'+_+'" alt="image-20220607142425384" style="zoom:67%;"><blockquote><p>小结: innodb_flush_log_at_trx_commit=0</p><p>为0时,master thread中每1秒进行一次重做日志的fsync操作，因此实例crash最多丢失1秒钟内的事务。(master thread是负责将缓冲池中的数据异步刷新到磁盘，保证数据的一致性)</p><p>innodb_flush_log_at_trx_commit=0的话，是一种折中的做法，它的IO效率理论是高于1的，低于2的，这种策略也有丢失数据的风险，也无法保证D。</p></blockquote><h4 id="写入buffer过程" tabindex="-1"><a class="header-anchor" href="#写入buffer过程" aria-hidden="true">#</a> 写入buffer过程</h4><p>Mini-Transaction：MySQL把对底层页面中的一次原子访问的过程称之为一个<code>Mini-Transaction</code>，简称<code>mtr</code>，比如像某个索引对应的B+Tree中插入一条记录的过程就是一个mtr，一个所谓的mtr可以包含一组redo日志（修改一次B+Tree可能修改多个物理位置），在进行奔溃恢复时，这一组redo日志作为一个不可分割的整体。</p><img src="'+f+'" alt="image-20220607142816249" style="zoom:50%;"><p><strong>redo日志写入log buffer</strong></p><p>向<code>log buffer</code>中写入redo日志的过程是顺序的，也就是先往前边的block中写，当该block的空闲空间用完之后再往下一个blcok中写。有一个<code>buf_free</code>来记录当前偏移量。</p><img src="'+k+'" alt="image-20220608094545215" style="zoom:67%;"><p>一个mtr过程可能产生若干条redo日志，这些redo日志是一个不可分割的组，所以其实并不是每生成一条redo日志，就将其插入到log buffer中，而是每个mtr运行过程中产生的日志先暂时存放到一个地方，当该mtr结束的时候，将该过程中产生的一组redo日志再全部复制到log buffer中。比如有如下例子：</p><img src="'+y+'" alt="image-20220607143023061" style="zoom:80%;"><p>那么最终他可能写入的结果如下：</p><img src="'+q+'" alt="image-20220607143121663" style="zoom:80%;"><p><strong>redo log block结构图</strong></p><p>一个redo log block是由 <code>日志头</code>、<code>日志体</code>、<code>日志尾组成</code>。日志头占用12字节，日志尾占用8字节，所以一个block真正能存储的数据就是512-12-4=496字节。</p><blockquote><p><code>为什么一个block设计成512字节?</code> 这个和磁盘的扇区有关，机械磁盘默认的扇区就是512字节，如果要写入的数据大于512字节，那么要写入的扇区肯定不止一个，这时就要涉及到盘片的转动，找到下一个扇区，假设现在需要写入两个扇区A和B，如果扇区A写入成功，而扇区B写入失败，那么就会出现 <code>非原子性</code>的写入，而如果每次只写入和扇区的大小一样的512字节，那么每次的写入都是原子性的。</p></blockquote><h4 id="log-file" tabindex="-1"><a class="header-anchor" href="#log-file" aria-hidden="true">#</a> log file</h4><p>网上一些教程的逻辑已经不是最新的方案了</p><p>从 MySQL 8.0.30 开始，redo log 文件被组织在一个专用的子目录 <code>#innodb_redo</code> 下。</p><img src="'+x+`" alt="screenshot2024-11-22 15.44.46" style="zoom:50%;"><p><strong>多文件存储</strong>：从 MySQL 8.0.30 开始，redo log 默认存储在 #innodb_redo 子目录中，文件被分片存储，而不是原先单一或双文件（ib_logfile0, ib_logfile1）。</p><p><strong>循环写入</strong>：redo log 文件以循环方式写入。当一个文件写满时，切换到下一个文件，依次循环。</p><p>很奇怪查innodb_log_files_in_group这个又是2，按道理不应该啊。算了。</p><h3 id="undo日志" tabindex="-1"><a class="header-anchor" href="#undo日志" aria-hidden="true">#</a> Undo日志</h3><p><strong>redo log是事务持久性的保证，undo log是事务原子性的保证</strong>。在事务中更新数据的前置操作其实是要先写入一个undo log。</p><h4 id="理解" tabindex="-1"><a class="header-anchor" href="#理解" aria-hidden="true">#</a> 理解</h4><p>事务需要保证<code>原子性</code>，也就是事务中的操作要么全部完成，要么什么也不做。但有时候事务执行到一半会出现一些情况，比如：</p><ul><li>情况一：事务执行过程中可能遇到各种错误，比如<code>服务器本身的错误</code>，<code>操作系统错误</code>，甚至是突然<code>断电</code>导致的错误。</li><li>情况二：程序员可以在事务执行过程中手动输入<code>ROLLBACK</code>语句结束当前事务的执行。</li></ul><p>以上情况出现，需要把数据改回原先的样子，这个过程称之为<code>回滚</code>，这样就可以造成一个假象：这个事务看起来什么都没做，所以符合<code>原子性</code>要求。</p><p>每当要对一条记录做改动时(这里的 <code>改动</code> 可以指<code>INSERT</code>、<code>DELETE</code>、<code>UPDATE</code> )，都需要&quot;留一手&quot;——把回滚时所需的东西记下来。比如：</p><ul><li><code>插入一条记录时</code>，至少要把这条记录的主键值记下来，之后回滚的时候只需要把这个主键值对应的记录删掉就好了。(对于每个INSERT，InnoDB存储引擎会完成一个DELETE)</li><li><code>删除了一条记录</code>，至少要把这条记录中的内容都记下来，这样之后回滚时再把由这些内容组成的记录插入到表中就好了。(对于每个DELETE，InnoDB存储引擎会执行一个INSERT)</li><li><code>修改了一条记录</code>，至少要把修改这条记录前的旧值都记录下来，这样之后回滚时再把这条记录更新为旧值就好了。(对于每个UPDATE，InnoDB存储引擎会执行一个相反的UPDATE，将修改前的行放回去)</li></ul><p>MySQL把这些为了回滚而记录的这些内容称之为 <code>撤销日志</code> 或者 <code>回滚日志</code>(即undo log )。注意，由于查询操作( <code>SELECT</code>）并不会修改任何用户记录，所以在查询操作执行时，<code>并不需要记录</code> 相应的undo日志。</p><p>此外，undo log <code>会产生redo log</code>，也就是undo log的产生会伴随着redo log的产生，这是因为undo log也需要持久性的保护。</p><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4><ul><li><p><strong>作用1：回滚数据</strong></p><p>用户对undo日志可能 <code>有误解</code>：undo用于将数据库物理地恢复到执行语句或事务之前的样子。但事实并非如此。undo是 <code>逻辑日志</code>，因此只是将数据库逻辑地恢复到原来的样子。所有修改都被逻辑地取消了，但是数据结构和页本身在回滚之后可能大不相同。</p><p>这是因为在多用户并发系统中，可能会有数十、数百甚至数千个并发事务。数据库的主要任务就是协调对数据记录的并发访问。比如，一个事务在修改当前一个页中某几条记录，同时还有别的事务在对同一个页中另几条记录进行修改。因此，不能将一个页回滚到事务开始的样子，因为这样会影响其他事务正在进行的工作。</p></li><li><p><strong>作用2：MVCC（后面再说）</strong></p><p>undo的另一个作用是MVCC，即在InnoDB存储引擎中MVCC的实现是通过undo来完成。当用户读取一行记录时，若该记录已经被其他事务占用，当前事务可以通过undo读取之前的行版本信息，以此实现非锁定读取。</p></li></ul><h4 id="存储结构" tabindex="-1"><a class="header-anchor" href="#存储结构" aria-hidden="true">#</a> 存储结构</h4><p><strong>回滚段与undo页</strong></p><p>InnoDB对undo log的管理采用段的方式，也就是<code>回滚段（rollback segment）</code>。每个回滚段记录了<code>1024</code>个<code>undo log segment</code>，而在每个undo log segment段中进行<code>undo页</code>的申请。</p><ul><li><code>innodb_undo_direclory</code>：设置rollback segment文件所在的路径。这意味着rollback segment可以存放在共享表空间以外的位置，即可以设置为独立表空间。该参数的默认值为&quot;./&quot;，表示当前InnoDB存储引擎的目录。</li><li><code>innodb_undo_tablespaces</code> :设置构成rollback segment文件的数量，默认为2，这样rollback segment可以较为平均地分布在多个文件中。设置该参数后，会在路径innodb_undo_directory看到undo为前缀的文件，该文件就代表rollback segment文件。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-rw-r-----    <span class="token number">1</span> _mysql  _mysql   <span class="token number">33554432</span> <span class="token number">11</span> <span class="token number">21</span> <span class="token number">13</span>:57 undo_001
-rw-r-----    <span class="token number">1</span> _mysql  _mysql   <span class="token number">16777216</span> <span class="token number">11</span> <span class="token number">21</span> <span class="token number">13</span>:54 undo_002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里还有一些如何记录的东西，什么undo页的重用，purge线程清理undo页等，这些教程没写清楚，后面再说吧</p><h4 id="undo的类型" tabindex="-1"><a class="header-anchor" href="#undo的类型" aria-hidden="true">#</a> undo的类型</h4><p>在InnoDB存储引擎中，undo log分为：</p><ul><li><p>insert undo log</p><p>insert undo log是指在insert操作中产生的undo log。因为insert操作的记录，只对事务本身可见，对其他事务不可见(这是事务隔离性的要求)，故<strong>该undo log可以在事务提交后直接删除</strong>。不需要进行purge操作。</p></li><li><p>update undo log</p><p>update undo log记录的是对delete和update操作产生的undo log。该undo log可能需要提供MVCC机制，因此不能在事务提交时就进行删除。<strong>提交时放入undo log链表，等待purge线程进行最后的删除</strong>。</p></li></ul><blockquote><p>补充: purge线程两个主要作用是: <code>清理undo页</code> 和 <code>清除page里面带有Delete_Bit标识的数据行</code>。在InnoDB中，事务中的Delete操作实际上并不是真正的删除掉数据行，而是一种Delete Mark操作，在记录上标识Delete_Bit，而不删除记录。是一种&quot;假删除&quot;;只是做了个标记，真正的删除工作需要后台purge线程去完成。</p></blockquote><h4 id="详细举例" tabindex="-1"><a class="header-anchor" href="#详细举例" aria-hidden="true">#</a> 详细举例</h4><p>对于InnoDB引擎来说，每个行记录除了记录本身的数据之外，还有几个隐藏的列:</p><ul><li><code>DB_ROW_ID</code>：如果没有为表显式的定义主键，并且表中也没有定义唯一索引，那么InnoDB会自动为表添加一个row_id的隐藏列作为主键。</li><li><code>DB_TRX_ID</code>：每个事务都会分配一个事务ID，当对某条记录发生变更时，就会将这个事务的事务ID写入trx_id中。</li><li><code>DB_ROLL_PTR</code>：回滚指针，本质上就是指向undo log的指针。</li></ul><img src="`+T+`" alt="image-20220607145325577" style="zoom:67%;"><p><strong>1、执行INSERT时：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">begin</span><span class="token punctuation">;</span> 
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>插入的数据都会生成一条insert undo log，并且数据的回滚指针会指向它。undo log会记录undo log的序号、插入主键的列和值...，那么在进行rollback的时候，通过主键直接把对应的数据删除即可。</p><img src="`+D+`" alt="image-20220607145333048" style="zoom:67%;"><p><strong>2、再执行update</strong></p><p>对于更新的操作会产生update undo log，并且会分更新主键的和不更新主键的，假设现在执行:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> name<span class="token operator">=</span><span class="token string">&quot;sun&quot;</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+S+`" alt="image-20220607145340695" style="zoom:67%;"><p>这时会把老的记录写入新的undo log，让回滚指针指向新的undo log，它的undo no是1，并且新的undo log会指向老的undo log (undo no=0)。</p><p><strong>3、再执行update id</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> id<span class="token operator">=</span><span class="token number">2</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+A+'" alt="image-20220608093742058" style="zoom:67%;"><p>对于更新主键的操作，会先把原来的数据deletemark标识打开，这时并没有真正的删除数据，真正的删除会交给清理线程去判断，然后在后面插入一条新的数据，新的数据也会产生undo log，并且undo log的序号会递增。可以发现每次对数据的变更都会产生一个undo log，当一条记录被变更多次时，那么就会产生多条undo log，undo log记录的是变更前的日志，并且每个undo log的序号是递增的，那么当要回滚的时候，按照序号 <code>依次向前推</code>，就可以找到我们的原始数据了。</p><p><strong>4、执行回滚：</strong></p><p>以上面的例子来说，假设执行rollback，那么对应的流程应该是这样：</p><ol><li>通过undo no=3的日志把id=2的数据删除</li><li>通过undo no=2的日志把id=1的数据的deletemark还原成0</li><li>通过undo no=1的日志把id=1的数据的name还原成Tom</li><li>通过undo no=0的日志把id=1的数据删除</li></ol><h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h3><img src="'+I+'" alt="image-20220608093513841" style="zoom:67%;">',209),N=[B];function R(z,C){return o(),s("div",null,N)}const M=e(E,[["render",R],["__file","progress_section_3.html.vue"]]);export{M as default};
import{_ as i,o as e,c as n,a as l}from"./app-2cd98865.js";const d={},t=l(`<h1 id="排序与查找" tabindex="-1"><a class="header-anchor" href="#排序与查找" aria-hidden="true">#</a> 排序与查找</h1><h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><blockquote><p>排序定义</p></blockquote><p>给定一组记录r~1~，r~2~......r~n~，其关键码分别为k~1~, k~2~......k~n~，排序问题就是将这些记录排成顺序为r~s1~, r~s2~......r~sn~，的一个序列，满足k~s1~ &lt;= k~s2~ &lt;= ...... &lt;=k~sn~</p><blockquote><p>算法的稳定性</p></blockquote><p>若待排序表中有两个元素R~i~和R~j~，其对应关键字相同，且在排序前R~i~在R~j~前面，若是用一种排序算法排序后，R~i~仍然在R~j~前面，则这个排序算法就是稳定的，否则就是不稳定的。</p><p>稳定性并不能衡量一个算法的优劣，只是对算法性质的描述。</p><blockquote><p>算法分类</p></blockquote><p>交换类：冒泡排序，快速排序</p><p>选择类：选择排序，堆排序</p><p>插入类：插入排序，希尔排序</p><p>归并类：归并排序</p><p>分配式：分配排序，基数排序</p><blockquote><p>性能分析</p></blockquote><p>关键码比较次数</p><p>记录交换的次数</p><blockquote><p>根据内存分类</p></blockquote><p>内部排序：在排序期间，元素全部存放在内存中的排序</p><p>外部排序：在排序期间元素无法全部同时存放在内存中，必须在排序的过程中根据要求不断地在内、外存之间移动的排序。</p><h3 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h3><blockquote><p>基本思想</p></blockquote><p>比较并交换相邻元素对，直到所有元素都被放到了正确的地方</p><blockquote><p>过程</p></blockquote><p>输入一个记录数组A，存放n条记录</p><p>每次从数组的最后开始，将第n-1个位置的值与第n-2个位置的值比较，若为逆序，则交换，然后比较第n-2个位置和第n-3个位置，依次处理，直到第2个位置和第1个位置进行处理</p><p>重复以上过程n-1次，重复过程中不在处理前一趟已经确定好的元素。结果得到一个非递减有序排列。</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void bubsort(Elem A[], int n) {
    for (int i = 0; i &lt; n - 1; i++) {
        for (int j = n - 1; j &gt; i; j--) {
            if (comp::lt(A[j], A[j-1]))
                swap(A, j, j-1);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能分析</p></blockquote><p>空间复杂度：常数空间O(1)</p><p>空间复杂度：最坏和平均都需要O(n^2^)</p><blockquote><p>特点</p></blockquote><p>稳定排序</p><h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h3><blockquote><p>基本思想</p></blockquote><p>逐个处理待排序的记录，每个新纪录与前面与排序的子序列进行比较，将它插入到子序列中正确的位置</p><blockquote><p>过程</p></blockquote><p>现将数组中第一个记录看成是一个有序的子序列，然后从第2个记录开始，依次进行处理，将第i个记录X，依次与前面第i-1个、第i-2个......第1个记录进行比较，每次比较时，如果X的值小，则交换，直到遇到一个小于等于X的记录，或者记录X已经被交换到第一个位置，本次插入完成。</p><p>依次往后处理，直到最后一个记录插入完毕，整个数组按非递减有序排列</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void inssort(Elem A[], int n) {
    for (int i = 1; i &lt; n; i++) {
        for (int j = i; (j&gt;0) &amp;&amp; (comp::lt(A[j], A[j-1])); j--)
            swap(A, j, j-1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能分析</p></blockquote><p>最佳情况：已经有序，则比较n-1次，交换0次，时间复杂度为O(n)</p><p>最差情况：初始是逆序，每次都需要比较并交换，时间复杂度为O(n^2^)</p><p>平均情况：时间代价为最差的一半，仍为O(n^2^)</p><blockquote><p>特点</p></blockquote><p>简单，稳定排序</p><h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h3><blockquote><p>基本思想</p></blockquote><p>第i次选择时，选择序列中第i小的记录并将该纪录放到系列的第i个位置上</p><blockquote><p>过程</p></blockquote><p>对于n个记录的数组，共进行n-1趟排序</p><p>每一趟在n-i+1个（i=1,2...n-1）记录中通过n-i次关键字比较选出关键码最小的记录和第i个记录进行交换</p><p>经过n-1趟，数组元素非递减排列</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void selsort(Elem A[], int n) {
    for (int i = 0; i &lt; n - 1; i++) {
        int lowindex = i;
        for (int j = n - 1; j &gt; i; j--) 
            if (comp::lt(A[j], A[lowindex]))
                lowindex = j;
        swap(A, i, lowindex);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能分析</p></blockquote><p>O(n^2^)</p><blockquote><p>特点</p></blockquote><p>不稳定排序</p><h3 id="shell希尔排序" tabindex="-1"><a class="header-anchor" href="#shell希尔排序" aria-hidden="true">#</a> shell希尔排序</h3><blockquote><p>基本思想</p></blockquote><p>先将整个待排记录序列分割成若干个较小的子序列，对子序列分别及逆行插入排序，然后把有序子序列组合起来，带整个序列中的记录基本有序之后，在对全体记录进行一次插入排序</p><blockquote><p>过程</p></blockquote><p>输入一个记录数组A，存放着n条记录，以及一个（递减）增量序列数组</p><p>按照地政的次序，对于每一个增量：</p><p>从数组的位置1开始，根据增量计算出子序列的最后一个值得位置，然后调用基于增量的插入排序函数；</p><p>从数组的位置2开始，执行上述重复动作，以此类推，计算出当前增量F的所有子序列，并排序</p><p>一次处理下一个增量，直至增量为1，执行一次标准的简单插入排序</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void shellsort(Elem A[], int n) {
    for (int i = n/2; i &gt; 2; i/=2) {    // 增量
        for (int j=0; j&lt;i; j++) {
            inssort2(&amp;A[j], n-j, i);    // 注意这里是&amp;A[j]，然后传过去n-j作为上限，妙
        }
    }
    inssort(A, n, 1);
}

void inssort2(Elem A[], int n, int incr) {
    for (int i = incr; i &lt; n; i+=incr) {
        for (int j=i; (j&gt;=incr) &amp;&amp; (comp::lt(A[j], A[j-incr])); j-=incr)
            swap(A, j, j-incr);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能分析</p></blockquote><p>空间复杂度为O(1)；</p><p>时间复杂度：当n处于一个特点范围内时，时间复杂度为O(n^1.3^)；在最坏情况下为O(n^2^)；</p><blockquote><p>特点</p></blockquote><p>不稳定排序</p><p>时间复杂度取决于增量的序列的选择</p><blockquote><p>注意点</p></blockquote><p>增量序列可以有多种取法，但是应当使增量序列中的值没有除1之外的公因子，并且最后一个增量值必须为1</p><h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h3><blockquote><p>基本思想</p></blockquote><p>在待排序记录中选取一个记录R（称为轴值pivot），通过一趟排序将其余待排序记录分割成独立的两部分，比R小的记录放在R前面，比R大的记录放在R后面，然后对R前后两个部分记录分别继续进行同样的划分进行排序，直至待排序序列长度等于1，这时整个序列有序。</p><blockquote><p>过程(递归)</p></blockquote><p>若当前（未排序）序列的长度不大于1，返回当前序列，否则</p><p>在待排序序列记录中选择一个记录作为轴值，通过划分算法将其余待排序记录划分为两部分，比R记录放在R前面，比R大的记录放在R后面；</p><p>分别用快速排序对前后两个子序列进行排序</p><p>具体选择轴值，划分序列过程：</p><ul><li>记录数组A，待排序子序列左右两端的下标i和j，选取待排序序列中间位置的记录为轴值，交换轴值和位置j的值</li><li>依据在位置j的轴值，将数组i-1到j之间的待排序记录划分为两个部分（i到k-1之间的记录比轴值小，k到j-1之间的记录比轴值大）</li><li>从数组i-1到j之间的待排序序列两端向中间移动下标，必要时进行交换，直到两端的下标相遇，相遇位置为k</li><li>交换轴值和k位置的值</li></ul><blockquote><p>伪代码(重要)</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void qsort(Elem A[], int i, int j) {
    if(j &lt;= i) return;
    int pivotindex = findpivot(A, i, j);  // 选择轴值
    swap(A, pivotindex, j);  // 将轴值交换至最后一个位置
    int k = partition(A, i-1, j, A[j]);   // 下标的选择---重要
    swap(A, k, j);
    qsort(A, i, k-1);
    qsort(a, k+1, j);
}
int findpivot(Elem A, int i, int j) {
    return (i + j) / 2;
}
int partition(Elem A[], int i, int r, Elem&amp; pivot) {
    do {
        // 注意是先++和先--
        while(comp::prior(A[++i], pivot));  // 从左边找第一个比轴值大的值
        while((l &lt; r) &amp;&amp; comp::prior(pivot, A[--r]));  // 从右边找第一个比轴值小的值
        swap(A, l, r);  // 进行交换
    } while(l &lt; r);  // 重复查找交换，直至相遇
    return l;  // 返回相遇位置
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能</p></blockquote><p>找轴值：常熟时间</p><p>划分：O(s)，s是数组长度</p><p>最差情况：糟糕分割O(n^2^)</p><p>最佳情况：每次分割等长两部分O(nlogn)</p><p>平均情况：O(nlogn)</p><p>需要辅助栈空间，空间复杂度为O(logn)</p><blockquote><p>特点</p></blockquote><p>不稳定排序</p><p>轴值取值影响性能</p><p>最快排序，时间性能最佳</p><h3 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h3><blockquote><p>基本思想</p></blockquote><p>将两个或多个有序表归并成一个有序表</p><p>2路归并：</p><ol><li>设有n个待排记录，初始时将他们分为n个长度为1的有序子序列</li><li>两两归并相邻有序子表，得到若干个长度为2的有序子列表</li><li>重复上一步，直到得到一个长度为n的有序表</li></ol><blockquote><p>过程，递归</p></blockquote><p>若当前未排序序列长度不大于1，返回当前序列，否则：</p><p>将当前未排序序列分割成大小相等的两个子序列</p><p>分别用归并排序对两个子序列进行排序</p><p>将返回的两个有序子序列合并成一个有序序列</p><p>合并序列过程如下：</p><p>记录数组A，起始位置left，结束位置right，中间点mid</p><p>首先将两个子序列复制到辅助数组中</p><p>首先对辅助数组中两个子序列的第一条记录进行比较，并把较小的记录作为合并数组中的第一个记录，复制到原数组的第一个位置上</p><p>继续使用这个方法，不断比较两个子序列中未被处理的记录，并把较小的记录依次放到合并数组中，直到两个子序列的全部记录处理完毕（需要注意检查两个子数组中的一个被处理完时，但另一个未处理完，只需要直接复制未处理的记录即可）</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void mergesort(Elem A[], Elem tem[], int left, int right) {
    int mid = (left + right) / 2;
    if(left == right)
        return;
    mergesort(A, temp, left, mid);
    mergesort(A, teml, mid+1, right);
    for (int i = left; i &lt;= right; i++)  // 赋值到临时数组
        temp[i] = A[i];
    int i1 = left, i2 = mid + 1;
    for (int curr = left; curr &lt;= right; curr++) {
        if (i1 == mid+1)  // 左边处理完
            A[curr] = temp[i2++];
        else if (i2 &gt; right)  // 右边处理完
            A[curr] = temp[i1++];
        else if (comp::lt(temo[i1], temp[i2]))
            A[curr] = temp[i1++];
        else
            A[curr] = temp[i2++];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能</p></blockquote><p>三种情况均为O(nlogn)</p><p>空间代价需要两倍数组大小，为O(n)</p><blockquote><p>特点</p></blockquote><p>稳定</p><p>归并需要logn趟</p><h3 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h3><blockquote><p>基本思想</p></blockquote><p>首先将数值转换为一个满足堆定义的序列</p><p>然后将堆顶的最值取出，再将剩下的数组排成堆，再取堆顶数值......</p><p>如此下去，直到堆为空，就得到一个有序序列</p><blockquote><p>过程</p></blockquote><p>1、建堆：将输入序列用数组存储，利用堆的构建函数将数组转换为一个满足堆定义的序列（假设为最大值堆）</p><p>2、然后，将堆顶元素取出，再将剩下的数排成堆，再取堆顶数值，直到堆为空</p><p>3、每次应将堆顶的最大元素放在数组的最后</p><p>4、最后得到一个升序的序列</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void heapsort(Elem A[], int n) {
    Elem mval;
    maxheap H(A, n, n);
    for(int i=0; i&lt;n; i++)
        H.removemax(mval);   // 堆提供的函数
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能分析</p></blockquote><p>建堆O(n)，n次去最大元素O(logn)，总时间代价为O(nlogn)</p><p>空间复杂度为O(1)</p><blockquote><p>特点</p></blockquote><p>整棵树是平衡的，数组空间利用率高</p><p>不稳定排序</p><h3 id="分配排序" tabindex="-1"><a class="header-anchor" href="#分配排序" aria-hidden="true">#</a> 分配排序</h3><blockquote><p>基本思想</p></blockquote><p>关键码用来确定一个记录在排序的最终位置</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void binsort(Elem A[], int n) {
    List&lt;E&gt; B[maxKeyValue];
    Elem item;
    for(int i=0; i&lt;n; i++)
        B[A[i]].append(getkey::(A[i]));
    for (int j=0; j&lt;maxkeyvalue; j++)
        for (B[i].setstart(); B[i].getvalue(item); B[i].next())
            output(item);
}// 类似于哈希散列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能</p></blockquote><p>时间：O(n + maxkeyvalue)</p><p>空间：O(n + maxkeyvalue)</p><p>如果maxkeyvalue很大，性能就差</p><blockquote><p>典型</p></blockquote><p>桶式排序：</p><p>将序列中的元素分配到一组桶中</p><p>每个桶分别排序</p><p>依次遍历每个桶，有序放回</p><blockquote><p>特点</p></blockquote><p>不进行关键码比较，适用于外排序，稳定排序</p><h3 id="基数排序" tabindex="-1"><a class="header-anchor" href="#基数排序" aria-hidden="true">#</a> 基数排序</h3><blockquote><p>基本思想</p></blockquote><p>将关键码看成若干个关键字复合而成</p><p>然后对每个关键字进行基数排序</p><p>依次重复，最终得到一个有序序列</p><blockquote><p>过程</p></blockquote><p>将所有待排序数值（正整数）按照基数r统一为同样的数位长度，数位较短的数前面补零</p><p>然后从低位开始，依次进行每趟基数排序：</p><p>定义一个长度为r的辅助数组cnt，记录每个盒子里有多少个元素，初始值为0；定义一个和原数组A一样大小的数组B；</p><p>一次处理每个元素，根据元素的值计算其盒子编号，统计出每个盒子需要存放的记录值，（cnt[j]存储了数位j（第j个盒子）在这一趟排序时分配的记录数）</p><p>利用cnt的值，计算该盒子在数组B中的（最后一个）下标位置，从后往前，一次把数组A中的元素，依据元素在cnt中记录的下标，把元素存入到数组B的相应位置。</p><p>将数组B的值依次复制到数组A，进行下一趟排序。</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void radix(Elem A[], Elem B[], int n, int k, int r, int cnt[]) {
    int j;
    for(int i=0, rtok=1; i&lt;k; i++,rtok*=r) { // k数据位数，排序趟数，一般为个、十、百..位
        for(j=0; j&lt;r; j++)
            cnt[j] = 0;  // 初始化
        for(j=0; j&lt;n; j++)
            cnt[(A[j]/rtok)&amp;r]++;  // 统计每个盒子数据个数
        for(j=1; j&lt;r; j++)
            cnt[j] = cnt[j-1]+cnt[j];  // 得到每个盒子开始位置，其实也就是序号
        for(j=n-1; j&gt;=0; j--)
            b[--cnt[(A[j]/rtok)%r]] = A[j];  // 将数据存到B中
        for(j=0; j&lt;n; j++)
            A[j] = B[j];  // B-&gt;A
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能分析</p></blockquote><p>时间O(nk + rk)，n记录数，k趟数，r基数（cnt大小）</p><p>如果关键码很小，则为O(n)，如果有n个不同的关键码，关键码长度最小要logn</p><p>因而，一般情况下为O(nlogn)</p><p>空间复杂度O(n)</p><blockquote><p>特点</p></blockquote><p>对一些数据类型难实现</p><p>记录数目大于关键码长度则效率高</p><p>稳定排序</p><h3 id="各排序比较表" tabindex="-1"><a class="header-anchor" href="#各排序比较表" aria-hidden="true">#</a> 各排序比较表</h3><table><thead><tr><th></th><th>最佳</th><th>平均</th><th>最差</th><th>空间</th><th>稳定性</th><th>排序方法</th></tr></thead><tbody><tr><td>直接插入排序</td><td>n</td><td>n^2^</td><td>n^2^</td><td>1</td><td>y</td><td>插入</td></tr><tr><td>冒泡排序</td><td>n^2^</td><td>n^2^</td><td>n^2^</td><td>1</td><td>y</td><td>交换</td></tr><tr><td>简单选择排序</td><td>n^2^</td><td>n^2^</td><td>n^2^</td><td>1</td><td>n</td><td>选择</td></tr><tr><td>希尔排序</td><td>nlogn</td><td>nlog^2^n</td><td>nlog^2^n</td><td>1</td><td>n</td><td>插入</td></tr><tr><td>快速排序</td><td>nlogn</td><td>nlogn</td><td>n^2^</td><td>logn-n</td><td>n</td><td>交换</td></tr><tr><td>归并排序</td><td>nlogn</td><td>nlogn</td><td>nlogn</td><td>n</td><td>y</td><td>归并</td></tr><tr><td>堆排序</td><td>nlogn</td><td>nlogn</td><td>nlogn</td><td>1</td><td>n</td><td>选择</td></tr><tr><td>桶式排序</td><td>n+r</td><td>n+r</td><td>n+r</td><td>n+r</td><td>y</td><td>非比较</td></tr><tr><td>基数排序</td><td>nk+rk</td><td>nk+rk</td><td>nk+rk</td><td>n+2^k^</td><td>y</td><td>非比较</td></tr></tbody></table><h2 id="查找算法" tabindex="-1"><a class="header-anchor" href="#查找算法" aria-hidden="true">#</a> 查找算法</h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><blockquote><p>查找</p></blockquote><p>在数据集合中寻找满足条件的数据元素的过程</p><blockquote><p>查找表</p></blockquote><p>用于查找的数据集合，有同一类型数据组成</p><p>静态查找表：无需动态的修改查找表；适合的查找方法：顺序查找，折半查找，散列查找</p><p>动态查找表：需要动态的插入和删除查找表；适合的查找方法：二叉搜索树查找，散列查找</p><blockquote><p>平均查找长度ASL</p></blockquote><p>一次查找的长度指的是需要比较关键字的次数</p><p>平均则是所有查找过程中需要比较的次数的平均值</p><h3 id="顺序查找" tabindex="-1"><a class="header-anchor" href="#顺序查找" aria-hidden="true">#</a> 顺序查找</h3><blockquote><p>基本思想</p></blockquote><p>从线性表的一端，逐个进行元素关键字和给定值的比较，若某个元素的关键字与给定值相同则查找成功，否则失败；</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>bool find(List&lt;int&gt; &amp; L, int k) {
    int it;
    for(L.setStart(); l.getValue(it); L.next())
        if(k == it)
            return true;
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能</p></blockquote><p>最差O(n)，平均O(n)</p><p>没有额外的空间开销</p><blockquote><p>特点</p></blockquote><p>被查找元素用线性表来存储，非常简单</p><p>算法也简单，易于实现，适用范围广</p><p>平均查找长度较大，不适合表长的查找</p><h3 id="二分-折半-查找" tabindex="-1"><a class="header-anchor" href="#二分-折半-查找" aria-hidden="true">#</a> 二分（折半）查找</h3><blockquote><p>基本思想</p></blockquote><p>分治法，对查找的有序序列的范围不断折半，逐步减小范围知道找到或没找到元素</p><blockquote><p>算法步骤</p></blockquote><p>定义两个指针l和r，分别指示待查元素所在范围的上界和下界，指针mid指示待查区间的中间位置</p><p>若待查元素的范围大于1，则取待查元素中间位置的元素的关键字和给定值比较：</p><ul><li>相等，查找成功</li><li>小于，将上界和下界设为l到mid-1</li><li>大于，将上界和下界设为mid+1到r</li></ul><p>继续循环处理</p><p>否则带查找范围中已没有元素，查找不成功</p><blockquote><p>伪代码</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int binary(int array[], int n, int k) {
    int l = -1, r = n;
    while(l + 1 != r) {
        int mid = (l + r) / 2;
        if(k &lt; array[mid]) r = mid;
        else if(k == array[mid]) return mid;
        else if(k &gt; array[mid]) l = mid;
    }
    return n;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>性能</p></blockquote><p>时间开销：O(logn)</p><p>空间开销：O(1)</p><blockquote><p>特点</p></blockquote><p>必须采用顺序存储结构</p><p>必须按关键字大小有序排列</p><p>比较次数少，查找速度快，平均性能好</p><h3 id="基于搜索树-bst-的查找" tabindex="-1"><a class="header-anchor" href="#基于搜索树-bst-的查找" aria-hidden="true">#</a> 基于搜索树（BST）的查找</h3><blockquote><p>特定值的查找</p></blockquote><p>递归：搜索树分为根，比根节点值小的左子树和比根节点大的右子树三部分</p><p>迭代：从根节点开始比较查找，根据比较结果，沿着树结构向下查找</p><blockquote><p>最值查找</p></blockquote><p>最大值：沿着搜索树最右边的子节点，一直向下，直到找到没有右孩子的节点</p><p>最小值：沿着搜索树最左边的子节点，直到找到没有左孩子的节点</p><h3 id="散列查找hash" tabindex="-1"><a class="header-anchor" href="#散列查找hash" aria-hidden="true">#</a> 散列查找hash</h3><blockquote><p>动机</p></blockquote><p>追求更快的检索</p><p>通过对关键字k做某种运算，可以用O(1)的时间开销完成查找</p><blockquote><p>散列基本思想</p></blockquote><p>散列是把键码的某些内容打乱，并且使用这部分的信息作为查找的基础</p><blockquote><p>散列术语</p></blockquote><p>散列：把关键码映射到表中位置来访问记录的过程</p><p>散列表：存放记录的数组，用HT(hash table)表示</p><p>散列函数：把关键码映射到散列表位置的函数，用h来表示</p><p>冲突：两个不同的关键码k1和k2，散列成相同的值h(k1)=h(k2)</p><p>冲突解决策略：当发生冲突时，寻找一个替代位置的过程</p><blockquote><p>基本思想</p></blockquote><p>首先在元素的关键字k和元素的存储位置p之间建立一个对应关系h，使得<code>p=h(k)</code></p><p>创建散列表时，计算h(k)，从h(k)开始，使用（如果需要）冲突解决策略找到存储关键字为k的关键字的存储位置</p><p>当查找关键字为k的元素时，再利用散列函数计算p=h(k)，同样，如果有需要使用冲突解决策略找到包含关键字k的元素</p><h4 id="散列函数" tabindex="-1"><a class="header-anchor" href="#散列函数" aria-hidden="true">#</a> 散列函数</h4><blockquote><p>概念</p></blockquote><p>散列函数是能把任意大小的数据映射到固定大小的数据集的函数</p><blockquote><p>方法</p></blockquote><ul><li><p>除留余数法</p><ul><li><p>选择一个大于散列表大小的素数作为除数</p></li><li><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int h(int x) {
    return x % M;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ul></li><li><p>平方取中法</p><ul><li><p>先求关键字的平方，然后取平方值中间的r位数字作为函数返回值</p></li><li><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>unsigned long int von(unsigned long int y, int r) {
    x = power(y, 2);
    z = power(2, r) - 1;
    k = (length(x) - length(z)) / 2;
    k = x &gt;&gt; k;
    x = x &amp; z;
    return x;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>折叠法</p><ul><li><p>将多个字符组合成一个字</p></li><li><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 如对于字符串，将所有的字符的ASCII码加起来，对M取模
int h(char * x) {
    int i, sum;
    for (sum = 0, i = 0; x[i] != &#39;\\0&#39;; i++)
        sum += (int) x[i];
    return sum % M;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h4 id="冲突解决策略" tabindex="-1"><a class="header-anchor" href="#冲突解决策略" aria-hidden="true">#</a> 冲突解决策略</h4><p>完美散列：一组特定的记录通过散列函数计算的值都不相等</p><p>解决方法：</p><p>开散列方法：把冲突记录存储在散列表之外</p><p>闭散列方法：把冲突记录存储在散列表中的另一个槽内</p><p><strong>开散列方法</strong></p><blockquote><p>单链方法</p></blockquote><p>把散列表中的每一个槽定义为一个链表的表头，所以是开散列，可以往槽中不断追加</p><blockquote><p>桶式散列</p></blockquote><p>把散列表中的槽分成多个桶，包含一个溢出桶；</p><p>散列函数把每条记录分配到某个桶的第一个槽中，如果这个槽被占用，则往下移，直到找到一个空槽。如果桶已经完全占用，那么将记录存储到表的溢出桶中</p><p>特点：</p><p>桶式散列适用于实现基于磁盘中的散列表，因为桶的大小可以设置为磁盘的大小。每当进行检索或者插入的时候，就把整个桶读入存储器。对于插入或者检索的所有处理都在这一次磁盘访问中，除非桶已经满了，否则就还要从磁盘中读取溢出桶，因此，应当使溢出很小，从而减少不必要的磁盘访问</p><p><strong>闭散列方法</strong></p><blockquote><p>开放地址法</p></blockquote><p>产生一组能够放置记录的散列表的槽</p><p>利用探查函数p(k, i)，为关键码k的探查序列的第i个槽返回从基地址开始的偏移量，每次调用探查函数得到的值加上基位置后产生新槽</p><p>探查函数：</p><ul><li>线性探查linear probing <ul><li><code>p(k, i) = i</code></li><li>如果记录的基位置已被占用，那么就下移一个槽，一旦到达表的底部，探查序列就折回到表的开始位置</li><li>每个关键码的探查序列中至少有一个槽是空的，否则就会陷入无限循环</li></ul></li><li>伪随机探查 <ul><li>随机地从未访问过的槽中选择下一个位置，及探查位置应是散列表位置中的一个随机排列</li></ul></li><li>二次探查 <ul><li><code>p(k, i) = i^2</code></li><li>探查序列中第i个位置是<code>(h(k) + i^2) Mod M</code></li></ul></li><li>双散列法 <ul><li><code>p(k, i) = i * h2(k)</code></li><li>探查序列第i个值是<code>(h1(k) + i * h2(k)) Mod M</code></li></ul></li></ul><blockquote><p>特点</p></blockquote><p>适用于但个记录空间开销小地内散列</p><p>记录数不能超过槽地总数，记录数少时存在空间浪费，</p><p>但是随着空槽数目减少，散列表地负载因子增大，检索性能又会急剧下降</p><blockquote><p>小结</p></blockquote><p>散列可以提供平均时间复杂度为O(1)的查找，但在最差情况下，任然为O(n)</p><p>散列适用于精确查找，不适合范围查找</p>`,279),p=[t];function a(r,s){return e(),n("div",null,p)}const c=i(d,[["render",a],["__file","sort_and_search.html.vue"]]);export{c as default};

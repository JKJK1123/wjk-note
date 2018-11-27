### 复习
    + 选择器:
       1. .class #id  div
       2. 组合选择器   div#id   css能选择到的 jq 也能选择到
       3. DOM 关系 parent()  children() sibling()除了自己以外所有的兄弟节点
       4. 新css过滤器 +(下一个) ~(后面所有兄弟的) >(子代悬着器) 
            a)  + 亲兄弟 紧挨着 下一个
            b)  ~ 比自己瞎的所有兄弟
            c)  > 直接子孩子 没有孙子
       5. 过滤器 :eq(选择第几个匹配的元素)   
            :il(选择小于 的元素)                :gt(选择大于 的元素)
            :even(选择所有序号为偶数的元素)      :odd(选择所有序号为奇数的元素)
            :last(选择最优一个元素)              :first()
       6. .css()  .attr()  .hide(隐藏)   .show(显示)
### dom操作
      + 样式.css()
          获取样式
          设置单个属性样式
          设置多个属性样式  参数为json对象或者对象形式
      + 属性 attr()
          获取属性
          设置属性
          removeAttr(删除)
      + 取值,设置值
          text()
          html()
          var() 表单都用这个
      + 操作类
          addClass()       向被选属性添加一个或者多各类
          removeClass()    从被选元素中删除一个或者多个类
          togleClass()     对被选元素进行添加/删除类的切换操作
          hasClass()         判断是否存在类,true/false
### dom查找
     siblings()    除了自己以外所有的兄弟节点
     next()        下一个兄弟节点
     nextAll()      后面所有的兄弟
     nextUntil()    后面所有的兄弟直到
     prev()         前面的兄弟
     prevAll()      前面所有的兄弟
     prevUntil()    后面所有的兄弟直到
     parent()       父亲节点
     parents()      所有的的父亲节点
     parentsUntil() 父亲节点知道()
### jQuery动画
    + 隐藏显示动画
      - show方法(让匹配的元素展示出来)
          1. $(xx).show(2000)
          2. $(xx).show()   slow:600ms   nomal:400ms  fast: 200ms
          3. $(xx).show(2000,function(){})
          4. $(xx).show()
      - hide方法(让匹配的元素隐藏掉)

    + 划入划出动画
       - 滑入动画效果
           $(xx).slideDown(速度,回调函数)
           $(xx).slidUp()
       - 滑入划出切换效果
           $(xx).slideToggle(速度,回调函数)
       - 淡入淡出动画
           1. 淡入动画效果
               $(xx).fadeIn(speed,callback)
           2. 淡出动画效果
               $(xx).fadeOut(1000);
           3. 淡入淡出切换动画效果
               $(xx).fadeToggle('fast',function(){})
           4. 改变透明度到某个值
               $(xx).fadeTo(1000,.5) 0全透明 1全不透明

    + 自定义动画
       - 所有能够执行动画的属性必须只有一个数字类型值
          语法：$(selector).animate(styles,speed,easing,callback)
            第一个参数表示：要执行动画的CSS属性（必选）
            第二个参数表示：执行动画时长（可选）
            第三个参数表示：动画执行完后立即执行的回调函数（可选）
    + 停止动画
        1. stop()
            作用:停止当前正在执行的动画
            为什么要停止动画？如果多个动画同时作用于一个单位上面，那么多个动画会进入排队。后一个动画的执行必须等前面的执行完毕。
        2. stop(stopAll,goToEnd)
             stopAll  是否全部停止,默认是false停止列队中所有动画
             goToEnd  是否将停止的动画  停止在当前动画前的最后一个状态

### jQuery 节点操作
     + 创建元素
           var node = $('#box1').html("<li>我是</li>")
     + 添加元素
          span() 参数$node   或   标签字符串
          appendTo()   作用：把$(selector)追加到node中去
                       $(selector).appendTo(node);

          prepend()    作用:在元素的第一个子元素面前最前内容或者节点
                       $(selector).prepend(node);

         after()
            在被选元素之后,作为兄弟元素插入内容或者节点
            $().after();
          before()
             在被选元素之前,作为兄弟元素插入内容或者节点
             $().before();
      + 清空元素
          $().empty();
              被选元素移除所有内容,包括文本和子节点
          $().html("")
               返回或设置被选元素的内容(inner HTML)
          $().remove()
               会把对象也干掉
      + 复制元素
          $().clone()

### 操作form表单
     .prop()

### 尺寸位置操作
     + 宽度和高度操作
         height()   取值为num 可以直接参加运算
         height()
         width()
      + 坐标值操作
         offset()
         作用:获取或设置元素相对于文档的位置
              之前的offsetLe找到定位的父类 相对于有定位的父类距离
              $().offset()
              $().offse({left:100,top:100});
              注意点：设置offset后，如果元素没有定位(默认值：static)，则被修改为relative
      postion()
          作用:获取相当于其最近的具有定位的父元素的位置
          $().postion();
          注意:只能获取,不能设置

      scrollTop()
          作用:获取或者设置元素垂直方向滚动位置
          $(selector).scrollTop()
          $(selector).scrollTop(100)
     scrollLeft()
          作用:获取或者设置元素水平方向的滚动位置
          $(selector).scrollLeft(100);






 
### jquery
    1. jquery是js对dom操作的一个封装,我们可以通过使用jquery快捷简单的操作dom元素
    2. jquery是一个快速.简洁的javaScript框架,
       jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情
       它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互
    - jquery的基本使用
       jquery主要版本
         + 1.xx   1版本  支持ie5678...
         + 2.xx   2版本  放弃对ie5678的支持
         + 3.xx   3版本  没向前兼容
         这个版本并不是越新越好.根据项目需求
         但是各个版本的基本功能都是一样的,常用的api也是一样的
         jquery的版本选择 需要看项目中依赖的或者使用的jquery插件来决定

### 事件处理
                                 jq对象 .css('attr','value')
       1. 类选择器   $('.d1')     $('.d1').css('background-color','red');
                                 $('.d1 .p1').css('color','yellow');
			                     $('.d1 .p2').css('fontSize','30px');

       2. id选择器   $('#h1')     $('#h1').css('color','green');
       3. 标签选择器  $('div')

    +  事件
        js: onclick    onmouseover  onmousemove  …
        jq: click     mouseover   mousemove  …
    
    + 事件处理程序
        js: onclick = function(){}
        jq: licck(function(){})
### js入口函数跟jq入口函数的区别  
      1. 执行时间
            window.onload必须等到页面包括图片的说有元素加载完毕后才能执行
            $(document).ready()是DOM结构绘制完毕后就执行,不必等到加载完毕只加载dom框架,对于大的图片需要时间,这个不等 <img src="" alt="">
      2. 编写的个数不同
            window.onload不能同时编写多个,如果多个window.onload只会执行一个
            $(document).ready()可以同时编写多个 并且都得到执行
      3. 简写的方法
           + js: 
             - window.onload = function(){

               }
           + jq:
              - $(document).ready(function(){

               })
              - $(function(){
               推荐使用这种
               })

### 回顾css选择器
      符号	         说明              	         用法
      #id            Id选择器                     #id{ color:red; }
      .class         类选择器                     .class{ //}
      Element        标签选择器                   P { //}
      *              通配符选择器                 配合其他选择器来使用
      ,              并集选择器                   div,p{}
      空格           后代选择器                   div span{}
                                                 选择div下面所有后代的span
      +             紧接下一个元素                .xx+xx
      ~             该元素后面的所有兄弟节点
      >             孩子节点不包括孙子节点         d1>d2
### js基本选择器
    符号	               说明	                                                      用法
    $(“#demo”)	       选择id为demo的第一个元素	                                  $(“#demo”).css(“background”,”red”)
    $(“.d1”)	       选择所有类名（样式名）为dl的元素	                          $(“.d1”). css(“background”,”red”);
    $(“div”)	       选择所有标签名字为div的元素        	                          $(“div”). css(“background”,”red”);
    $(“*”)	           选择所有元素	                                              $(“*”). css(“background”,”red”)
    $(“.arr.arr-l”)	   选择多个指定的元素，这个地方是选择出了 .liItem元素和div元素	  $(“.arr.arr-l”). css(“background”,”red”)

### jq其他选择器
       + 层级选择器
          符号	                     说明	                             用法

          空格	                   后代选择器
                                   选择所有的后代元素	                    $(“div  span”). css(“background”,”red”);

          >	                       子代选择器
                                   选择所有的子代元素	                    $(“div > span”). css(“background”,”red”)

          +	                       紧邻选择器
                                   选择紧挨着的下一个元素	                $(“div + p”). css(“background”,”red”)

           ~	                   兄弟选择器
                                   选择后面的所有的兄弟元素	            $(“div ~ p”). css(“background”,”red”)

###jq 过滤选择器
    基本过滤选择器
       符号	                  说明	                                                               用法
       :eq(index)	          index是从0开始的一个数字，选择序号为index的元素。选择第一个匹配的元素。	   $(“li:eq(1)”). css(“background”,”red”)
       :gt(index)	          Index 是从0开始的一个数字，选择序号大于index的元素	                   $(“li:gt(2)”). css(“background”,”red”)
       :lt(index)	          Index是从0开始的一个数字，选择小于index 的元素	                       $(“li:lt(2)”). css(“background”,”red”)
       :odd	                  选择所有序号为奇数行的元素	                                           $(“li:odd”). css(“background”,”red”)
       :even	              选择所有序号为偶数的元素	                                               $(“li:even”). css(“background”,”red”)
       :first	              选择匹配第一个元素	                                                   $(“li:first”). css(“background”,”red”)
   
    属性选择器
       符号	                              说明	                                                 用法
       $(“a[href]”)  title  type  …	      选择所有包含href属性的元素	                             $(“a[href]”). css(“background”,”red”)
       $(“a[href=’baidu’]”)	              选择href属性值为baidu的所有a标签	                     $(“a[href=’baidu]”). css(“background”,”red”)
       $(“a[href!=’baidu’]”)	          选择所有href属性不等baidu的所有元素，包括没有href的元素	 $(“a[href!=’baidu’]”). css       (“background”,”red”)
       $(“a[href^=’web’]”)	              选择所有以web开头的元素	                                 $(“a[href^=’web’]”). css(“background”,”red”)
       $(“a[href$=’cn’]”)	              选择所有以cn结尾的元素	                                 $(“a[href$=’cn’]”). css(“background”,”red”)
       $(“a[href*=’i’]”)	              选择所有包含i这个字符的元素，可以是中英文	                 $(“a[href*=’i’]”). css(“background”,”red”)
       $(“a[href][title=’内容’]”)	       选择所有符合指定属性规则的元素，都符合才会被选中。	     $(“a[href][title=’内容’]”). css(“background”,”red”)
    
     删选选择器(方法)
      符号(名称)	说明	用法
      find(selector)	        查找指定元素的所有后代元素（子子孙孙）	                $(“#j_wrap”).find(“li”).css(“color”, “red”);
                                                                                        选择id为j_wrap的所有后代元素li
      children()	            查找指定元素的直接子元素（亲儿子元素）	                $(“#j_wrap”).children(“ul”).css(“color”, “red”);
                                                                                        选择id为j_wrap的所有子代元素ul
      siblings()	            查找所有兄弟元素（不包括自己）	                        $(“#j_liItem”).siblings().css(“color”, “red”);
                                                                                        选择id为j_liItem的所有兄弟元素
      parent()	                查找父元素（亲的）	                                $(“#j_liItem”).parent(“ul”).css(“color”, “red”);
                                                                                        选择id为j_liItem的父元素
      eq(index)	                查找指定元素的第index个元素，index是索引号，从0开始	    $(“li”).eq(2).css(“color”, “red”);
                                                                                        选择所有li元素中的第二个
      mouseover 事件跟mouseenter 事件的区别
        mouseover/mouseout事件,     鼠标经过的时候回触发多次,没碰到一个子元素就会触发一次
        mouseenter/mouseleave事件 , 鼠标经过的时候只会触发一次

### DOM对象jq对象的互相转换
     Div ==> 对div的包装,使其具有各种样式已经封装好的方法
       jq对象转换成js对象
         方式一:  $("#btn")[0]
         方式二:  $("#btn").get(0);
       DOM对象转换成jq对象
         $(document) -> 把dom对象转换成了jq对象
         var btn = document.getElementByld("btn");
         btn ->$(btn);


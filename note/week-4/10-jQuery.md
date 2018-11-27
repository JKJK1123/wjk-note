### jQuery 事件机制
###jQuery 事件绑定
        简单事件绑定==>bind事件绑定==>delegate==>on
        	简单事件绑定：
                click(handler) 				单击事件
                blur(handler) 				失去焦点事件
                mouseenter(handler) 		鼠标进入事件
                mouseleave(handler)			鼠标离开事件
                dbclick(handler) 			双击事件
                change(handler) 		    改变事件，如：文本框值改变，下来列表值改变等
                focus(handler) 				获得焦点事件
                keydown(handler) 			键盘按下事件
     + bind方式(给匹配到的元素直接绑定事件)
        $("p").bing("click"mouseenter,function(e){
        	})

     + delegate 方式(给匹配到的元素绑定事件,对支持动态创建元素有效)
        $(".parentBox").delepate("p","click",function(){})
      与前两种方式最大的优势,减少事件绑定次数,提高效率,支持动态创建出来的元素绑定事件

     + on 方式(兼容zepto(移动端类似jQuery的一个库)，建议使用的方式)
         作用:给匹配的元素绑定事件,包括上面所有绑定事件的有点
         语法:
             	$(selector).on(events[,selector][,data],handler);
                $(selector).on(events[,selector], handler);
                $(selector).on(events,handler);

###事件解绑
     unbind()方式
         解绑bind方式绑定事件
         $(selector).unbind();    // 解绑所有事件
         $(selector).unbind(“click”,fn);   //  解绑固定事件
         $(selector).unbind(“click”);   //  解除一类事件
     undelegate()方式
         解绑delegate()
         $( selector ).undelegate();
         $( selector).undelegate( “click” ); 
         $( selector).undelegate( “xx”,“click”); 
         $( selector).undelegate( “xx”,“click”,fn ); 
     off解绑on方式绑定事件
         $(selector).off()
         $(selector).off('click');
         解绑所有代理的click的事件,元素本身的事件不会解绑
         $(selector).off('click','xx');
         $(selector).off('click','xx',fn);

### 事件触发
      简单事件触发
      $(selector).click()//触发click事件
         trigger 方法触发指定事件
      $(selsctor).trigger('click')
         triggerHandler()方法触发被选元素的指定事件类型
      $(selector).triggerHandler('click')

     triggerHandler与trigger()方法相比的不同之处
      它不会引起事件(比如表单提交)的默认行为(细节,开发并不在意)
      .trigger()会操作jQuery对象匹配的所有元素 而.triggerHandler() 只影响第一个匹配元素。
      由.triggerHandler()创建的事件不会再dom树中冒泡,如果目标元素不直接处理它们,则不会触发任何事情
      该方法的返回的是事件处理函数的返回值,而不是具有可链性的jQuery对象,因此如果没有处理程序被触发则这个方法返回 undefined。

### jQuery事件对象介绍
     event.data      传递给事件处理的额外数据
     event.currentTarget  相同于this,当前dom对象
     event.pageX      鼠标相当于对文档左部边缘位置
     event.targe      触发事件源,不一定===this
     event.stopPropagation()  阻止事件冒泡
     event.preventDefault()   阻止默认行为
     event.type        事件类型:click , dbclick
     event.which       鼠标的按键类型:左 1  中 2  右 3
     event.keyCode     键盘按键代码
     
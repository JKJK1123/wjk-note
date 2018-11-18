### offset
    1. offsetWith 
    2. offsetHeight
        - 获取元素的宽高包含border 和padding ,指的是元素的实际大小
        - 获取的结果为number类型
        - 是一个只读属性
        - 获取的结果是四舍五入的值(即使width/height=xx.xxpx)

    3. offsetLeft
    4. offsetTop
        - 和定位的absolute属性的表现形式一样,如果父类(父类的父类..)有定位元素,则找父类,如果都没有,找body
        - 结果为number类型,只读属性

    5. offsetParent
        - 找到当前元素偏移参照的父类元素
### scroll
    1. ScrollWidth/ScrollHeight(不包含border)
        - 元素的宽高,不包含border,但是包含padding
        - 元素的内容如果超过,获取的是元素内容的时间高度
        * 检测盒子的宽高(调用者:节点元素.属性)
          盒子内容的宽高(如果有内容超过了,显示内容的高度)
    2. ScrollTop/ScrollLeft (网页,被浏览器遮挡的头部和左边部分)
        - 读取元素被卷进去的高度/left,值为nuber类型
        - 读写属性.可以被重新赋值,但是应该的number类型(不能带px).document.documentElement.scrollTop =intvalue;
    3. scrollTop兼容写法:
          var top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
          var top= document.documentElement.scrollTop ||document.body.scrollTop

### 获取title/body/head/html/标签
    documen.title  文档标签    * document.title = value
    document.head  文档的头部标签
    document.body  文档的body标签
    document.documentElement  html

### onscroll 可以监听页面的滚动 哪怕只滚动1px 也会触发

### event
    - 再触发DOM上的某个事件时,会产生一个事件对象event,这个对象中包含着所有与事件相关的信息,所有浏览区都支持event当支持的方式不一样
    - 比如鼠标操作的时候回添加鼠标位置的相关信息到事件对象中
    - 普通浏览器支持event(带参,任意形参)
    - ie 6,7,8支持 window.event(无参,内置)
      他是一个事件中的内置对象内部装了很多关于鼠标和事件本身的信息
     

     - 事件对象的获取
       IE 678 中,windo.event
       在火狐谷歌中,event或者,事件绑定函数中加参,这个参就是event
    - 兼容方式
       var event = event||windo.event
    - event的属性
      event 事件对象 既触发这个事件的事件本身
      1. page包含被卷进去的网页
        event.pageY/event.pageX
        * page 的兼容写法 *
          在页面位置 = 当前位置+被卷进去的长度
           pageY/pageX=event.clientY/clientY+window.scrollTop/scrollLeft
      2. client 仅仅包含整个浏览器(但是跟浏览器大小和位置有关);
        event.clientX / evevt.clientY
      3. screen 指的是整个屏幕
        event.screenY / event.screenX
      4. type 事件的类型
      5. target 该事件被传送到的对象
      6. button 返回当事件被触发时,那个鼠标按钮被点击
      7. buttles 返回布尔值,指示事件是否是起泡事件类型
      8. timestamp  返回事件生成的时间和日期

### onmousemove(可以监听鼠标移动的事件)
    只要鼠标绑定在该事件的事件源上移动,哪怕只有1px也会触发这个事件(这个事件可以直接或者间接替代定时器);
    





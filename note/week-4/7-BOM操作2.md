### client 
    属性
      clientWidth 获取网页可视区域宽度
      clientHeight 获取网页可视区域高度
                   盒子调用:           指盒子本身
                   body/html 调用:     可视区域大小(如果存在调试窗口则显示能看到的版面宽高)

    1. clientX         鼠标距离可视区域的左侧距离(event调用);
    2. clientY         鼠标距离可视区域的上侧距离(event调用);
    3. clientTop/clientLeft   盒子的boder的宽高

### 三大家族的区别(三大家族总结)
    width和height

        clientWidth = width+padding  //通过设置clientWidth(买手机,盒子里的都是我的)
        clienHeight = heigth+padding
        offsetWidht = width+padding+boder (生产手机,要计算盒子的宽高,整体的空间)
        offsetHeight = width+padding+boder
        scrollWidth = 内容的宽度(不包含boder)(能被卷的东西,如果超出计算整个内容)
        scrollHeight = 内容的高度(不包含bored)
    top和left
        offsetTop/offsetLeft
           调用者:任意元素.(盒子为主);
           作用:  距离父系盒子中带有的定位距离

        scrollTop/scrollLeft
           调用者: document.body.scrollTop/.....(window.onscroll==)
           作用:   浏览器无法显示的部分(被卷去的部分);

        clientY /clientX(clientTOP/clientLeft 值的是border)
           调用者: event.clientX(event)
           作用:   鼠标距离可视区域的距离(左.上)

### client家族特殊用法之:检浏览器宽/高度(可视区域)
     1. document.body.clientHeight(documentElement) (ie 和 firfox都能用)
     2. window.innerHeight (firefox 能用)
    兼容写法
      var cWidth = window.innerWidth||this.clientWidth

### Onresize事件
       Onscroll ==> 有一个像素的改变都会触发
      只要浏览器的大小改变,哪怕1px,都会触发这个事件

     案例:根据浏览器可视区域大小,给背景色

### 事件总结
    1. window.onscroll   屏幕滚动
    2. window.onresize   浏览器大小改变
    3. window.onload     页面加载完毕
    4. div.onmousemove   鼠标在盒子上移动
    5. onmouseup/onmousedown = onclick

     获得屏幕宽高
       window.screen.width

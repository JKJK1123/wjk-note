### 代码压缩
    减小文件体积,提高解析效率
    提高代码安全性
### arguments对象
    1. arguments.length 返回的是实参的个数
    function add(){
    	var rs = 0;
    	for(var i = 0 ; i < arguments.length; i++){
    		rs += arguments[i];
    	}
    	return rs ;
    }
    alert(add(x,x,,x,x,x,));

    2.arguments.callee  返回的是正在执行的函数
    function fb(n){
    	if(n == 1 || n == 2){
    		return 1;
    	}
    	return argument.callee(n-1)+arfuments.callee(n-2);
    }
    alser(fb(n));
### 立即执行函数
    1. 立即执行函数可以传参数

    var name = '张三';
    ;(function(n){
    	alert('hello'+n)
    	})(name);

    2. 立即执行函数的运用

    for(var i = 0 ; i < lis.length ; i++){
    	lis[i].onclick = (function(n){
    		return function(){
    			console.log(n)
    		}
    		})(i)
    }

    3. addEventlistener
    可以给同一个元素绑定(监听)多次相同的时间
       * 参数1  事件类型
       * 参数2  怎么处理
       * 参数3  是否捕获执行;默认false
       d1El.addEvebtListeber('click'function(){
           console.log('123');
        },ture)
       d1El.addEvebtListeber('click'function(){
            console.log('456')
        }ture)
        从里往外  执行 成为 '冒泡'  执行
        从外往里  执行 称为 '捕获'  执行
        d2El.addEvebtlistener('chlick',function(){
            console.log('adc');
            }ture) 

    4. 绑定解除 addEventListener/removeEvebtListener
                detachEvebt(ie8的事件绑定)
         * 绑定事件 必须是具名函数
         * 必须和绑定时候捕获/冒泡统一
    functiob foo(){
        alert('nihao');
    }
    绑定事件
      btn1.onclick = function(){
          box.addEveblistenner('click',foo,ture);
      }
    解除
      btn1.onclick = function(){
         box.removeEventListener('click',foo,ture);
      }
    ie8 的绑定事件, 必须写on
      btn1.onclick = function  () {
          box.detachEvent('onclick',foo);
      }
    兼容写法
      myListener(box,'click',function () {
            alert('abc');
        })

    自己处理兼容
        function myListener(el,type,fn){
            判断el有没有attachEvent属性
            if(el.attachEvent){
                el.attachEvent('on'+type,fn);
            }else{
                el.addEventListener(type,fn);
            }
        }

    5. 定时器
          setTimeout    延迟执行
          setIntererval 循环执行

          延迟5秒执行 只执行一次
          setTiomeout(function(){
            xxx
            },5000)

          setInterval(function(){
            console.log(new Date());
          },2000);

// 封装多属性缓动
// 函数的参数可以是任意类型,包括函数类型本身
// fn 为函数的"回调函数"  回调函数中 慎重使用 this,一般this的指向会发生变化!!!
function  animate(el,params,fn) {
	// var leader = leader + (target-leader)/10;
	clearInterval(el.timer);
	el.timer = setInterval(function(){
		var flag = true;
		//遍历params对象
		// {left:400,top:600}
		for(var key in params){
			//获取目标值
			var target = params[key];
			if(key=='zIndex'){
				//因为zIndex 不存在过度过程 所以直接给结果
				el.style.zIndex = target;
				//后面的代码不再执行
				continue;
			}

			//怎么计算leader?
			// offsetxx都是整数
			var leader = getStyle(el,key);
			if(key == 'opacity'){
				//把透明度扩大100倍
				leader = Math.floor(parseFloat(leader)*100);
				//修改目标值
				target = target*100;
			}


			var step = (target-leader)/10;
			//修正step
			if(Math.abs(step)<1){
				step = step>0?Math.ceil(step):Math.floor(step);
			}
			if(key == 'opacity'){
				//还原opacity的值
				el.style.opacity = (leader+step)/100;
			}else{
				//计算当前位置
				el.style[key] = (leader+step)+'px';
			}
			
			//相等的时候清除
			if(leader != target){
				flag = false;
			}
		}

		if(flag){
			clearInterval(el.timer);
			//当动画执行完毕后调用fn
			if(fn){
				fn();
			}
		}

	},17)

}

/**
* 根据class属性获取值
**/
function getStyle (el,attr) {
	//获取元素el的attr的class属性
	var rs = window.getComputedStyle(el,null)[attr];
	//把px去掉 返回number   20px
	if(rs.indexOf('px')!=-1){
		//字符串截取
		rs = rs.substr(0,rs.length-2);
		//变为number
		rs = parseInt(rs);
	}
	return rs;
}

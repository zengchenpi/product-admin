// 校验算法
// 校验用户名
export function checkUsername(field, value, cb) {
	// 不能为空
	if (!value) {
		// 提示错误
		return cb(new Error('用户名不能为空'))
	}
	// 用户名是4-8位的
	if (!/^\w{4,8}$/.test(value)) {
		// 不合法，提示错误
		return cb(new Error('用户名是4-8位的'))
	}
	// 没有错误
	cb();
}
// 校验密码
export function checkPassword(field, value, cb) {
	// 不能为空
	if (!value) {
		// 提示错误
		return cb(new Error('密码不能为空'))
	}
	// 密码要包含字母和数字
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		// 不合法，提示错误
		return cb(new Error('密码要包含字母和数字'))
	}
	// 合法
	cb();
}
// 重复性检测
export function checkRepeat(data, title, field, value, cb) {
	// console.log(arguments, this)
	// 重复的数据不能为空
	if (!value) {
		// 提示错误
		return cb(new Error(`重复${title}不能为空`))
	}
	// 与data一致
	if (data !== value) {
		return cb(new Error(`与${title}不一致`))
	}
	// 合法
	cb();
}
// 必填项校验
export function checkNotEmpty(field, value, cb) {
	// 必须填写
	if (!value) {
		// 提示错误
		return cb(new Error('请输入数据'))
	}
	// 合法
	cb();
}
export function checkPhone(field,value,cb){
	if(!value){
		return cb(new Error("请输入手机号"));
	}
	if(!/[0-9]{11}/.test(value)){
		return cb(new Error("请输入11位数字手机号"));
	}
	cb()
}
/**
 * 自定义指令directive
 */
export default {
  // 立即执行
  bind(el, binding, vnode) {
    const _ops = binding.value,
      _c = el.getElementsByClassName(_ops.className);
    // 加个 空格，防止className连在一起
    _c[_ops.curIdx].className += ` ${_ops.activeClass}`;
  },
  // 触发后执行
  update(el, binding, vnode) {
    const _ops = binding.value,
      // 获取旧值
      _oOps = binding.oldValue,
      // 获取所有类名
      _c = el.getElementsByClassName(_ops.className);
    // 重置类名
    _c[_oOps.curIdx].className = ` ${_oOps.className}`;
    // 重新添加类名
    _c[_ops.curIdx].className += ` ${_ops.activeClass}`;
  },
};

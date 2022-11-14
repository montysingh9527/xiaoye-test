/**
 * 添加/ 删除/ 切换状态
 * @param {*} data 数据
 * @returns 
 */
function todoReducer(data) {
  // 添加事项
  function addItem(newItem) {
    return data.concat(newItem);
  }
  // 删除事项
  function removeItem(id) {
    return data.filter((item) => item.id !== id);
  }
  // 事项状态切换
  function changeCompleted(id) {
    return data.map((item) => {
      if (item.id === id) {
        // 事项状态取反
        item.completed = !item.completed;
      }
      return item;
    });
  }
  return {
    addItem,
    removeItem,
    changeCompleted,
  };
}

export default todoReducer;

/**
 * 定义filters过滤器
 *  */

export default {
  // 设置状态
  filterStatus(status) {
    switch (status) {
      case 1:
        return "待付款";
      case 2:
        return "待发货";
      case 3:
        return "待收货";
      case 4:
        return "待评价";
      default:
        return "未设置状态";
    }
  },
  // 设置样式
  filterStatusStyle(statusStyle) {
    switch (statusStyle) {
      case "待付款":
        return "not-pay";
      case "待发货":
        return "not-send";
      case "待收货":
        return "not-receive";
      case "待评价":
        return "not-comment";
      default:
        return "";
    }
  },
};

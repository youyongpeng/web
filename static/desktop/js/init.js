layui.config({
  base: '/static/desktop/lib/winui/', // 指定 winui 路径
  version: '1.0.0-beta'
}).extend({ // 指定js别名
  window: 'js/winui.window',
  desktop: 'js/winui.desktop',
  start: 'js/winui.start',
  helper: 'js/winui.helper'
})

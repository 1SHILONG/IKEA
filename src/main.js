import { createApp } from 'vue';
import App from './App.vue'; // 创建app实例
import router from '@/router'; // 启用路由
import store from '@/store'; // 数据管理
import { 
  ActionBarIcon,
  BackTop,
  Button,
  Card,
  Cascader,
  Cell,
  Checkbox,
  CheckboxGroup,
  ConfigProvider,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  Image,
  Lazyload,
  Loading,
  NavBar,
  NoticeBar,
  Popup,
  Search,
  ShareSheet,
  Sidebar,
  SidebarItem,
  Skeleton,
  Stepper,
  Sticky,
  SubmitBar,
  Swipe,
  SwipeCell,
  SwipeItem,
  Tab,
  Tabs,
  TextEllipsis
} from 'vant';  // 按需加载
import 'vant/lib/index.css'; // 引入vant样式
import 'lib-flexible/flexible';// rem 移动端适配
import '@/mock/index.js'; // 全局引入mock
import '@/common/style/index.styl'; // reset等全局样式

const app = createApp(App)
app 
  .use(router)
  .use(store)
  .use(Swipe)
  .use(ShareSheet)
  .use(Cell)
  .use(SwipeItem)
  .use(Icon)
  .use(Lazyload)
  .use(Search)
  .use(Cascader)
  .use(Field)
  .use(Popup)
  .use(ConfigProvider)
  .use(Image)
  .use(Loading)
  .use(Sticky)
  .use(NoticeBar)
  .use(Skeleton)
  .use(NavBar)
  .use(Grid)
  .use(GridItem)
  .use(Form)
  .use(Button)
  .use(ActionBarIcon)
  .use(TextEllipsis)
  .use(SwipeCell)
  .use(Card)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Tab)
  .use(Tabs)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Stepper)
  .use(BackTop)
  .mount('#app')

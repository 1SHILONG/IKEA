import { createApp } from 'vue';
import App from './App.vue'; // 创建app实例
import router from '@/router'; // 启用路由
import store from '@/store'; // 数据管理
import { 
  Button,
  Cascader,
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
  Skeleton,
  Sticky,
  Swipe,
  SwipeItem,
} from 'vant'; 
import 'vant/lib/index.css';
import 'lib-flexible/flexible';// rem 移动端适配
import '@/assets/main.css';
import '@/mock/index.js';
import '@/common/style/index.styl';


const app = createApp(App)

app 
  .use(router)
  .use(store)
  .use(Swipe)
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
  .mount('#app')

// ts 关于 .vue 的类型定义（Typescript 默认是不支持 .vue 类型的模块的）
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

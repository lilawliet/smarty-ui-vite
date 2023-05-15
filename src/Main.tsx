import { defineComponent} from "vue";
import { SButton } from "./entry";


export default defineComponent({
  name: "Main",
  setup(props, {slots}) {
    return () =>  <>
    <div>
    <SButton color="blue">蓝色按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
   </div>
        <div>
        <SButton color="blue"  icon="search" ></SButton>
        <SButton color="green"   icon="edit" ></SButton>
        <SButton color="gray" icon="check" ></SButton>
        <SButton color="yellow"  icon="message" ></SButton>
        <SButton color="red" icon="delete" ></SButton>
    </div>
    </>
  }
});
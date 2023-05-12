import { defineComponent} from "vue";
import { MyButton } from "./entry";


export default defineComponent({
  name: "Main",
  setup(props, {slots}) {
    return () =>  <>
    <div>
    <MyButton color="blue">蓝色按钮</MyButton>
    <MyButton color="green">绿色按钮</MyButton>
    <MyButton color="gray">灰色按钮</MyButton>
    <MyButton color="yellow">黄色按钮</MyButton>
    <MyButton color="red">红色按钮</MyButton>
   </div>
        <div>
        <MyButton color="blue"  icon="search" ></MyButton>
        <MyButton color="green"   icon="edit" ></MyButton>
        <MyButton color="gray" icon="check" ></MyButton>
        <MyButton color="yellow"  icon="message" ></MyButton>
        <MyButton color="red" icon="delete" ></MyButton>
    </div>
    </>
  }
});
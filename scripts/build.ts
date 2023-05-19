// 读取 vite 配置
import config from "../vite.config";
import { build, InlineConfig } from "vite";

// 全量打包
build(config as InlineConfig);

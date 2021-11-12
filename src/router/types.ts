/*
 * @Date: 2021-11-12
 * @Description:
 */

import { RouteRecordRaw } from "vue-router";
import { Component } from "@vue/runtime-core";

export interface RouteMeta {
  title: string;
}

export interface AppRouteRecorRaw extends Omit<RouteRecordRaw, "meta"> {
  //   name?: string;
  //   meta?: RouteMeta;
  //   component?: Component | string;
  //   components?: Component;
  //   children?: AppRouteRecorRaw[];
  //   props?: any;
  //   fullPath?: string;
  // }
}

export type AppRouteModule = AppRouteRecorRaw;

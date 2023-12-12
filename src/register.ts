import { registerAmisEditorPlugin, registerRendererByType } from 'vue3-amis-widget';
import { Renderer, CRUDStore } from 'amis'
import { registerEditorPlugin } from 'amis-editor-core'

import AnjiLabelPlugin from '@/components/AnjiLabel/panel-props'
import AnjiLabelRender from '@/components/AnjiLabel'

import AnjiButton from '@/components/AnjiButton'
import AnjiButtonPlugin from './components/AnjiButton/panel-props';

import { AnjiCrudPlugin } from './components/AnjiCrud/panel-props';
import AnjiCrud from './components/AnjiCrud';
import { AnjiTagPlugin } from './components/AnjiTag/panel-props';
import AnjiTag from './components/AnjiTag';

// // 注册自定义插件（amis-editor组件物料面板显示）
// export function amisCustomPanelPluginData() {
//   return {
//     AnjiLabelPlugin
//   }
// }
// export function amisCustomRendererData(){
//   return {
//     AnjiLabelRender
//   }
// }

/**
 * vue3里渲染amis自定义组件
 */
export function registerVue3AmisRenderer(){
  // 渲染组件需要
  registerRendererByType(AnjiLabelRender, {
    type: 'ag-label',
    // 渲染类型 renderer、formitem、options
    usage: 'renderer',
    framework: 'react'
  })

  // 重构的表格
  registerRendererByType(AnjiCrud, {
    type: 'ag-crud',
    //渲染类型 renderer、formitem、options
    usage: 'renderer',
    framework: 'react',
    storeType: CRUDStore.name,
    isolateScope: true,
    autoVar: true
  })
  // // // 重点：storeType: CRUDStore.name
  // Renderer({ type: 'ag-crud', storeType: CRUDStore.name, isolateScope: true })(AnjiCrud as any)

  registerRendererByType(AnjiButton,{
    type: 'ag-button',
    //渲染类型 renderer、formitem、options
    usage: 'renderer',
    framework: 'react',
  })

  registerRendererByType(AnjiTag,{
    type:'ag-tag',
    usage:'renderer'
  })
  
}
/**
 * vue3里 注册amis-editor组件物料面板插件
 */
export function registerVue3AmisPlugin(){
  // 注册自定义插件（amis-editor组件物料面板显示）
  registerAmisEditorPlugin(AnjiLabelPlugin)
  registerAmisEditorPlugin(AnjiCrudPlugin)
  registerAmisEditorPlugin(AnjiButtonPlugin)
  registerAmisEditorPlugin(AnjiTagPlugin)
}

/**
 * react里渲染amis自定义组件
 */
export function registerReactAmisRenderer(){
  // 渲染组件需要
  Renderer({ type: 'ag-label', autoVar: true })(AnjiLabelRender)
  // // 重点：storeType: CRUDStore.name
  Renderer({ type: 'ag-crud', storeType: CRUDStore.name, isolateScope: true, autoVar: true })(AnjiCrud as any)

  Renderer({ type: 'ag-button', autoVar: true })(AnjiButton as any)

  Renderer({ type:'ag-tag'})(AnjiTag as any)
}
/**
 * react里 注册amis-editor组件物料面板插件
 */
export function registerReactAmisPlugin(){
  // react 注册自定义插件（amis-editor组件物料面板显示）
  registerEditorPlugin(AnjiLabelPlugin as any)
  registerEditorPlugin(AnjiCrudPlugin)
  registerEditorPlugin(AnjiButtonPlugin)
  registerEditorPlugin(AnjiTagPlugin)
}

/**
 * react 设计器里注册组件
 */
export function renderReactAmisEditor() {
  registerReactAmisPlugin()
  registerReactAmisRenderer()
  
}
/**
 * vue3 设计器里注册组件
 */
export function renderVue3AmisEditor(){
  registerVue3AmisPlugin()
  registerVue3AmisRenderer()
}
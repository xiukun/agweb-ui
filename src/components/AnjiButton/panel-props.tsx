import { ButtonPlugin, getSchemaTpl } from 'amis-editor'
export class AnjiButtonPlugin extends ButtonPlugin {
  static id = 'ag-button'
  // 关联渲染器名字
  rendererName = 'ag-button'
  isBaseComponent = true
  name = '按钮ag'
  tags = ['重构组件']
  scaffold: any = {
    type: 'ag-button',
    label: '按钮ag',
    onEvent: {
      click: {
        actions: [],
      },
    },
  }
  previewSchema: any = {
    ...this.scaffold,
  }

  panelBodyCreator = (content: any) => {
    return getSchemaTpl('tabs', [
      {
        title: '属性',
        body: getSchemaTpl('collapseGroup', [
          {
            title: '基本',
            body: [
              getSchemaTpl('icon', {
                label: '左侧图标',
              }),

              getSchemaTpl('icon', {
                name: 'rightIcon',
                label: '右侧图标',
              }),
              getSchemaTpl('badge'),
            ],
          },
          getSchemaTpl('status', {
            disabled: true,
          }),
        ]),
      },
    ])
  }
}
export default AnjiButtonPlugin

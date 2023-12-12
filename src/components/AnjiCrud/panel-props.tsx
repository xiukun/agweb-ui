import { CRUDPlugin } from 'amis-editor'

export class AnjiCrudPlugin extends CRUDPlugin {
  static id = 'ag-crud'
  // 关联渲染器名字
  rendererName = 'ag-crud'
  $schema = '/schemas/CRUDSchema.json'
  tags = ['重构组件']
  scaffold: any = {
    type: 'ag-crud',
    syncLocation: false,
    api: '',
    columns: [
      {
        name: 'id',
        label: 'ID',
        type: 'text',
      },
      {
        name: 'engine',
        label: '渲染引擎',
        type: 'text',
      },
    ],
    bulkActions: [],
    itemActions: [],
  }
}

export default AnjiCrudPlugin

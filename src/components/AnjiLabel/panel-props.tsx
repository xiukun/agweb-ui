import { BasePlugin } from 'vue3-amis-widget'

/**
 * @file 编辑器扩展, 增加自定义组件
 */
export class AnjiLabel extends BasePlugin {
  // 关联渲染器名字
  rendererName = 'ag-label'
  $schema = '/schemas/UnkownSchema.json'
  // 组件名称（组件面板显示的Title）
  name = 'ag-label'
  description = 'ag-label'
  tags = ['展示11', 'ohter'] // 自定义组件分类
  icon = 'fa-solid fa-bars-progress'
  order = 100 // 组件面板中的展示优先级，越小越靠前展示
  scaffold = {
    type: 'ag-label',
    label: 'ag-label',
    name: 'ag-label',
    text: '设计器默认值',
  }

  previewSchema = {
    type: 'ag-label',
    label: 'ag-label',
    text: '预览内容？？？',
  }

  panelTitle = '右侧面板标题'

  panelBody = [
    {
      type: 'tabs',
      tabsMode: 'line',
      className: 'm-t-n-xs',
      contentClassName: 'no-border p-l-none p-r-none',
      tabs: [
        {
          title: '常规',
          body: [
            {
              name: 'text',
              label: '内容',
              type: 'input-text',
            },
            {
              type: 'select',
              name: 'apiPath',
              label: '接口',
              placeholder: '请选择城市',
              source: {
                url: '/api/getApiList',
                method: 'get',
                data: {
                  body: {
                    query: {
                      limitPermit: false,
                      level: 3,
                    },
                  },
                },
              },
              maxTagCount: 1,
              searchable: true,
              clearable: true,
              checkAll: true,
            },
          ],
        },

        {
          title: '外观',
          body: [],
        },
      ],
    },
  ]
}

export default AnjiLabel

import {
  ScopedContext,
  evalExpressionWithConditionBuilder,
  qsstringify,
} from 'amis-core'
import CRUD from 'amis/lib/renderers/CRUD'

export default class AnjiCrud extends CRUD {
  static contextType = ScopedContext

  constructor(props: any, context: any) {
    super(props)

    const scoped = context
    scoped.registerComponent(this as any)
  }

  componentWillUnmount() {
    super.componentWillUnmount()
    const scoped = this.context as any
    scoped.unRegisterComponent(this as any)
  }

  reload(
    subpath?: string,
    query?: any,
    ctx?: any,
    silent?: boolean,
    replace?: boolean,
    args?: any,
  ) {
    const scoped = this.context as any
    if (subpath) {
      return scoped.reload(
        query ? `${subpath}?${qsstringify(query)}` : subpath,
        ctx,
      )
    }

    return super.reload(subpath, query, replace, args?.resetPage ?? true)
  }

  receive(
    values: any,
    subPath?: string,
    replace?: boolean,
    resetPage?: boolean,
  ) {
    const scoped = this.context as any
    if (subPath) {
      return scoped.send(subPath, values)
    }

    return super.receive(values, undefined, replace, resetPage)
  }

  reloadTarget(target: string, data: any) {
    const scoped = this.context as any
    scoped.reload(target, data)
  }

  closeTarget(target: string) {
    const scoped = this.context as any
    scoped.close(target)
  }

  async setData(
    values: {
      items?: any[]
      rows?: any[]
      total?: number
      count?: number
    },
    replace?: boolean,
    index?: number | string,
    condition?: any,
  ) {
    const { store } = this.props
    const len = store.data.items.length

    if (index !== undefined) {
      let items = [...store.data.items]
      const indexs = String(index).split(',')
      indexs.forEach((i) => {
        const intIndex = Number(i)
        items.splice(intIndex, 1, values)
      })
      // 更新指定行记录，只需要提供行记录即可
      return store.updateData({ ...values, items }, undefined, replace)
    } else if (condition !== undefined) {
      let items = [...store.data.items]
      for (let i = 0; i < len; i++) {
        const item = items[i]
        const isUpdate = await evalExpressionWithConditionBuilder(
          condition,
          item,
        )

        if (isUpdate) {
          items.splice(i, 1, values)
        }
      }

      // 更新指定行记录，只需要提供行记录即可
      return store.updateData({ ...values, items }, undefined, replace)
    } else {
      const total = values?.total || values?.count
      if (total !== undefined) {
        store.updateTotal(parseInt(total as any, 10))
      }

      return store.updateData(
        { ...values, items: values.rows ?? values.items }, // 做个兼容
        undefined,
        replace,
      )
    }
  }

  getData() {
    const { store, data } = this.props
    return store.getData(data)
  }
}

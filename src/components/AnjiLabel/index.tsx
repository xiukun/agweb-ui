import React from 'react'

function AnjiLabel(props: any) {
  const { text, apiPath } = props

  return (
    <div>
      hello,{text},{apiPath}
    </div>
  )
}

export default React.forwardRef((props, ref) => (
  <AnjiLabel {...props} forwardRef={ref} />
))

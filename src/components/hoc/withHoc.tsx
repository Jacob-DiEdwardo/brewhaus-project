import React, { ElementType } from 'react'
import { WithHocType } from './hocTypes'

const withHoc: WithHocType = hoc => (
    WrappedComponent: ElementType
): ElementType => props => <WrappedComponent { ...props} { ...(hoc(props)) } />

export default withHoc

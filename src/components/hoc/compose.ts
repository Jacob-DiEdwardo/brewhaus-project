import { ComposeType } from './hocTypes'

const compose: ComposeType = (...funcs) =>
    funcs.reduce(
        (a, b) => (...args: any[]) => a(b(...args)),
        (arg: any) => arg,
    )

export default compose

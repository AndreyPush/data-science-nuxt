import utils from '~/plugins/custom/utils'

const utilsFactory = () => (utils)

export default (ctx, inject) => {

    const utils = utilsFactory()
    inject("utils", utils)
}

import Ueditor from './src/component.vue'

UEditor.install = function (Vue) {
    Vue.component(Ueditor.name, Ueditor)
}

export default Ueditor

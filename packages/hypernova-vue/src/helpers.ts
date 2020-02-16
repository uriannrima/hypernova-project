import Vue, { VueConstructor } from "vue";

export const createInstance = ({
  Component,
  propsData
}: {
  Component: VueConstructor<Vue>;
  propsData: any;
}): Vue => {
  const Constructor = Vue.extend(Component);
  return new Constructor({
    propsData
  });
};

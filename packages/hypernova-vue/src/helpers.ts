import Vue, { VueConstructor } from "vue";

function isVueInstance(Component: VueConstructor<Vue> | Vue): Component is Vue {
  return Component instanceof Vue;
}

export const createInstance = ({
  Component,
  propsData
}: {
  Component: VueConstructor<Vue> | Vue;
  propsData: any;
}): Vue => {
  console.log({ Component });
  if (isVueInstance(Component)) {
    console.log("Is Instance");
    return Component;
  } else {
    console.log("Is not instance");

    const Constructor = Vue.extend(Component);
    return new Constructor({
      propsData
    });
  }
};

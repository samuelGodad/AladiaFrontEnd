import MyWelcome from './MyWelcome.vue';

export default {
  title: 'MyWelcome',
  component: MyWelcome,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyWelcome },
  template: '<MyWelcome v-bind="$props" />',
});

export const Welcome = Template.bind({});
Welcome.args = {
  primary: true,
  label: 'Welcome',
};


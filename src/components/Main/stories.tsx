import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components',
  },
  argTypes: {
    title: {
      name: 'Título',
      type: { name: 'string', required: true },
    },
    control: {
      type: 'text',
    },
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = args => <Main {...args} />;

export const BasicMain = Template.bind({});

export const DefaultMain = Template.bind({});
DefaultMain.args = {
  title: 'Blabla',
  description: 'Blablabla',
};

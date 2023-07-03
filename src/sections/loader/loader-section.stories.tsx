import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { loaderSectionProps } from './mock-data';
import { loaderSectionLevels } from './interface';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    level: {
      control: 'select',
      options: [...loaderSectionLevels],
    },
  },

  decorators: [(Story) => <Story />],
};

export default meta;

export const SectionLevel: StoryObj<typeof Component> = {
  args: { ...loaderSectionProps },
};
export const PageLevel: StoryObj<typeof Component> = {
  args: { ...loaderSectionProps, level: 'page' },
};

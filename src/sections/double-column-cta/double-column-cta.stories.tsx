import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { doubleColumnCtaSectionProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    ctaButton: {
      table: {
        disable: true,
      },
    },
    rightContent: {
      table: {
        disable: true,
      },
    },
    sectionHeading: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [(Story) => <Story />],
};

export default meta;

export const DoubleColumnCta: StoryObj<typeof Component> = {
  args: doubleColumnCtaSectionProps,
};

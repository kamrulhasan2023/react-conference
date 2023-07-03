import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/container';
import { customPortableTextProps } from './mock-data';
import clsx from 'clsx';
import { portableTextNormalBlockFontSizes } from './interface';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
    isDefaultBg: {
      control: 'boolean',
    },
    normalBlockFontSize: {
      control: 'select',
      options: [...portableTextNormalBlockFontSizes],
    },
  },
  decorators: [
    (Story, ctx) => (
      <div
        className={clsx('section-padding-primary', [
          ctx.args.isDefaultBg === true ? ' ' : 'bg-primary-thin',
        ])}
      >
        <Container>
          <Story />
        </Container>
      </div>
    ),
  ],
};

export default meta;

export const DefaultBg: StoryObj<typeof Component> = {
  args: customPortableTextProps,
};
export const PrimaryThinBg: StoryObj<typeof Component> = {
  args: { ...customPortableTextProps, isDefaultBg: false },
};

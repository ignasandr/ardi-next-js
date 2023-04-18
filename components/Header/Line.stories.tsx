import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import Line from './Line';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Line> = {
  title: 'Header/Line',
  component: Line,
  tags: ['autodocs'],
  decorators: [
    (Story) => 
    <Layout>
      <Story />
    </Layout>
  ]
};

export default meta;
type Story = StoryObj<typeof Line>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
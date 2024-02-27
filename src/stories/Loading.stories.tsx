import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Loading from '@/components/Loading';

const meta: Meta<typeof Loading> = {
  component: Loading,
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  render: () => <Loading open={true} />,
};


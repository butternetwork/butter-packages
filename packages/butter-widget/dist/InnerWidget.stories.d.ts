import { Meta, StoryObj } from '@storybook/react';
import { default as InnerWidget } from './Widget';
declare const meta: Meta<typeof InnerWidget>;
export default meta;
type Story = StoryObj<typeof InnerWidget>;
export declare const Default: Story;

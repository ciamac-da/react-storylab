import { fn } from 'storybook/test';

import { Alert } from './Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Success = {
    args: {
        type: 'success',
        message: 'This is a success alert message!',
    }
}

export const Error = {
    args: {
        type: 'error',
        message: 'This is an error alert message!',
    }
}

export const Warning = {
    args: {
        type: 'warning',
        message: 'This is a warning alert message!',
    }
}
export const Info = {
  args: {
    type: 'info',
    message: 'This is an info alert message!',
  },
};

import '../src/index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const story1 = () => `<my-counter></my-counter>`;
export const story2 = () => `<embedded-webview src=""></embedded-webview>`;

import Heading from '../../../components/atoms/typography/Heading';

const HeadingSB = {
  title: 'Atoms/Typography/Heading',
  component: Heading,
  argTypes: {
    color: 'color',
  },
};

const Template = (args) => <Heading {...args} />;

export const MobileHeading = Template.bind({});
MobileHeading.args = {
  text: 'Mobile Heading 16px',
  size: 'sm',
  weight: 'bold',
  color: '#151b23',
};

export const TabletHeading = Template.bind({});
TabletHeading.args = {
  text: 'Tablet Heading 20px',
  size: 'md',
  weight: 'bold',
  color: '#151b23',
};

export const LaptopHeading = Template.bind({});
LaptopHeading.args = {
  text: 'Laptop Heading 24px',
  size: 'lg',
  weight: 'bold',
  color: '#151b23',
};

export const DesktopHeading = Template.bind({});
DesktopHeading.args = {
  text: 'Desktop Heading 32px',
  size: 'xl',
  weight: 'bold',
  color: '#151b23',
};

export default HeadingSB;

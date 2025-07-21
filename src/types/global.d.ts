export {};

declare global {
  type ResponsiveProps = {
    children: React.ReactNode;
    reset: string;
  };
  type TitleProps = {
    text: string
    icon: React.ReactNode
  }
}

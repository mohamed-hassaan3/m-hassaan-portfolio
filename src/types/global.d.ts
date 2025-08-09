export {};

declare global {
  type ResponsiveProps = {
    children: React.ReactNode;
    reset: string;
  };
  type TitleProps = {
    text: string
    icon?: React.ReactNode
  }
  type UserValueProps = {
    id?: Date
    name: string
    email: string
    message: string 
  }
}

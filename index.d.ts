interface IPlayer {
  id: string;
  name: string;
  initiative: string;
}

interface IButtonProps {
  onClick: () => void;
}

interface ITextButtonProps extends IButtonProps {
  text: string;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

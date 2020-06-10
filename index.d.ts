/* istanbul ignore file */

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

interface IStorageProvider {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

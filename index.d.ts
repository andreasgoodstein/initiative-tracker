interface IPlayer {
  id: string;
  name: string;
  initiative: string;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

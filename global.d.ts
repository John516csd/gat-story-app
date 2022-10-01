declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.mp4";
declare module "*.webp";
declare module "*.gif";
declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare interface Window {
  Intercom: any;
  google: any;
}

import "react";

declare module "react" {
  interface CSSProperties {
    "--progress-mask"?: string;
  }
}

import React from "react";

import { withPrefix } from "gatsby";
import ShortcutIcon from "@/assets/images/favicon.png";

interface IHeadProps {
  /** 网页标题 */
  title?: string;
  /** 网页权威链接 */
  canonical?: string;
  /** 网页描述 */
  description?: string;
  /** 网页封面图 */
  cover?: string;
  children?: React.ReactNode;
}

const Head: React.FC<IHeadProps> = ({
  title,
  description,
  canonical,
  cover,
  children,
}) => {
  return (
    <>
      {/* Title */}
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta property="twitter:title" content={title} />}
      {/* Description */}
      {description && <meta name="description" content={description} />}
      {description && <meta content={description} property="og:description" />}
      {description && (
        <meta content={description} property="twitter:description" />
      )}
      {/* Cover */}
      {cover && <meta content={cover} property="og:image" />}
      {cover && <meta content={cover} property="twitter:image" />}
      {children}
    </>
  );
};

export default Head;

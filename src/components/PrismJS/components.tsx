import React from "react";
import { css } from "@emotion/core";
import Prism from "prismjs";

type Props = {
  code: string;
  plugins?: string[];
  language?: string;
};

class PrismCode extends React.Component<Props> {
  private ref: React.RefObject<HTMLElement>;

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.highlight();
  }
  componentDidUpdate() {
    this.highlight();
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  };

  render() {
    const { code, plugins, language } = this.props;
    return (
      <pre
        css={css`
          width: 100%;
        `}
        className={!plugins ? "" : plugins.join(" ")}
      >
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    );
  }
}

export default PrismCode;

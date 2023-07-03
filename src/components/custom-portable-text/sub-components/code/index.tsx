import Refractor from 'react-refractor';
// Sanity backend is currently using only these three coding languages
import js from 'refractor/lang/javascript';
import typescript from 'refractor/lang/typescript';
import tsx from 'refractor/lang/tsx';
import { ISanityCode } from 'src/backend/queries/portable-text/interface/code';

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);

interface Props {
  code: ISanityCode;
}

export default function CodeElement({ code }: Props) {
  /**
   * ISSUE: Sanity code block does not set a language value by default.
   * We have set 'typescript' as default language in sanity.
   */
  if (!code.language) {
    return (
      <Refractor
        language={'typescript'}
        value={code.code}
        markers={code.highlightedLines}
      />
    );
  }

  if (Refractor.hasLanguage(code.language)) {
    return (
      <Refractor
        language={code.language}
        value={code.code}
        markers={code.highlightedLines}
      />
    );
  } else {
    return (
      <div className="rounded-5 bg-danger p-4">
        <b>Language not supported!</b>
      </div>
    );
  }
}

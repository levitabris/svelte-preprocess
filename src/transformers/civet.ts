import * as civet from '@danielx/civet';

import type { Transformer, Options } from '../types';

// This works
// const testStr = '"hello world" |> console.log'
// console.log(civet.compile(testStr, {sourceMap: true}).sourceMap)

const transformer: Transformer<Options.Civet> = ({
  content,
  options,
}) => {
  const civetOptions = {
    ...options,
  }

  if (civetOptions.sourceMap) {
    const { code, sourceMap } = civet.compile(
      content,
      civetOptions,
    );

    // const map = JSON.parse(sourceMap);

    return { code, sourceMap };
  }

  return { code: civet.compile(content) };
};

export { transformer };

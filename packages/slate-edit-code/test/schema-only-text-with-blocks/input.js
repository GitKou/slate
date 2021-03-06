/** @jsx hyperscript */

import { Value } from '@gitbook/slate'
import hyperscript from '../hyperscript'

export default Value.fromJS(
  {
    document: (
      <document>
        <code_block>
          <code_line>
            <text>One text</text>
            <default>Unwanted text</default>
            <text>Two text</text>
          </code_line>
        </code_block>
      </document>
    ),
  },
  { normalize: false }
)

import React from 'react';
import EmojiIcon from "@atlaskit/icon/glyph/emoji";

import Tooltip from "@atlaskit/tooltip";
import Select, { components } from 'react-select';

const MultiValueRemove = props => {
  return (
    <Tooltip
      content={'Customise your multi-value remove component!'}
      truncateText
    >
      <components.MultiValueRemove {...props}>
        <EmojiIcon primaryColor="grey" />
      </components.MultiValueRemove>
    </Tooltip>
  );
};

function SelectMenuMultiple({options,onChangeHandler})  {
  
  return (

    <Select
    onChange={(e)=>{onChangeHandler(e)}}
    closeMenuOnSelect={false}
    components={{ MultiValueRemove }}
    styles={{
      multiValueRemove: base => ({
        ...base,
        border: `1px dotted indigo`,
        height: '100%',
      }),
    }}

    isMulti
    options={options}
  />

  );
    
}


export default SelectMenuMultiple;

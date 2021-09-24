import React from 'react';
import Select, { components } from 'react-select';

const ValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>{children}</components.ValueContainer>
);


function SelectMenuSingle({options,onChangeHandler})  {
  
  const bg={value:"pyrple"}
    return (
      <Select
       onChange={(e,v)=>{onChangeHandler(e)}}
   
        defaultValue={options[0]}
        isClearable
        styles={{
          singleValue: base => ({ ...base, color: 'grey' }),
          valueContainer: base => ({
            ...base,
            color: 'grey',
            width: '100%',
          }),
        }}
        components={{ ValueContainer }}
        isSearchable
        name="category"
        options={options}
      />
    );
}

export default SelectMenuSingle;
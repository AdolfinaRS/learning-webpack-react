import * as React from 'react';

interface Props {
  newOrganizationName : string;
  onSubmitNewOrganizationName : (newEditingname : string) => void;
  onLoadMembers : () => void;
}

const onChange = (props : Props) => (event) => {
  props.onSubmitNewOrganizationName(event.target.value);
}

// const onSubmit = (props : Props) => () => {
//   props.onLoadMembers();
// }

export const SearchComponent = (props : Props) =>
  <>
    <input value={props.newOrganizationName}
            onChange={onChange(props)}/>
    <button onClick={props.onLoadMembers}>Load</button>
  </>
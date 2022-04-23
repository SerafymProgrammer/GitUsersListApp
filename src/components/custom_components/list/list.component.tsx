import React, { FunctionComponent } from 'react';
import './list.style.scss';
import {I_list_props} from "./list.interfaces";

type Props = I_list_props;

const List: FunctionComponent<Props> = (props) => {
    const {list, render_item} = props;
    console.log(list)
    return (
      <ul className={'list_block'}>
          {
              list.map(render_item)
          }
      </ul>
  );
};

export default List;

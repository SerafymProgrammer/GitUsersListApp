import React, { FunctionComponent } from 'react';
import {I_info_text_block} from "./info_text_block.interfaces";

type Props = I_info_text_block;

const InfoTextBlock: FunctionComponent<Props> = (props) => {
  const {label, value} = props;
  return (
      <div className={'info_text_block'}>
        <span className={'info_text_block_label'}>{label}</span>
        <span className={'info_text_block_value'}>{value}</span>
      </div>
  );
};

export default InfoTextBlock;

import React, { FunctionComponent } from 'react';
import './user_info_block.style.scss';
import {I_user_info_block_props} from "./user_info_block.interfaces";
import {personal_info_array} from "./user_info_block.consts";
import InfoTextBlock from "./info_text_block/info_text_block.component";
import avatar_pub from '../../../../assets/images/avatar_pub.png'

type Props = I_user_info_block_props;

const UserInfoBlock: FunctionComponent<Props> = (props) => {
  const info_data = props.info_data;
  return (
      <div className={'user_info_block_wrap'}>
          <div className={'uib_wrap_avatar_and_pers_info'}>
              <div className={'uib_avatar'}>
                  <img className={'uib_avatar_img'} src={info_data.avatar_url||avatar_pub}/>
              </div>
              <div className={'uib_pers_info'}>
                  {
                      personal_info_array.map((item, index)=>{
                        return (
                            <InfoTextBlock
                                label={item.label}
                                value={(info_data as any)[item.value_key]}
                            />
                        )
                      })
                  }
              </div>
          </div>
          <div className={'uib_bio'}>
              <span className={'uib_bio_text'}>{info_data.bio}</span>
          </div>
      </div>
  );
};

export default UserInfoBlock;

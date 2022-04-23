import React, { FunctionComponent } from 'react';
import './user_list_item.style.scss'
import {I_user_list_item_props} from "./user_list_item.interfaces";
import avatar_pub from '../../../../assets/images/avatar_pub.png'

type Props = I_user_list_item_props;

const UserListItem: FunctionComponent<Props> = (props) => {
    const {avatar_url, public_repos, login} = props.item_data;
  return (
        <li className={'user_list_item_block'}>
          <div className={'uli_avatar'}>
            <img src={avatar_url || avatar_pub} className={'uli_avatar_img'}/>
          </div>
          <div className={'uli_username'}>
            <span className={'uli_username_text'}>{login}</span>
          </div>
          <div className={'uli_repos_count'}>
            <span className={'uli_repos_count_label'}>Repo:{' '}</span>
            <span className={'uli_repos_count_value'}>{public_repos}</span>
          </div>
        </li>
  );
};

export default UserListItem;

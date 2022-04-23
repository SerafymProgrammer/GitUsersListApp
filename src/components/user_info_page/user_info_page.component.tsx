import React, { FunctionComponent, useEffect } from 'react';
import {} from './user_info_page.service';
import './user_info_page.style.scss'
import UserInfoBlock from "./interface_components/user_info_block/user_info_block.component";

interface user_info_page_interface {}

type Props = user_info_page_interface;

const UserInfoPage: FunctionComponent<Props> = (props) => {
  useEffect(() => {

  }, []);
  return (
      <>
        <div className={'user_info_page_wrap'}>
            <UserInfoBlock info_data={{
                id: 123,
                avatar_url:'',
                login: 'asd',
                email: 'email',
                location: 'asd',
                created_at: new Date().toString(),
                followers: 123,
                following: 123,
                bio:'Hahaha'
            }}/>
        </div>
      </>
  );
};

export default UserInfoPage;

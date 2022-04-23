import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import UserListService  from './user_list_page.service';
import SearchBar from "../custom_components/search_bar/search_bar.component";
import List from "../custom_components/list/list.component";
import UserListItem from "./interface_components/user_list_item/user_list_item.component";
import {I_user_list_item} from "./interface_components/user_list_item/user_list_item.interfaces";
import {I_user_list_page} from "./user_list_page.interfaces";
import './user_list_page.style.scss';

type Props = I_user_list_page;

const UserListPage: FunctionComponent<Props> = (props) => {
    const [users_list, set_users_list] = useState<[]>([])
    const [search_query, set_search_query] = useState<string>('')


    const handle_change_search_query = useCallback((new_query:string)=>{
        UserListService.search_users(new_query).then((res: any)=>{
            console.log(res.data)
            set_users_list(res.data.items)
        })
        set_search_query(new_query)
    }, [])

    useEffect(() => {

    }, []);

  return (
      <>
          <div className={'user_list_page_wrap'}>
              <SearchBar on_change={handle_change_search_query}/>

              <div className={'user_list_block'}>
              <List
                  list={users_list}
                  render_item={(user_info: I_user_list_item, index: number)=>{
                      const {avatar_url, login, public_repos, id} = user_info;
                      return (
                          <UserListItem
                              key={'user_list'+id+index}
                              item_data={{
                                  id,
                                  avatar_url,
                                  login,
                                  public_repos
                              }}
                          />
                      )
                  }}/>
              </div>
          </div>
      </>
  );
};

export default UserListPage;

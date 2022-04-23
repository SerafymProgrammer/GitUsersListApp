import React, { FunctionComponent } from 'react';
import {Routes, Route} from 'react-router-dom';
import UserListPage from "../components/user_list_page/user_list_page.component";
import UserInfoPage from "../components/user_info_page/user_info_page.component";

interface router {}

type Props = router;

const Router: FunctionComponent<Props> = (props) => {

  return (
      <>
        <Routes>
          <Route path={'/'} element={<UserListPage />}/>
          <Route path={'/user_info/:id'} element={<UserInfoPage />}/>
        </Routes>
      </>
  );
};

export default Router;

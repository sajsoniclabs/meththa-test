import React, { FunctionComponent, useEffect } from "react";
import styles from "./index.module.css";

// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../redux/actions/AppActions";
import { AppState } from "../../redux/store";
import { Auth, UserDetails, UserTel } from "../../redux/types/UserActionTypes";
import { bindActionCreators } from "redux";
import {
  GetUserData,
  GetOtherData,
  GetTelData,
} from "../../redux/actions/UserActions";
import { NextPage } from "next";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

interface LinkStateProps {
  user: Auth;
}

interface LinkDispatchProps {
  GetOtherData: () => void;

  GetUserData: (name: string) => void;
  GetTelData: () => void;
}

type Props = LinkStateProps & LinkDispatchProps;

const HomeIndex: FunctionComponent<Props> = ({
  GetUserData,
  GetOtherData,
  GetTelData,

  user: { username, otherdetails, tel },
}) => {
  useEffect(() => {
    GetUserData("kamal");
    GetTelData();
    GetOtherData();
  }, [GetOtherData, GetTelData, GetUserData]);

  // console.log("first", tel, username, otherdetails);

  return (
    <div className={styles.main}>
      <div>
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section6 />
      </div>
      <div>
        <Section7 />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): LinkStateProps => ({
  user: state.user,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  GetUserData: bindActionCreators(GetUserData, dispatch),
  GetOtherData: bindActionCreators(GetOtherData, dispatch),
  GetTelData: bindActionCreators(GetTelData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);

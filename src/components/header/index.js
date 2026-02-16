import React from "react";

import {Menu} from 'antd';
import 'antd/dist/antd.css';

function Header() {
  return (
    <>     
        <Menu mode="horizontal" defaultSelectedKeys={['about']} style={{justifyContent: 'flex-end'}}>
          <Menu.Item key="about">
            <a href="#projects" >
              <strong>About</strong>
            </a>
          </Menu.Item>
          <Menu.Item key="cv">
              <a href={"https://drive.google.com/file/d/1Dov5BSCd-JB3SbTwdH2_Wq2ciTKPr1ba/view?usp=sharing"} target = "_blank" rel="noreferrer">
                <strong>CV</strong>
              </a>
          </Menu.Item>
        </Menu>
  </>
  );
}

export default Header;
import React from 'react';
import Routes from './routes';
import {
  Content,
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderContainer,
  SkipToContent
} from "carbon-components-react/lib/components/UIShell";
import { GoMarkGithub } from "react-icons/go";
import redirect from './actions/redirect';

function App() {
  return (
    <>
      <div className="container">
      <HeaderContainer
        render={() => {
          return (
            <Header>
              <SkipToContent />
        <HeaderName prefix="">
          MTG Deck Strategy
        </HeaderName>
      <HeaderGlobalBar>
          <HeaderGlobalAction onClick={() => redirect("https://github.com/NichoBrando/MTG-Deck-Strategy-Free-Web")}>
              <GoMarkGithub size="26" />
          </HeaderGlobalAction>
      </HeaderGlobalBar>
      </Header>
          )
      }}
        />
      </div>
      <Content>
          <div style={{margin: "30px 0"}}>
            <Routes />
        </div>
      </Content>
    </>
  );
}

export default App;

import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function ParamItem() {
  let { id } = useParams();
  return <h3>{id}</h3>;
}

function ParamsExample() {
  let match = useRouteMatch();

  return (
    <>
      <h2>Params Example</h2>

      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/google`}>Google</Link>
          </li>
          <li>
            <Link to={`${match.url}/yahoo`}>Yahoo</Link>
          </li>
          <li>
            <Link to={`${match.url}/bing`}>Bing</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={`${match.path}/:id`}>
          <ParamItem />
        </Route>
        <Route path={match.path}>
          <h3>Select a param</h3>
        </Route>
      </Switch>
    </>
  );
}

export default ParamsExample;

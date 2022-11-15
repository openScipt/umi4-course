
import { Link, useSearchParams, createSearchParams, useLocation } from "umi";
import React from "react";

export default () => {

  const [SearchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const a = SearchParams.get('a')
  const b = SearchParams.get('b')

  return (
    <div>Hello Work
      <p><Link to="/user">Go to user page</Link></p>
      <div>
        <p>SearchParams ----- a:{a}; b:{b}</p>
        <p>State --- {JSON.stringify(location?.state)}</p>
        <button
          onClick={() => {setSearchParams(createSearchParams({a: '123', b: '456'}))}}
        >Change SearchParams</button>
      </div>
    </div>
  )
}
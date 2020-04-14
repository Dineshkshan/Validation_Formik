import React from 'react';
import Formik1 from "./Formik1";
export const Submit=(values) =>
{
  console.log("The values are",values.FirstName);
}
function App() {
  return(
    <div>
      <Formik1 Submit/>
    </div>
  );
}

export default App;

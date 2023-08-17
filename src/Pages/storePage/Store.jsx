import "./Store.css";
import Card1 from "./Card1";
import Filter from "./Filter";
export const Store = ({value}) => {
  console.log(value)
  return (
    <>
        <Filter/>
        <Card1/>
    </>
  )
}





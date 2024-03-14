import React from 'react'
import BasicTable from '../../../reuseables/table/BasicTable'

const dummyData = [
  {
    birthday: "15-05-2023",
    name: "John",
    stateOfOrigin: 'Lagos state',
    fathersName: "Mark",
    mothersName: "Moyin",
    localGovt: 'Ikeja',
  },
  {
    birthday: "15-05-2023",
    name: "Ayo",
    stateOfOrigin: 'Lagos state',
    fathersName: "Mark",
    mothersName: "Jane",
    localGovt: 'Ikeja',
  },
  {
    birthday: "15-05-2023",
    name: "Luke",
    stateOfOrigin: 'Lagos state',
    fathersName: "Mark",
    mothersName: "Mary",
    localGovt: 'Ikeja',
  }
]
const fetchData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    setData(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const tableHeader = ['Name', 'Birthday','State Of Origin', 'Fathers Name', 'Mothers Name', 'Local Govt']
const ViewAll = () => {
  return (
    <div>
      
      <BasicTable data={dummyData} tableHeader={tableHeader}/>

    </div>
  )
}

export default ViewAll
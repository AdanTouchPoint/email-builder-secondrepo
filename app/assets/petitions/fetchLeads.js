import { fetchData } from "./fetchData";
const fetchLeads = (
  successResponse,
  backendURLBase,
  endpoints,
  clientId,
  dataUser,
  emailData,questions
) => {
  fetchData(
    "POST",
    backendURLBase,
    endpoints.toSaveLeads,
    clientId,
    `&firstName=${dataUser.userName ? dataUser.userName : ""}&postalcode=${
      dataUser.zipCode ? dataUser.zipCode : dataUser.state
    }&emailData=${dataUser?.emailUser}&representative=${
      emailData?.name
    }&emailMessage=${JSON.stringify(questions)}&sended=${successResponse}&subject=${dataUser?.subject}&city=${dataUser?.city}&party=${dataUser?.party}`
  );
};

const fetchAllLeads = async (petitionMethod,backendURLBase, endpoint, clientId, setLeads) => {
  const  leads = await fetchData(petitionMethod, backendURLBase, endpoint, clientId)
   const data = leads.data
   setLeads(data)
}

export {
   fetchLeads, fetchAllLeads
}
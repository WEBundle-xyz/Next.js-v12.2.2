import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  // console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push('/clients/stef/projectA');
  }
  return (
    <div>
      <h1>The Project of a Given Project</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;


//  because we do not supporting that
// and next js on the pages folder 
// and therer  I want toa add a 404 
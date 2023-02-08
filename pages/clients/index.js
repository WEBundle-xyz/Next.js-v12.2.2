import Link from 'next/link';

function ClientPage() {
  const clients = [
    { id: 'Stef', name: 'Stefan' },
    { id: 'Jackie', name: 'Patti' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {/* <li>
          <Link href='/clients/stef'>Stef</Link>
        </li>
        <li>
          <Link href='/clients/jackie'>Jackie</Link>
        </li> */}
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>;
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;


import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";;

export default function Dashboard() {

  return (
    <>
      <h1>Metrics</h1>
    </>
  );
}

export const GetServerSideProps = withSSRAuth(async (ctx) => {
  const apiCliente = setupAPIClient(ctx);
  const response = await apiCliente.get('/me');

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list6454'],
  roles: ['administrator']
});

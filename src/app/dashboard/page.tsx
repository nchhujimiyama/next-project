import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "@/app/lib/data";

const Page = async () => {
  const revenues = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData();

  return (
    <>
      <section>
        <div>
          <h2>Collected</h2>
          <p>{totalPaidInvoices}</p>
        </div>
        <div>
          <h2>Pending</h2>
          <p>{totalPendingInvoices}</p>
        </div>
        <div>
          <h2>Total Invoices</h2>
          <p>{numberOfInvoices}</p>
        </div>
        <div>
          <h2>Total Customers</h2>
          <p>{numberOfCustomers}</p>
        </div>
      </section>
      <section>
        <h2>Revenue</h2>
        {revenues.map((revenue) => {
          return (
            <dl key={revenue.month}>
              <dt>{revenue.month}</dt>
              <dd>{revenue.revenue}</dd>
            </dl>
          );
        })}
      </section>
      <section>
        <h2>Latest Invoices</h2>
        {latestInvoices.map((invoice) => {
          return (
            <dl key={invoice.id}>
              <dt>{invoice.name}</dt>
              <dd>{invoice.email}</dd>
              <dd>{invoice.amount}</dd>
            </dl>
          );
        })}
      </section>
    </>
  );
}

export default Page;

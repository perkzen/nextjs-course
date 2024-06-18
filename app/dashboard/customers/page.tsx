import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { TableQueryParams } from '@/app/lib/definitions';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({ searchParams }: TableQueryParams) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query)

  return <CustomersTable customers={customers} />;
}

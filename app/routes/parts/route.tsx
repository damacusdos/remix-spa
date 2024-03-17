// components
import PartsTable from './parts-table';
// type
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Parts | Remix SPA' }];
};

const Parts = () => {
  return (
    <div className="bg-[#FFFCF0] h-[100vh] p-8">
      <h1 className="text-2xl mb-8">Parts</h1>
      <PartsTable />
    </div>
  );
};

export default Parts;

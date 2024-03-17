// react table
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
// components
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
// faker
import { faker } from '@faker-js/faker';

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  origin: string;
  category: string;
}

const createProduct = (): Product => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.number.int({ max: 1000 }),
    currency: 'TWD',
    description: faker.commerce.productDescription(),
    origin: faker.address.country(),
    category: faker.commerce.department(),
  };
};

const products = Array.from({ length: 10 }, () => createProduct());

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Product Name',
  }),
  columnHelper.accessor('price', {
    header: 'Price',
  }),
  columnHelper.accessor('description', {
    header: 'Description',
  }),
  columnHelper.accessor('origin', {
    header: 'Origin',
  }),
];

const ProductsTable = () => {
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white border b-gray-100 rounded-lg">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;

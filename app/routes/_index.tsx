import { useNavigate } from '@remix-run/react';
// components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// icons
import AccountSVG from '@/assets/account.svg?react';
// type
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/parts');
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white flex flex-col justify-center items-center p-8 w-[400px] rounded-xl border b-[#100F0F]">
        <AccountSVG className="text-black w-6 h-6" />
        <h1 className="text-xl text-primary">Welcome</h1>

        <div className="w-full flex flex-col gap-y-4 mt-4">
          {/* email */}
          <div>
            <label htmlFor="email">Email</label>
            <Input id="email" placeholder="Username" />
          </div>
          {/* password */}
          <div>
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
        </div>

        <Button className="w-full mt-24" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}

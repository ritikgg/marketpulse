import React from 'react';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';
import { User, Package, Settings, CreditCard } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user } = useStore();
  const [activeTab, setActiveTab] = React.useState<'details' | 'orders' | 'settings'>('details');

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-16">
        <h2 className="text-2xl font-bold">Please sign in</h2>
        <p className="text-gray-600">Sign in to view your profile</p>
        <Button>Sign In</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="flex space-x-2 border-b">
        <Button
          variant={activeTab === 'details' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('details')}
        >
          <User className="mr-2 h-4 w-4" />
          Personal Details
        </Button>
        <Button
          variant={activeTab === 'orders' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('orders')}
        >
          <Package className="mr-2 h-4 w-4" />
          Order History
        </Button>
        <Button
          variant={activeTab === 'settings' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('settings')}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>

      <div className="space-y-6">
        {activeTab === 'details' && (
          <form className="max-w-2xl space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                  defaultValue={user.name.split(' ')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                  defaultValue={user.name.split(' ')[1]}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                defaultValue={user.email}
              />
            </div>
            <Button>Save Changes</Button>
          </form>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-4">
            {/* Mock order data */}
            {[1, 2, 3].map((order) => (
              <div
                key={order}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order #{order}</p>
                    <p className="text-sm text-gray-500">
                      Placed on March {order}, 2024
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl space-y-6">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-lg font-medium">Payment Methods</h3>
              <div className="flex items-center justify-between border-t py-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/24</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-lg font-medium">Notifications</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked />
                  <span>Email notifications for orders</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked />
                  <span>Email notifications for promotions</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
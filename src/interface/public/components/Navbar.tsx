import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, UserIcon, XIcon } from '@heroicons/react/outline';
import { ViewGridIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

type UserInfo = {
  name: string;
  role: string;
  email: string;
};
interface State {
  user: UserInfo | null;
}

const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Contacto', to: '/contacto' },
];

const profileMenu = [
  { name: 'Mi perfil', to: '#' },
  { name: 'Cerrar sesión', to: '#' },
];

const Navbar = () => {
  const name = useSelector((state: State) => state.user?.name) || null;
  console.log(name && name.split(' ')[0]);

  return (
    <Disclosure as="nav" className="bg-sky-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./pictures/scientechLogos/favicon.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="./pictures/scientechLogos/scientechWhite.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({
                          isActive,
                        }: {
                          isActive: boolean;
                        }): string =>
                          (isActive
                            ? 'bg-sky-900 text-white'
                            : 'text-gray-300 hover:bg-sky-700 hover:text-white') +
                          ' rounded-md px-3 py-2 text-sm font-medium'
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {name ? (
                  <>
                    <Menu
                      as="div"
                      className="relative ml-3 border border-transparent "
                    >
                      <div className="flex gap-px">
                        <Menu.Button className="flex rounded-l-full bg-sky-800 p-2 text-sm text-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <span>{`Hola, ${name.split(' ')[0]}`}</span>
                        </Menu.Button>
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-1 rounded-r-full bg-sky-800  p-1 px-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <ViewGridIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                          <span className="text-sm">Apps</span>
                        </Link>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {profileMenu.map((item, i) => (
                            <Menu.Item key={i}>
                              <a
                                href={item.to}
                                className={
                                  'block bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
                                }
                              >
                                {item.name}
                              </a>
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-1 rounded-full bg-sky-800 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="text-sm">Iniciar sesión</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={
                    'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

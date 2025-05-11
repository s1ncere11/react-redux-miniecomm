import { IoIosPricetag } from "react-icons/io";
import { Button } from "../ui/button";
import { Sidebar } from "lucide-react";
import { IoAdd, IoCart, IoPerson } from "react-icons/io5";

const SidebarItem = (props) => {
  const { children } = props;
  return (
    <Button
      variant="ghost"
      size="lg"
      className="justify-start w-full rounded-none"
    >
      {children}
    </Button>
  );
};

export const AdminLayout = (props) => {
  const { title, description, sideButton, children } = props;
  return (
    <div className="flex">
      <aside className="h-screen border-r w-72">
        <div className="flex flex-col items-center justify-center h-16 border-b">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        </div>
        <div className="flex flex-col py-4 space-y-0">
          <SidebarItem>
            <IoIosPricetag className="w-6 h-6 mr-4" />
            Product Management
          </SidebarItem>
          <SidebarItem>
            <IoCart className="w-6 h-6 mr-4" />
            Order Management
          </SidebarItem>
        </div>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-end w-full h-16 px-8 border-b">
          <Button className="rounded-full" size="icon">
            <IoPerson className="w-6 h-6" />
          </Button>
        </header>
        <main className="flex flex-col p-4">
          <div className="flex items-center justify-between pb-4 mb-8 border-b">
            <div>
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            {sideButton}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

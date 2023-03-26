import { useAppContext } from "@/utils/state";

export const UserSidebar = () => {
  const { user } = useAppContext();

  return (
    <div className="border text-center p-5 rounded">
      <img
        className="avatar"
        src={user?.avatar}
        alt="avatar"
        height="192"
        width="192"
      />

      <div className="mt-4">
        <p>
          hola, <span className="username">{user?.userName}</span>
        </p>
      </div>
      <p>{user?.email}</p>
    </div>
  );
};

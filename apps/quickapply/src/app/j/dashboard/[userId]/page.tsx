import LogoutBtn from "@/components/users/LogoutBtn";

export default function UserDashborad({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div>
      My Post: {params.userId} <LogoutBtn id={params.userId} />
    </div>
  );
}

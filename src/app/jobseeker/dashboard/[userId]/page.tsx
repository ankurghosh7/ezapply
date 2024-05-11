export default function UserDashborad({
  params,
}: {
  params: { userId: string };
}) {
  return <div>My Post: {params.userId}</div>;
}

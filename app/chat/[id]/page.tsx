export default function Chat({ params }: { params: { id:string}}) {
  return (
    <div>
      <h1>Chat</h1>
      <p>Chat ID: {params.id}</p>
    </div>
  );
}

import UsersReviews from "@/components/users-reviews";

export default function ProductDetails() {
  return (
    <div className="grid grid-cols-12 w-full gap-4">
      <div className="col-span-10 col-start-2 flex flex-col gap-4 w-full">
        <UsersReviews />
      </div>
    </div>
  );
}

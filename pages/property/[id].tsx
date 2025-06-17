import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Property Detail */}
      <PropertyDetail property={property} />

      {/* Responsive Grid for Booking and Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {/* Booking section (takes 1/3 on large screens) */}
        <div className="lg:col-span-1">
          <BookingSection property={property} />
        </div>

        {/* Review section (takes 2/3 on large screens) */}
        <div className="lg:col-span-2">
          <ReviewSection propertyId={property.id} />
        </div>
      </div>
    </div>
  );
}

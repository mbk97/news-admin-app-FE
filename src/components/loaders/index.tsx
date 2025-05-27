import { Skeleton } from "@mui/material";

const CategoryLoader = () => {
  const sharedClassName =
    "h-[58px] flex items-center justify-between bg-[white] shadow-md rounded-md p-2 mb-[20px] w-[100%] lg:w-[65%]";

  return (
    <div className="flex flex-col gap-4">
      <Skeleton variant="rectangular" height={50} className={sharedClassName} />
      <Skeleton variant="rectangular" height={50} className={sharedClassName} />
    </div>
  );
};

const ChartLoader = () => {
  return (
    <div className="mt-5">
      <Skeleton
        variant="rectangular"
        height={270}
        className="w-full rounded-md"
      />
    </div>
  );
};

const CardLoader = () => {
  return (
    <div className="w-[100%] h-[160px] rounded-xl p-5 bg-gray-100">
      {/* Icon and title */}
      <div className="flex items-center gap-2">
        <Skeleton variant="circular" width={30} height={30} />
        <Skeleton variant="text" width={120} height={30} />
      </div>

      {/* Card details with percentage */}
      <div className="flex items-center gap-2 my-3">
        <Skeleton variant="text" width={150} height={40} />
      </div>

      {/* Subtitle */}
      <Skeleton variant="text" width={180} height={20} />
    </div>
  );
};

const TableLoader = () => {
  return (
    <div className="w-full mt-5">
      {/* Table header */}
      <Skeleton
        variant="rectangular"
        height={40}
        className="w-full rounded-md mb-2"
      />

      {/* Table rows */}
      {[...Array(5)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          height={50}
          className="w-full rounded-md mb-2"
        />
      ))}
    </div>
  );
};

const TrendingNewsLoader = () => {
  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <div
          className="h-[90px] w-[100%] shadow-md border rounded-md p-1 mb-5 mt-3 gap-3"
          key={`trending-loader-${index}`}
        >
          <section className="flex gap-3">
            <div>
              <Skeleton variant="circular" width={70} height={70} />
            </div>
            <div>
              <Skeleton variant="text" width={150} height={20} />
              <div>
                <Skeleton variant="text" width={120} height={15} />
                <Skeleton variant="text" width={100} height={15} />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export {
  CategoryLoader,
  ChartLoader,
  TableLoader,
  CardLoader,
  TrendingNewsLoader,
};

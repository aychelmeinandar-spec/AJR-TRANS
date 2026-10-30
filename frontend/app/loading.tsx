export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">

      <div className="flex flex-col items-center">

        <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

        <p className="mt-6 font-semibold text-slate-600">
          Memuat AJR Trans...
        </p>

      </div>

    </div>
  );
}